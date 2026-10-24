'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { User } from '../types/photobooth';

interface AuthContextType {
  currentUser: User | null;
  login: (
    identifier: string,
    password: string
  ) => Promise<{ success: boolean; role?: 'Creator' | 'Admin'; error?: string }>;
  logout: () => void;
  register: (
    email: string,
    password: string,
    name: string,
    username?: string
  ) => Promise<{ success: boolean; error?: string }>;
  users: User[];
  updateUserStatus: (userId: string, newStatus: 'active' | 'suspended') => void;
  deleteCreator: (userId: string) => void;
}

const DEFAULT_USERS: User[] = [
  {
    id: 'usr_admin_1',
    username: 'admin',
    email: 'admin@popatpic.com',
    name: 'Administrator',
    role: 'Admin',
    createdAt: '2026-01-01T00:00:00Z',
  },
  {
    id: 'usr_creator_1',
    username: 'creator',
    email: 'creator@popatpic.com',
    name: 'Karima Ulya (Creator)',
    role: 'Creator',
    creatorStatus: 'active',
    createdAt: '2026-02-15T00:00:00Z',
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      const stored = localStorage.getItem('popatpic_auth_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [users, setUsers] = useState<User[]>(() => {
    if (typeof window === 'undefined') return DEFAULT_USERS;
    try {
      const stored = localStorage.getItem('popatpic_all_users');
      return stored ? JSON.parse(stored) : DEFAULT_USERS;
    } catch {
      return DEFAULT_USERS;
    }
  });

  // Sinkronisasi status autentikasi dari sesi backend (cookie HttpOnly Supabase)
  useEffect(() => {
    let isMounted = true;

    async function syncSession() {
      try {
        const res = await fetch('/api/auth/me', { method: 'GET' });
        if (!res.ok) return;
        const data = await res.json();
        if (!isMounted) return;

        if (data.authenticated && data.user) {
          setCurrentUser(data.user);
          if (typeof window !== 'undefined') {
            localStorage.setItem('popatpic_auth_user', JSON.stringify(data.user));
          }
        } else {
          // Tidak ada sesi aktif di cookie server
          setCurrentUser(null);
          if (typeof window !== 'undefined') {
            localStorage.removeItem('popatpic_auth_user');
          }
        }
      } catch (err) {
        console.error('[AuthContext] sync session error:', err);
      }
    }

    syncSession();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('popatpic_all_users', JSON.stringify(users));
    }
  }, [users]);

  // Login handler terhubung langsung ke backend /api/auth/login
  const login = async (
    identifier: string,
    password: string
  ): Promise<{ success: boolean; role?: 'Creator' | 'Admin'; error?: string }> => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        return {
          success: false,
          error: data.error || 'Username atau kata sandi tidak valid.',
        };
      }

      setCurrentUser(data.user);
      if (typeof window !== 'undefined') {
        localStorage.setItem('popatpic_auth_user', JSON.stringify(data.user));
      }

      return {
        success: true,
        role: data.role,
      };
    } catch (err) {
      console.error('[AuthContext] login error:', err);
      return {
        success: false,
        error: 'Terjadi kesalahan saat menghubungi server autentikasi.',
      };
    }
  };

  // Logout handler terhubung ke backend /api/auth/logout
  const logout = useCallback(async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (err) {
      console.error('[AuthContext] logout error:', err);
    } finally {
      setCurrentUser(null);
      if (typeof window !== 'undefined') {
        localStorage.removeItem('popatpic_auth_user');
      }
    }
  }, []);

  // Register handler terhubung ke backend /api/auth/register
  const register = async (
    email: string,
    password: string,
    name: string,
    username?: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name, username }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        return {
          success: false,
          error: data.error || 'Pendaftaran gagal.',
        };
      }

      return { success: true };
    } catch (err) {
      console.error('[AuthContext] register error:', err);
      return {
        success: false,
        error: 'Terjadi kesalahan saat pendaftaran.',
      };
    }
  };

  // Helper untuk manajemen creator di dashboard admin
  const updateUserStatus = (userId: string, newStatus: 'active' | 'suspended') => {
    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, creatorStatus: newStatus } : u))
    );
    if (currentUser?.id === userId) {
      const updated: User = { ...currentUser, creatorStatus: newStatus };
      setCurrentUser(updated);
      if (typeof window !== 'undefined') {
        localStorage.setItem('popatpic_auth_user', JSON.stringify(updated));
      }
    }
  };

  // Admin function: Hapus akun creator jika melanggar (Item 2)
  const deleteCreator = (userId: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== userId));
    if (currentUser?.id === userId) {
      logout();
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        register,
        users,
        updateUserStatus,
        deleteCreator,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
