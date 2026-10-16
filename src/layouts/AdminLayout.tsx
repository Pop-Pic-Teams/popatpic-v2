'use client';

import React, { useState } from 'react';
import { AdminSidebar, type AdminView } from '../admin/AdminSidebar';
import { getAllFrames } from '../data/frames';

interface AdminLayoutProps {
  children?: React.ReactNode;
  currentView?: AdminView;
  onSelectView?: (view: AdminView) => void;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  currentView = 'overview',
  onSelectView,
}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [internalView, setInternalView] = useState<AdminView>(currentView);

  const activeView = onSelectView ? currentView : internalView;
  const handleSelectView = (view: AdminView) => {
    if (onSelectView) {
      onSelectView(view);
    } else {
      setInternalView(view);
    }
  };

  const allFrames = getAllFrames();
  const pendingCount = allFrames.filter((f) => f.status === 'pending_review').length;

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex font-sans text-[#2C211B]">
      {/* ADMIN SIDEBAR */}
      <AdminSidebar
        currentView={activeView}
        onSelectView={handleSelectView}
        pendingFramesCount={pendingCount}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Content Area */}
      <div className="flex-1 h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
