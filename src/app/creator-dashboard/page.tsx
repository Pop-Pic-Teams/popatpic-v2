'use client';

import { RoleGuard } from '../../routes/RoleGuard';
import { CreatorDashboard } from '../../creator/CreatorDashboard';

export default function CreatorDashboardRoutePage() {
  return (
    <RoleGuard allowedRoles={['Creator']}>
      <CreatorDashboard />
    </RoleGuard>
  );
}
