import { NextResponse, type NextRequest } from 'next/server';
import { getAuthenticatedUser } from '../../../../../../features/auth/server/auth-guard';
import { archiveFrameByCreator } from '../../../../../../features/frames/server/frames-service';

/**
 * POST /api/creator/frames/[id]/archive
 * Mengarsipkan frame milik kreator sendiri.
 */
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { userContext, errorResponse } = await getAuthenticatedUser('Creator');
  if (errorResponse || !userContext) return errorResponse;

  const { id: frameId } = await context.params;

  try {
    await archiveFrameByCreator(frameId, userContext.authUserId);
    return NextResponse.json({
      success: true,
      message: 'Frame successfully archived.',
    });
  } catch (err: any) {
    console.error(`[POST /api/creator/frames/${frameId}/archive] Error:`, err);
    return NextResponse.json(
      { success: false, error: err?.message || 'Failed to archive frame.' },
      { status: 500 }
    );
  }
}

