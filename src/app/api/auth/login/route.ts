import { NextResponse } from 'next/server';
import { createClient } from '../../../../utils/supabase/server';
import { createAdminClient } from '../../../../utils/supabase/admin';
import { validateLoginInput } from '../../../../features/auth/server/validation';
import {
  PROFILE_COLUMNS,
  isCrossOrigin,
  jsonError,
  mapRole,
  readJson,
  toPublicUser,
  type UserProfileRow,
} from '../../../../features/auth/server/shared';

/**
 * POST /api/auth/login
 * Body: { identifier, password }
 * identifier bisa berupa username atau email.
 *
 * Menggunakan Supabase Auth untuk verifikasi password (bcrypt hash).
 * Mengatur cookie sesi HttpOnly secara aman via @supabase/ssr.
 */
export async function POST(request: Request) {
  if (isCrossOrigin(request)) {
    return jsonError(403, 'Request denied.');
  }

  const parsed = validateLoginInput(await readJson(request));
  if (!parsed.ok) {
    return jsonError(400, parsed.error);
  }

  let admin: ReturnType<typeof createAdminClient>;
  try {
    admin = createAdminClient();
  } catch (err) {
    console.error('[auth/login] Supabase admin client init failed:', (err as Error).message);
    return jsonError(500, 'Authentication service is currently unavailable.');
  }

  let emailToAuth: string;
  const genericAuthError = 'Incorrect username/email or password.';

  if (parsed.data.kind === 'username') {
    // Cari email berdasarkan username dari public.users
    const { data: userRow, error: lookupErr } = await admin
      .from('users')
      .select('email, account_status')
      .eq('username', parsed.data.username)
      .maybeSingle();

    if (lookupErr) {
      console.error('[auth/login] username lookup failed:', lookupErr.code, lookupErr.message);
      return jsonError(500, 'An error occurred on the server. Please try again.');
    }

    if (!userRow) {
      return jsonError(401, genericAuthError);
    }

    emailToAuth = userRow.email;
  } else {
    emailToAuth = parsed.data.email;
  }

  // Verifikasi kredensial lewat Supabase Auth (membuat cookie sesi via createClient)
  const supabase = await createClient();
  const { data: authData, error: signInErr } = await supabase.auth.signInWithPassword({
    email: emailToAuth,
    password: parsed.data.password,
  });

  if (signInErr || !authData?.user) {
    return jsonError(401, genericAuthError);
  }

  const userId = authData.user.id;

  // Ambil profil lengkap dari public.users
  const { data: profile, error: profileErr } = await admin
    .from('users')
    .select(PROFILE_COLUMNS)
    .eq('id', userId)
    .single<UserProfileRow>();

  if (profileErr || !profile) {
    console.error('[auth/login] profile fetch failed:', profileErr?.code, profileErr?.message);
    await supabase.auth.signOut();
    return jsonError(500, 'Failed to load user profile. Please try again.');
  }

  // Cek apakah akun suspended
  if (profile.account_status === 'suspended') {
    await supabase.auth.signOut();
    return jsonError(
      403,
      'Your Creator account has been suspended by an Administrator due to a policy violation.'
    );
  }

  const role = mapRole(profile.role);
  if (!role) {
    console.error('[auth/login] unknown role for user:', profile.role);
    await supabase.auth.signOut();
    return jsonError(403, 'Your account role does not have access permissions.');
  }

  return NextResponse.json({
    success: true,
    role,
    user: toPublicUser(profile, role),
  });
}
