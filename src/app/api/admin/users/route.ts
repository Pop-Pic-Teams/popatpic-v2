import { NextResponse, type NextRequest } from 'next/server';
import { getAuthenticatedUser } from '../../../../features/auth/server/auth-guard';
import {
  getAllUsersAdmin,
  createUserAdmin,
} from '../../../../features/users/server/users-service';
import {
  validateRegisterInput,
} from '../../../../features/auth/server/validation';

/**
 * GET /api/admin/users
 * Mengambil daftar seluruh pengguna dari tabel database public.users untuk Administrator.
 * Password dan password hash tidak pernah disertakan.
 */
export async function GET() {
  const { userContext, errorResponse } = await getAuthenticatedUser('Admin');
  if (errorResponse || !userContext) return errorResponse;

  try {
    const users = await getAllUsersAdmin();
    return NextResponse.json({
      success: true,
      users,
    });
  } catch (err: any) {
    console.error('[GET /api/admin/users] Error:', err);
    return NextResponse.json(
      { success: false, error: 'failed to load user list from database.' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/admin/users
 * Menambahkan akun pengguna baru oleh Administrator.
 */
export async function POST(request: NextRequest) {
  const { userContext, errorResponse } = await getAuthenticatedUser('Admin');
  if (errorResponse || !userContext) return errorResponse;

  try {
    const body = await request.json();
    const role = (body.role || 'creator').toLowerCase() as 'admin' | 'creator';

    if (!['admin', 'creator'].includes(role)) {
      return NextResponse.json(
        { success: false, error: 'Invalid role. Options: admin, creator.' },
        { status: 400 }
      );
    }

    const regValidation = validateRegisterInput(body);
    if (!regValidation.ok) {
      return NextResponse.json(
        { success: false, error: regValidation.error },
        { status: 400 }
      );
    }

    const { email, password, name, username } = regValidation.data;

    const adminName =
      userContext.profile.full_name ||
      userContext.profile.username ||
      'Administrator Pop@Pic!';

    const createdUser = await createUserAdmin({
      email,
      password,
      name,
      username,
      role,
      adminId: userContext.authUserId,
      adminName,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'User created successfully.',
        user: createdUser,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error('[POST /api/admin/users] Error:', err);
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to add new user.' },
      { status: 400 }
    );
  }
}
