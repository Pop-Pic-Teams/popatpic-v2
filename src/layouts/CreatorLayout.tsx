'use client';

import React, { useState, useEffect } from 'react';
import { CreatorSidebar, type CreatorView } from '../creator/CreatorSidebar';
import { useAuth } from '../context/AuthContext';
import { fetchCreatorFrames } from '../features/frames/api/framesApi';
import type { FrameTemplate } from '../types/photobooth';

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
  const [frames, setFrames] = useState<FrameTemplate[]>([]);

  const activeView = onSelectView ? currentView : internalView;
  const handleSelectView = (view: CreatorView) => {
    if (onSelectView) {
      onSelectView(view);
    } else {
      setInternalView(view);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (currentUser) {
      fetchCreatorFrames().then((data) => {
        if (isMounted) setFrames(data);
      });
    }
    return () => {
      isMounted = false;
    };
  }, [currentUser]);

  const displayedFrames = currentUser ? frames : [];
  const pendingCount = displayedFrames.filter((f) => f.status === 'pending_review').length;

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex font-sans text-[#2C211B]">
      {/* CREATOR SIDEBAR - Dedicated navigation matching Admin Console */}
      <CreatorSidebar
        currentView={activeView}
        onSelectView={handleSelectView}
        framesCount={displayedFrames.length}
        pendingCount={pendingCount}
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
