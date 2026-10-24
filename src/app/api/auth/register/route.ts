import { NextResponse } from 'next/server';
import { createClient } from '../../../../utils/supabase/server';
import { createAdminClient } from '../../../../utils/supabase/admin';
import { validateRegisterInput } from '../../../../features/auth/server/validation';
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
 * POST /api/auth/register
 * Body: { name, username, email, password }
 *
 * - Password di-hash oleh Supabase Auth (bcrypt) dan disimpan di auth.users; tidak pernah
 *   disimpan plaintext di tabel mana pun.
 * - Keunikan email dijamin oleh constraint unik auth.users, keunikan username oleh
 *   unique index public.users(username).
 * - Akun Creator langsung aktif (sesuai alur UI) lalu otomatis login (cookie sesi HttpOnly).
 */
export async function POST(request: Request) {
  if (isCrossOrigin(request)) {
    return jsonError(403, 'Permintaan ditolak.');
  }

  const parsed = validateRegisterInput(await readJson(request));
  if (!parsed.ok) {
    return jsonError(400, parsed.error);
  }
  const { name, username, email, password } = parsed.data;

  let admin: ReturnType<typeof createAdminClient>;
  try {
    admin = createAdminClient();
  } catch (err) {
    console.error('[auth/register] Supabase admin client init failed:', (err as Error).message);
    return jsonError(500, 'Layanan pendaftaran sedang tidak tersedia.');
  }

  // 1. Cek username lebih awal agar pesan error jelas (race condition tetap ditangani oleh unique index).
  const { data: existingUsername, error: usernameCheckError } = await admin
    .from('users')
    .select('id')
    .eq('username', username)
    .maybeSingle();

  if (usernameCheckError) {
    console.error('[auth/register] username check failed:', usernameCheckError.code, usernameCheckError.message);
    return jsonError(500, 'Terjadi kesalahan pada server. Silakan coba lagi.');
  }
  if (existingUsername) {
    return jsonError(409, 'Username is already taken. Please choose another.');
  }

  // 2. Buat akun di Supabase Auth (hashing password dilakukan oleh Supabase).
  const { data: created, error: createError } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true, // UI: akun Creator langsung aktif tanpa verifikasi/approval
    user_metadata: { full_name: name, username },
  });

  if (createError || !created?.user) {
    const code = (createError as { code?: string } | null)?.code;
    const msg = createError?.message?.toLowerCase() ?? '';
    if (code === 'email_exists' || code === 'user_already_exists' || msg.includes('already been registered')) {
      return jsonError(409, 'Email is already registered.');
    }
    if (code === 'weak_password') {
      return jsonError(400, 'Kata sandi terlalu lemah.');
    }
    console.error('[auth/register] createUser failed:', code, createError?.message);
    return jsonError(500, 'Terjadi kesalahan pada server. Silakan coba lagi.');
  }

  const userId = created.user.id;

  // Rollback jika langkah berikutnya gagal, agar tidak ada akun setengah jadi.
  const rollback = async () => {
    await admin.from('users').delete().eq('id', userId);
    const { error } = await admin.auth.admin.deleteUser(userId);
    if (error) console.error('[auth/register] rollback deleteUser failed:', error.message);
  };

  // 3. Simpan/lengkapi profil di public.users (upsert: aman baik ada trigger on-signup maupun tidak).
  const { data: profile, error: profileError } = await admin
    .from('users')
    .upsert(
      { id: userId, email, full_name: name, username, role: 'creator' },
      { onConflict: 'id' }
    )
    .select(PROFILE_COLUMNS)
    .single<UserProfileRow>();

  if (profileError || !profile) {
    await rollback();
    if (profileError?.code === '23505') {
      // unique_violation: username diambil request lain secara bersamaan
      return jsonError(409, 'Username is already taken. Please choose another.');
    }
    console.error('[auth/register] profile upsert failed:', profileError?.code, profileError?.message);
    return jsonError(500, 'Terjadi kesalahan pada server. Silakan coba lagi.');
  }

  const role = mapRole(profile.role);
  if (!role) {
    await rollback();
    console.error('[auth/register] unexpected role after upsert:', profile.role);
    return jsonError(500, 'Terjadi kesalahan pada server. Silakan coba lagi.');
  }

  // Registrasi berhasil. Pengguna harus login secara manual di halaman login.
  return NextResponse.json(
    {
      success: true,
      message: 'Pendaftaran berhasil! Silakan masuk dengan akun baru Anda.',
    },
    { status: 201 }
  );
}
