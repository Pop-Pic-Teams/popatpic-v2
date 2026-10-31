import { NextResponse, type NextRequest } from 'next/server';
import { getAuthenticatedUser } from '../../../../../../features/auth/server/auth-guard';
import { moderateFrameByAdmin } from '../../../../../../features/frames/server/frames-service';

/**
 * POST /api/admin/frames/[id]/review
 * Memproses keputusan moderasi frame oleh Administrator:
 * - 'approve': menyetujui frame sehingga muncul di katalog publik photobooth
 * - 'reject': menolak frame dengan catatan alasan penolakan
 * - 'archive': mengarsipkan frame dari tampilan publik
 * - 'toggle_active': mengubah visibilitas aktif/non-aktif
 */
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { userContext, errorResponse } = await getAuthenticatedUser('Admin');
  if (errorResponse || !userContext) return errorResponse;

  const { id: frameId } = await context.params;

  try {
    const body = await request.json();
    const decision = body.decision;
    const reason = body.reason;

    if (!['approve', 'reject', 'archive', 'toggle_active'].includes(decision)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid decision choice. Options: approve, reject, archive, toggle_active.',
        },
        { status: 400 }
      );
    }

    if (decision === 'reject' && (!reason || !reason.trim())) {
      return NextResponse.json(
        { success: false, error: 'A rejection reason is required when rejecting a frame.' },
        { status: 400 }
      );
    }

    const adminName =
      userContext.profile.full_name ||
      userContext.profile.username ||
      'Administrator Pop@Pic!';

    const updatedFrame = await moderateFrameByAdmin({
      frameId,
      decision,
      adminId: userContext.authUserId,
      adminName,
      reason,
    });

    return NextResponse.json({
      success: true,
      message: `Moderation decision (${decision}) saved successfully.`,
      frame: updatedFrame,
    });
  } catch (err: any) {
    console.error(`[POST /api/admin/frames/${frameId}/review] Error:`, err);
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to process frame moderation.' },
      { status: 500 }
    );
  }
}

