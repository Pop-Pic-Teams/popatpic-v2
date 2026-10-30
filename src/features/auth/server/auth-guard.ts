import { NextResponse } from 'next/server';
import { createClient } from '../../../utils/supabase/server';
import { createAdminClient } from '../../../utils/supabase/admin';
import {
  PROFILE_COLUMNS,
  mapRole,
  type UserProfileRow,
} from './shared';

export interface AuthenticatedUserContext {
  authUserId: string;
  email: string;
  profile: UserProfileRow;
  role: 'Admin' | 'Creator';
}

/**
 * Memverifikasi apakah request berasal dari pengguna yang terautentikasi melalui cookie sesi HttpOnly.
 * Jika valid, mengembalikan konteks pengguna beserta profil dari database.
 * Jika tidak valid atau akun dinonaktifkan (suspended), mengembalikan NextResponse error (401 atau 403).
 */
export async function getAuthenticatedUser(
  requiredRole?: 'Admin' | 'Creator'
): Promise<{ userContext?: AuthenticatedUserContext; errorResponse?: NextResponse }> {
  try {
    const supabase = await createClient();
    const {
      data: { user: authUser },
      error: authErr,
    } = await supabase.auth.getUser();

    if (authErr || !authUser || !authUser.email) {
      return {
        errorResponse: NextResponse.json(
          { success: false, error: 'Akses ditolak. Sesi autentikasi tidak ditemukan.' },
          { status: 401 }
        ),
      };
    }

    const admin = createAdminClient();
    const { data: profile, error: profileErr } = await admin
      .from('users')
      .select(PROFILE_COLUMNS)
      .eq('id', authUser.id)
      .single<UserProfileRow>();

    if (profileErr || !profile) {
      return {
        errorResponse: NextResponse.json(
          { success: false, error: 'Profil pengguna tidak ditemukan di database.' },
          { status: 401 }
        ),
      };
    }

    const role = mapRole(profile.role);
    if (!role) {
      return {
        errorResponse: NextResponse.json(
          { success: false, error: 'Role pengguna tidak valid.' },
          { status: 403 }
        ),
      };
    }

    // Periksa status akun: akun yang disuspend tidak diizinkan melakukan operasi
    if (profile.account_status === 'suspended') {
      return {
        errorResponse: NextResponse.json(
          { success: false, error: 'Akun Anda sedang dinonaktifkan (suspended) oleh Administrator.' },
          { status: 403 }
        ),
      };
    }

    // Jika dibutuhkan role spesifik
    if (requiredRole && role !== requiredRole) {
      return {
        errorResponse: NextResponse.json(
          { success: false, error: `Akses terlarang. Diperlukan hak akses ${requiredRole}.` },
          { status: 403 }
        ),
      };
    }

    return {
      userContext: {
        authUserId: authUser.id,
        email: authUser.email,
        profile,
        role,
      },
    };
  } catch (err: any) {
    return {
      errorResponse: NextResponse.json(
        { success: false, error: err?.message || 'Terjadi kesalahan autentikasi server.' },
        { status: 500 }
      ),
    };
  }
}

