import { NextResponse } from 'next/server';
import { createClient } from '../../../../utils/supabase/server';
import { createAdminClient } from '../../../../utils/supabase/admin';
import {
  PROFILE_COLUMNS,
  mapRole,
  toPublicUser,
  type UserProfileRow,
} from '../../../../features/auth/server/shared';

/**
 * GET /api/auth/me
 * Mengambil informasi pengguna dari sesi login aktif (berdasarkan cookie HttpOnly).
 */
export async function GET() {
  const supabase = await createClient();
  const {
    data: { user: authUser },
    error: authErr,
  } = await supabase.auth.getUser();

  if (authErr || !authUser) {
    return NextResponse.json({ authenticated: false, user: null }, { status: 200 });
  }

  const admin = createAdminClient();
  const { data: profile, error: profileErr } = await admin
    .from('users')
    .select(PROFILE_COLUMNS)
    .eq('id', authUser.id)
    .single<UserProfileRow>();

  if (profileErr || !profile) {
    return NextResponse.json({ authenticated: false, user: null }, { status: 200 });
  }

  const role = mapRole(profile.role);
  if (!role) {
    return NextResponse.json({ authenticated: false, user: null }, { status: 200 });
  }

  return NextResponse.json({
    authenticated: true,
    role,
    user: toPublicUser(profile, role),
  });
}
