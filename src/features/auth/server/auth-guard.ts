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
          { success: false, error: 'Access denied. Authentication session not found.' },
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
          { success: false, error: 'User profile not found in the database.' },
          { status: 401 }
        ),
      };
    }

    const role = mapRole(profile.role);
    if (!role) {
      return {
        errorResponse: NextResponse.json(
          { success: false, error: 'Invalid user role.' },
          { status: 403 }
        ),
      };
    }

    // Periksa status akun: akun yang disuspend tidak diizinkan melakukan operasi
    if (profile.account_status === 'suspended') {
      return {
        errorResponse: NextResponse.json(
          { success: false, error: 'Your account has been suspended by the Administrator.' },
          { status: 403 }
        ),
      };
    }

    // Jika dibutuhkan role spesifik
    if (requiredRole && role !== requiredRole) {
      return {
        errorResponse: NextResponse.json(
          { success: false, error: `Forbidden access. The ${requiredRole} role is required.` },
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
        { success: false, error: err?.message || 'An authentication server error occurred.' },
        { status: 500 }
      ),
    };
  }
}

