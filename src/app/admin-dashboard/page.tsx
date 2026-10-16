'use client';

import { RoleGuard } from '../../routes/RoleGuard';
import { AdminDashboard } from '../../admin/AdminDashboard';

export default function AdminDashboardRoutePage() {
  return (
    <RoleGuard allowedRoles={['Admin']}>
      <AdminDashboard />
    </RoleGuard>
  );
}
