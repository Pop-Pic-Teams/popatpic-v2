import { NextResponse } from 'next/server';
import { getAuthenticatedUser } from '../../../../features/auth/server/auth-guard';
import { getAllFramesForAdmin } from '../../../../features/frames/server/frames-service';

/**
 * GET /api/admin/frames
 * Mengambil seluruh frame dalam database untuk moderasi oleh Administrator.
 */
export async function GET() {
  const { userContext, errorResponse } = await getAuthenticatedUser('Admin');
  if (errorResponse || !userContext) return errorResponse;

  try {
    const frames = await getAllFramesForAdmin();
    return NextResponse.json({
      success: true,
      frames,
    });
  } catch (err: any) {
    console.error('[GET /api/admin/frames] Error:', err);
    return NextResponse.json(
      { success: false, error: 'Gagal memuat frame untuk admin.' },
      { status: 500 }
    );
  }
}

