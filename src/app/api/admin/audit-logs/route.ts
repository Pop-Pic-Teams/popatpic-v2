import { NextResponse } from 'next/server';
import { getAuthenticatedUser } from '../../../../features/auth/server/auth-guard';
import { getAuditLogsForAdmin } from '../../../../features/frames/server/frames-service';

/**
 * GET /api/admin/audit-logs
 * Mengambil log aktivitas audit moderasi dan manajemen akun untuk Administrator.
 */
export async function GET() {
  const { userContext, errorResponse } = await getAuthenticatedUser('Admin');
  if (errorResponse || !userContext) return errorResponse;

  try {
    const logs = await getAuditLogsForAdmin();
    return NextResponse.json({
      success: true,
      logs,
    });
  } catch (err: any) {
    console.error('[GET /api/admin/audit-logs] Error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to load audit logs.' },
      { status: 500 }
    );
  }
}

