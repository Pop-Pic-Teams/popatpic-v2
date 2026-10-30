import { NextResponse, type NextRequest } from 'next/server';
import { getAuthenticatedUser } from '../../../../../features/auth/server/auth-guard';
import { deleteFrameByAdmin } from '../../../../../features/frames/server/frames-service';

/**
 * DELETE /api/admin/frames/[id]
 * Menghapus frame secara permanen oleh Administrator.
 */
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { userContext, errorResponse } = await getAuthenticatedUser('Admin');
  if (errorResponse || !userContext) return errorResponse;

  const { id: frameId } = await context.params;

  try {
    const adminName =
      userContext.profile.full_name ||
      userContext.profile.username ||
      'Administrator Pop@Pic!';

    await deleteFrameByAdmin(frameId, userContext.authUserId, adminName);

    return NextResponse.json({
      success: true,
      message: 'Frame berhasil dihapus dari database.',
    });
  } catch (err: any) {
    console.error(`[DELETE /api/admin/frames/${frameId}] Error:`, err);
    return NextResponse.json(
      { success: false, error: err?.message || 'Gagal menghapus frame.' },
      { status: 500 }
    );
  }
}

