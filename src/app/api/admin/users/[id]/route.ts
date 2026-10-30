import { NextResponse, type NextRequest } from 'next/server';
import { getAuthenticatedUser } from '../../../../../features/auth/server/auth-guard';
import {
  updateUserStatusAdmin,
  deleteUserAdmin,
} from '../../../../../features/users/server/users-service';

/**
 * PATCH /api/admin/users/[id]
 * Mengubah status akun pengguna (active / suspended) oleh Administrator.
 */
export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { userContext, errorResponse } = await getAuthenticatedUser('Admin');
  if (errorResponse || !userContext) return errorResponse;

  const { id: targetUserId } = await context.params;

  try {
    const body = await request.json();
    const status = body.status;

    if (!['active', 'suspended'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Status tidak valid. Pilihan: active atau suspended.' },
        { status: 400 }
      );
    }

    const adminName =
      userContext.profile.full_name ||
      userContext.profile.username ||
      'Administrator Pop@Pic!';

    const updatedUser = await updateUserStatusAdmin({
      targetUserId,
      newStatus: status,
      adminId: userContext.authUserId,
      adminName,
    });

    return NextResponse.json({
      success: true,
      message: `Status akun pengguna berhasil diubah menjadi ${status}.`,
      user: updatedUser,
    });
  } catch (err: any) {
    console.error(`[PATCH /api/admin/users/${targetUserId}] Error:`, err);
    return NextResponse.json(
      { success: false, error: err?.message || 'Gagal mengubah status pengguna.' },
      { status: 400 }
    );
  }
}

/**
 * DELETE /api/admin/users/[id]
 * Menghapus akun pengguna secara permanen oleh Administrator.
 */
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { userContext, errorResponse } = await getAuthenticatedUser('Admin');
  if (errorResponse || !userContext) return errorResponse;

  const { id: targetUserId } = await context.params;

  try {
    const adminName =
      userContext.profile.full_name ||
      userContext.profile.username ||
      'Administrator Pop@Pic!';

    await deleteUserAdmin({
      targetUserId,
      adminId: userContext.authUserId,
      adminName,
    });

    return NextResponse.json({
      success: true,
      message: 'Akun pengguna berhasil dihapus.',
    });
  } catch (err: any) {
    console.error(`[DELETE /api/admin/users/${targetUserId}] Error:`, err);
    return NextResponse.json(
      { success: false, error: err?.message || 'Gagal menghapus pengguna.' },
      { status: 400 }
    );
  }
}

