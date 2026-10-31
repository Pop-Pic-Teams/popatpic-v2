import { NextResponse } from 'next/server';
import { createClient } from '../../../../utils/supabase/server';
import { isCrossOrigin, jsonError } from '../../../../features/auth/server/shared';

/**
 * POST /api/auth/logout
 * Menghapus sesi login dan membersihkan cookie autentikasi di browser.
 */
export async function POST(request: Request) {
  if (isCrossOrigin(request)) {
    return jsonError(403, 'Request denied.');
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('[auth/logout] signOut failed:', error.code, error.message);
    return jsonError(500, 'Failed to log out. Please try again.');
  }

  return NextResponse.json({ success: true });
}
