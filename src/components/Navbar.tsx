'use client';

import React, { useState } from 'react';
import { useNavigate, useLocation } from '../utils/navigation';
import { Sparkles, LogIn, LogOut, Palette, Shield, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#3D2418] bg-[#4B2E1F] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-left group cursor-pointer"
        >
          <div className="text-2xl font-['Instrument_Serif',serif] font-normal tracking-tight text-[#FDFFEB]" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
            Pop<span className="text-[#F4B8A5]">@</span><span className="text-[#FDFFEB] italic">Pic!</span>
          </div>
        </button>

        {/* Public Desktop Nav Links (For Guest) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-[#FDFFEB]/80">
          <button
            onClick={() => navigate('/')}
            className={`transition-colors hover:text-[#FDFFEB] cursor-pointer ${
              isHome ? 'text-[#FDFFEB] font-bold border-b-2 border-[#FDFFEB] pb-0.5' : 'text-[#FDFFEB]/80'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => navigate('/frames')}
            className={`transition-colors hover:text-[#FDFFEB] cursor-pointer ${
              location.pathname === '/frames' || location.pathname === '/browse-frames'
                ? 'text-[#FDFFEB] font-bold border-b-2 border-[#FDFFEB] pb-0.5'
                : 'text-[#FDFFEB]/80'
            }`}
          >
            Frames
          </button>
          <a
            href="/#about"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="transition-colors hover:text-[#FDFFEB] text-[#FDFFEB]/80 cursor-pointer"
          >
            About
          </a>

          {/* Conditional links for authenticated users */}
          {currentUser?.role === 'Creator' && (
            <button
              onClick={() => navigate('/creator-dashboard')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                location.pathname === '/creator-dashboard'
                  ? 'bg-[#3D2418] text-[#FDFFEB] border border-[#FDFFEB]/30'
                  : 'text-[#FDFFEB]/85 hover:bg-[#3D2418]'
              }`}
            >
              <Palette className="h-3.5 w-3.5 text-[#FDFFEB]" />
              <span>Studio</span>
            </button>
          )}

          {currentUser?.role === 'Admin' && (
            <button
              onClick={() => navigate('/admin-dashboard')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                location.pathname === '/admin-dashboard'
                  ? 'bg-[#3D2418] text-[#FDFFEB] border border-[#FDFFEB]/30'
                  : 'text-[#FDFFEB]/85 hover:bg-[#3D2418]'
              }`}
            >
              <Shield className="h-3.5 w-3.5 text-[#FDFFEB]" />
              <span>Admin</span>
            </button>
          )}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2.5">
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 rounded-lg border border-[#FDFFEB]/30 bg-[#3D2418] px-3 py-1.5 text-xs font-semibold text-[#FDFFEB] hover:bg-[#2C1910] transition-colors shadow-xs cursor-pointer"
              >
                <div
                  className="flex h-5 w-5 items-center justify-center rounded text-[#4B2E1F] bg-[#DEE6BD] text-[10px] font-bold"
                >
                  {currentUser.role === 'Admin' ? 'A' : 'C'}
                </div>
                <span className="max-w-[90px] truncate text-[#FDFFEB]">{currentUser.name}</span>
                <ChevronDown className="h-3 w-3 text-[#FDFFEB]/70" />
              </button>

              {/* Profile Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg border border-[#B8C8DB] bg-[#FDFFEB] p-1.5 shadow-md z-50">
                  <div className="px-2.5 py-2 border-b border-[#DE9784]/30">
                    <p className="text-xs font-semibold text-[#4B2E1F] truncate">{currentUser.name}</p>
                    <p className="text-[10px] text-[#4B2E1F]/70 truncate">{currentUser.email}</p>
                    <span className="inline-block mt-1 px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase bg-[#DEE6BD] text-[#4B2E1F]">
                      {currentUser.role}
                    </span>
                  </div>

                  <div className="py-1">
                    {currentUser.role === 'Creator' && (
                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          navigate('/creator-dashboard');
                        }}
                        className="w-full flex items-center gap-2 rounded px-2.5 py-1.5 text-xs font-medium text-[#4B2E1F] hover:bg-[#DEE6BD]/60 text-left transition-colors cursor-pointer"
                      >
                        <Palette className="h-3.5 w-3.5 text-[#4B2E1F]" />
                        <span>Studio</span>
                      </button>
                    )}

                    {currentUser.role === 'Admin' && (
                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          navigate('/admin-dashboard');
                        }}
                        className="w-full flex items-center gap-2 rounded px-2.5 py-1.5 text-xs font-medium text-[#4B2E1F] hover:bg-[#DEE6BD]/60 text-left transition-colors cursor-pointer"
                      >
                        <Shield className="h-3.5 w-3.5 text-[#4B2E1F]" />
                        <span>Admin Console</span>
                      </button>
                    )}

                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        logout();
                        navigate('/');
                      }}
                      className="w-full flex items-center gap-2 rounded px-2.5 py-1.5 text-xs font-medium text-[#4B2E1F]/70 hover:bg-[#F4B8A5]/30 text-left transition-colors cursor-pointer"
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="flex items-center gap-1.5 rounded-lg border border-[#FDFFEB]/30 bg-[#3D2418] px-3.5 py-1.5 text-xs font-semibold text-[#FDFFEB] hover:bg-[#2C1910] transition-colors shadow-xs cursor-pointer"
            >
              <LogIn className="h-3.5 w-3.5 text-[#FDFFEB]" />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
