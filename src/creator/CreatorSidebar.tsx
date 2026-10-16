'use client';

import React, { useState } from 'react';
import { useNavigate } from '../utils/navigation';
import {
  LayoutDashboard,
  Image as ImageIcon,
  PlusCircle,
  BookOpen,
  Palette,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  Menu,
  X,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export type CreatorView = 'overview' | 'frames' | 'upload' | 'guidelines';

interface CreatorSidebarProps {
  currentView: CreatorView;
  onSelectView: (view: CreatorView) => void;
  framesCount: number;
  pendingCount: number;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const CreatorSidebar: React.FC<CreatorSidebarProps> = ({
  currentView,
  onSelectView,
  framesCount,
  pendingCount,
  isCollapsed = false,
  onToggleCollapse,
}) => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    {
      id: 'overview' as CreatorView,
      label: 'Overview & Stats',
      icon: LayoutDashboard,
    },
    {
      id: 'frames' as CreatorView,
      label: 'My Frame Collection',
      icon: ImageIcon,
      badge: framesCount > 0 ? framesCount : undefined,
    },
    {
      id: 'upload' as CreatorView,
      label: 'Upload New Frame',
      icon: PlusCircle,
    },
    {
      id: 'guidelines' as CreatorView,
      label: 'Design Guidelines',
      icon: BookOpen,
    },
  ];

  const handleSelectNav = (view: CreatorView) => {
    onSelectView(view);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* ========================================================= */}
      {/* MOBILE TOP BAR (md:hidden) - Sidebar TIDAK di samping     */}
      {/* ========================================================= */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#4B2E1F] text-[#FDFFEB] z-40 border-b border-[#3D2418] flex items-center justify-between px-4 shadow-md">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3D2418] text-[#F4B8A5] border border-[#DEE6BD]/20">
            <Palette className="h-4 w-4" />
          </div>
          <div>
            <span className="text-xl font-serif tracking-tight text-[#FDFFEB]">
              Pop<span className="text-[#F4B8A5]">@</span><span className="text-[#FDFFEB] italic">Pic!</span>
            </span>
            <span className="ml-2 text-[9px] bg-[#3D2418] text-[#DEE6BD] px-1.5 py-0.5 rounded border border-[#DEE6BD]/20 font-bold uppercase tracking-wider">
              Creator
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsMobileOpen(true)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#3D2418] text-[#FDFFEB] border border-[#DEE6BD]/20 hover:bg-[#2A180E] transition-colors cursor-pointer shadow-xs"
          aria-label="Buka Menu Creator"
          title="Buka Menu Creator"
        >
          <Menu className="h-5 w-5" />
        </button>
      </header>

      {/* ========================================================= */}
      {/* MOBILE DRAWER MODAL (md:hidden)                          */}
      {/* ========================================================= */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-72 max-w-[80vw] bg-[#4B2E1F] text-[#FDFFEB] h-full flex flex-col justify-between shadow-2xl z-10 border-r border-[#3D2418] p-4">
            <div>
              {/* Header with Close */}
              <div className="flex items-center justify-between border-b border-[#3D2418] pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3D2418] text-[#F4B8A5] border border-[#DEE6BD]/20">
                    <Palette className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <div className="text-xl font-serif tracking-tight text-[#FDFFEB]">
                      Pop<span className="text-[#F4B8A5]">@</span><span className="text-[#FDFFEB] italic">Pic!</span>
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-[#DEE6BD]">
                      Creator Studio
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-lg p-1.5 text-[#FDFFEB]/70 hover:text-[#FDFFEB] hover:bg-[#3D2418] transition-colors cursor-pointer"
                  aria-label="Tutup Menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-1.5">
                <div className="px-2 py-1 text-[10px] font-semibold uppercase text-[#FDFFEB]/60 tracking-wider">
                  Creator Menu
                </div>

                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentView === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectNav(item.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#FDFFEB] text-[#4B2E1F] font-bold shadow-xs'
                          : 'text-[#FDFFEB]/85 hover:bg-[#3D2418] hover:text-[#FDFFEB]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4.5 w-4.5 shrink-0" />
                        <span>{item.label}</span>
                      </div>

                      {item.badge !== undefined && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#F4B8A5] text-[#4B2E1F]">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Account & Logout */}
            <div className="border-t border-[#3D2418] pt-3">
              <div className="flex items-center justify-between bg-[#3D2418] p-2.5 rounded-xl border border-[#DEE6BD]/20">
                <div className="min-w-0 pr-2">
                  <div className="text-xs font-bold text-[#FDFFEB] truncate">
                    {currentUser?.name || 'Creator'}
                  </div>
                  <div className="text-[10px] text-[#DEE6BD]">Verified Creator</div>
                </div>

                <button
                  onClick={() => {
                    logout();
                    navigate('/login');
                  }}
                  className="rounded-lg p-1.5 text-red-300 hover:bg-red-900/40 transition-colors cursor-pointer"
                  title="Sign Out"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* DESKTOP SIDEBAR (hidden md:flex) - Coklat Tua Sesuai Guest */}
      {/* ========================================================= */}
      <aside
        className={`hidden md:flex flex-col justify-between h-screen sticky top-0 bg-[#4B2E1F] text-[#FDFFEB] border-r border-[#3D2418] font-sans z-30 shrink-0 transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div>
          {/* Header & Logo + Collapse Button (Tanpa tombol ke guest di sebelahnya) */}
          <div
            className={`border-b border-[#3D2418] flex items-center justify-between ${
              isCollapsed ? 'p-3 flex-col gap-2' : 'p-5'
            }`}
          >
            <div className="flex items-center gap-3 overflow-hidden text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3D2418] text-[#F4B8A5] border border-[#DEE6BD]/20 shadow-xs">
                <Palette className="h-5 w-5" />
              </div>
              {!isCollapsed && (
                <div className="min-w-0">
                  <div className="text-2xl font-serif tracking-tight text-[#FDFFEB] leading-tight truncate">
                    Pop<span className="text-[#F4B8A5]">@</span><span className="text-[#FDFFEB] italic">Pic!</span>
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#DEE6BD]">
                    Creator Studio
                  </div>
                </div>
              )}
            </div>

            {/* Toggle Sidebar Collapse Button */}
            {onToggleCollapse && (
              <button
                onClick={onToggleCollapse}
                className={`rounded-lg border border-[#DEE6BD]/20 bg-[#3D2418] p-1.5 text-[#FDFFEB]/80 hover:text-[#FDFFEB] hover:bg-[#2A180E] transition-colors cursor-pointer shadow-2xs ${
                  isCollapsed ? 'w-full flex justify-center' : ''
                }`}
                title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
                aria-label={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
              >
                {isCollapsed ? (
                  <PanelLeftOpen className="h-4 w-4" />
                ) : (
                  <PanelLeftClose className="h-4 w-4" />
                )}
              </button>
            )}
          </div>

          {/* Navigation Items */}
          <nav className="p-3 space-y-1.5">
            {!isCollapsed && (
              <div className="px-3 py-1.5 text-[10px] font-semibold uppercase text-[#FDFFEB]/60 tracking-wider">
                Creator Menu
              </div>
            )}

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onSelectView(item.id)}
                  title={isCollapsed ? item.label : undefined}
                  className={`w-full flex items-center rounded-xl text-xs font-semibold transition-all cursor-pointer group relative ${
                    isCollapsed
                      ? 'justify-center p-3'
                      : 'justify-between px-3.5 py-2.5 text-left'
                  } ${
                    isActive
                      ? 'bg-[#FDFFEB] text-[#4B2E1F] font-bold shadow-xs'
                      : 'text-[#FDFFEB]/80 hover:bg-[#3D2418] hover:text-[#FDFFEB]'
                  }`}
                >
                  <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
                    <Icon className={`h-4.5 w-4.5 shrink-0 ${isActive ? 'text-[#4B2E1F]' : 'text-[#F4B8A5]'}`} />
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </div>

                  {item.badge !== undefined && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        isActive
                          ? 'bg-[#4B2E1F] text-[#FDFFEB]'
                          : 'bg-[#F4B8A5] text-[#4B2E1F] border border-[#DE9784]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer / Account Section */}
        <div className="p-3 border-t border-[#3D2418] bg-[#3D2418]/50">
          <div
            className={`flex items-center ${
              isCollapsed ? 'flex-col gap-2 justify-center' : 'justify-between px-1'
            }`}
          >
            {!isCollapsed ? (
              <div className="overflow-hidden min-w-0 pr-2">
                <div className="text-xs font-bold text-[#FDFFEB] truncate">
                  {currentUser?.name || 'Creator'}
                </div>
                <div className="text-[10px] text-[#DEE6BD] font-medium">Verified Creator</div>
              </div>
            ) : (
              <div
                className="h-8 w-8 rounded-lg bg-[#3D2418] text-[#F4B8A5] border border-[#DEE6BD]/20 flex items-center justify-center font-bold text-xs"
                title={currentUser?.name || 'Creator'}
              >
                C
              </div>
            )}

            <button
              onClick={() => {
                logout();
                navigate('/login');
              }}
              className={`rounded-lg flex items-center justify-center text-[#FDFFEB]/70 hover:bg-red-950/50 hover:text-red-300 transition-colors cursor-pointer ${
                isCollapsed ? 'h-9 w-9 p-0' : 'h-8 w-8'
              }`}
              title="Sign Out"
              aria-label="Sign Out"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
