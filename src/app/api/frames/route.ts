import { NextResponse } from 'next/server';
import { getPublicApprovedFrames } from '../../../features/frames/server/frames-service';

/**
 * GET /api/frames
 * Mengambil daftar frame photobooth publik yang telah disetujui (approved) dan aktif (is_active).
 * Frame yang berstatus 'pending_review', 'rejected', atau 'draft' TIDAK AKAN PERNAH muncul di sini.
 */
export async function GET() {
  try {
    const frames = await getPublicApprovedFrames();
    return NextResponse.json({
      success: true,
      frames,
    });
  } catch (err: any) {
    console.error('[GET /api/frames] Error:', err);
    return NextResponse.json(
      { success: false, error: 'Gagal mengambil daftar frame publik.' },
      { status: 500 }
    );
  }
}

