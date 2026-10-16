'use client';

import React, { useState } from 'react';
import { useNavigate } from '../utils/navigation';
import { ArrowLeft, Palette, LogIn, UserPlus, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const CreatorLogin: React.FC = () => {
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');

  // Sign In Form States
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  // Sign Up Form States
  const [signupName, setSignupName] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const res = await login(identifier, password);
      if (res.success) {
        setSuccessMessage('Otentikasi berhasil!');
        setTimeout(() => {
          if (res.role === 'Admin') {
            navigate('/admin-dashboard');
          } else {
            navigate('/creator-dashboard');
          }
        }, 500);
      } else {
        setErrorMessage(res.error || 'Username atau kata sandi tidak valid.');
      }
    } catch {
      setErrorMessage('Terjadi kesalahan saat menghubungi server otentikasi.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const res = await register(
        signupEmail,
        signupPassword,
        signupName,
        signupUsername || undefined
      );
      if (res.success) {
        setSuccessMessage('Pendaftaran berhasil! Akun Creator Anda aktif dan siap digunakan.');
        setTimeout(() => {
          navigate('/creator-dashboard');
        }, 800);
      } else {
        setErrorMessage(res.error || 'Pendaftaran gagal.');
      }
    } catch {
      setErrorMessage('Terjadi kesalahan saat pendaftaran.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFFEB] text-[#4B2E1F] font-sans flex flex-col justify-between py-10 px-6">
      {/* Top Bar */}
      <div className="mx-auto w-full max-w-md flex items-center justify-between mb-6">
        <button
          onClick={() => navigate('/')}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F] transition-colors hover:bg-[#DEE6BD] cursor-pointer shadow-xs"
          aria-label="Back to Home"
          title="Back"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div className="text-2xl font-['Instrument_Serif',serif] font-normal tracking-tight text-[#4B2E1F]">
          Pop<span className="text-[#DEE6BD]">@</span><span className="text-[#4B2E1F] italic">Pic!</span>
        </div>
      </div>

      {/* Main Card */}
      <div className="mx-auto w-full max-w-md rounded-xl bg-white p-7 md:p-8 shadow-xs border border-[#DEE6BD]">
        {/* Header Branding */}
        <div className="text-center mb-6">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-[#4B2E1F] text-[#FDFFEB] mb-3 shadow-xs">
            <Palette className="h-5 w-5" />
          </div>
          <h1 className="text-2xl font-serif font-normal text-[#4B2E1F]">
            {activeTab === 'signin' ? 'Creator Sign In' : 'Creator Sign Up'}
          </h1>
          <p className="text-xs text-[#4B2E1F]/70 mt-0.5">
            {activeTab === 'signin'
              ? 'Manage and upload your frame creations'
              : 'Join to design and publish aesthetic frames'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-lg bg-[#FDFFEB] border border-[#DEE6BD] p-0.5 mb-5">
          <button
            type="button"
            onClick={() => {
              setActiveTab('signin');
              setErrorMessage(null);
            }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'signin'
                ? 'bg-[#4B2E1F] text-[#FDFFEB] shadow-xs'
                : 'text-[#4B2E1F]/70 hover:text-[#4B2E1F]'
            }`}
          >
            <LogIn className="h-3.5 w-3.5" />
            <span>Sign In</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('signup');
              setErrorMessage(null);
            }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'signup'
                ? 'bg-[#4B2E1F] text-[#FDFFEB] shadow-xs'
                : 'text-[#4B2E1F]/70 hover:text-[#4B2E1F]'
            }`}
          >
            <UserPlus className="h-3.5 w-3.5" />
            <span>Sign Up</span>
          </button>
        </div>

        {/* Alerts */}
        {errorMessage && (
          <div className="mb-4 flex items-start gap-2 rounded-lg bg-red-50 p-3 text-xs font-medium text-red-700 border border-red-200">
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="mb-4 flex items-start gap-2 rounded-lg bg-emerald-50 p-3 text-xs font-medium text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* SIGN IN FORM */}
        {activeTab === 'signin' ? (
          <form onSubmit={handleSignIn} className="space-y-3.5">
            <div>
              <label className="block text-xs font-medium text-[#4B2E1F] mb-1">
                Username or Email
              </label>
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Enter username or email"
                className="w-full rounded-lg border border-[#DEE6BD] bg-white px-3.5 py-2.5 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:ring-1 focus:ring-[#4B2E1F] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#4B2E1F] mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full rounded-lg border border-[#DEE6BD] bg-white px-3.5 py-2.5 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:ring-1 focus:ring-[#4B2E1F] focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#4B2E1F] hover:bg-[#3D2418] py-2.5 text-xs font-semibold text-[#FDFFEB] shadow-xs disabled:opacity-50 transition-colors cursor-pointer mt-2"
            >
              <LogIn className="h-4 w-4" />
              <span>{isLoading ? 'Signing In...' : 'Sign In'}</span>
            </button>

            {/* Quick Helper for Test */}
            <div className="mt-4 pt-3 border-t border-[#DEE6BD] text-center">
              <span className="text-[11px] text-[#4B2E1F]/70">
                Demo Creator: <strong className="text-[#4B2E1F]">creator</strong> / <strong className="text-[#4B2E1F]">creator123</strong>
              </span>
            </div>
          </form>
        ) : (
          /* SIGN UP FORM */
          <form onSubmit={handleSignUp} className="space-y-3.5">
            <div>
              <label className="block text-xs font-medium text-[#4B2E1F] mb-1">
                Full Name / Studio Name
              </label>
              <input
                type="text"
                required
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                placeholder="e.g. Luna Art Studio"
                className="w-full rounded-lg border border-[#DEE6BD] bg-white px-3.5 py-2.5 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:ring-1 focus:ring-[#4B2E1F] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#4B2E1F] mb-1">
                Username
              </label>
              <input
                type="text"
                required
                value={signupUsername}
                onChange={(e) => setSignupUsername(e.target.value)}
                placeholder="e.g. lunastudio"
                className="w-full rounded-lg border border-[#DEE6BD] bg-white px-3.5 py-2.5 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:ring-1 focus:ring-[#4B2E1F] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#4B2E1F] mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                placeholder="name@email.com"
                className="w-full rounded-lg border border-[#DEE6BD] bg-white px-3.5 py-2.5 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:ring-1 focus:ring-[#4B2E1F] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#4B2E1F] mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                className="w-full rounded-lg border border-[#DEE6BD] bg-white px-3.5 py-2.5 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:ring-1 focus:ring-[#4B2E1F] focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#4B2E1F] hover:bg-[#3D2418] py-2.5 text-xs font-semibold text-[#FDFFEB] shadow-xs disabled:opacity-50 transition-colors cursor-pointer mt-2"
            >
              <Sparkles className="h-4 w-4" />
              <span>{isLoading ? 'Registering...' : 'Create Creator Account'}</span>
            </button>
          </form>
        )}
      </div>

      {/* Footer copyright */}
      <div className="mx-auto text-center text-[11px] text-[#4B2E1F]/60 mt-6">
        © 2026 Pop@Pic! Photobooth
      </div>
    </div>
  );
};
