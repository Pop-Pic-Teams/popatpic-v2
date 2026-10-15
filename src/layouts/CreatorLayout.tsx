import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CreatorSidebar, type CreatorView } from '../creator/CreatorSidebar';
import { useAuth } from '../context/AuthContext';
import { getFramesByCreator } from '../data/frames';

interface CreatorLayoutProps {
  children?: React.ReactNode;
  currentView?: CreatorView;
  onSelectView?: (view: CreatorView) => void;
}

export const CreatorLayout: React.FC<CreatorLayoutProps> = ({
  children,
  currentView = 'overview',
  onSelectView,
}) => {
  const { currentUser } = useAuth();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [internalView, setInternalView] = useState<CreatorView>(currentView);

  const activeView = onSelectView ? currentView : internalView;
  const handleSelectView = (view: CreatorView) => {
    if (onSelectView) {
      onSelectView(view);
    } else {
      setInternalView(view);
    }
  };

  const frames = currentUser ? getFramesByCreator(currentUser.id) : [];
  const pendingCount = frames.filter((f) => f.status === 'pending_review').length;

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex font-sans text-[#2C211B]">
      {/* CREATOR SIDEBAR - Dedicated navigation matching Admin Console */}
      <CreatorSidebar
        currentView={activeView}
        onSelectView={handleSelectView}
        framesCount={frames.length}
        pendingCount={pendingCount}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Content Area */}
      <div className="flex-1 h-screen overflow-y-auto">
        {children || <Outlet />}
      </div>
    </div>
  );
};
