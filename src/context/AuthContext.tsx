'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, startTransition } from 'react';
import type { User } from '../types/photobooth';
import { fetchAdminUsers, updateAdminUserStatus, deleteAdminUser } from '../features/users/api/usersApi';

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
  updateUserStatus: (userId: string, newStatus: 'active' | 'suspended') => Promise<void> | void;
  deleteCreator: (userId: string) => Promise<void> | void;
  refreshUsers?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const loadUsersFromDb = useCallback(async () => {
    try {
      const data = await fetchAdminUsers();
      startTransition(() => {
        setUsers(data);
      });
    } catch (err) {
      console.error('[AuthContext] failed to load users from DB:', err);
    }
  }, []);

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
          // Jika admin, langsung muat daftar user asli dari database
          if (data.role === 'Admin') {
            loadUsersFromDb();
          }
        } else {
          // Tidak ada sesi aktif di cookie server
          setCurrentUser(null);
          setUsers([]);
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
  }, [loadUsersFromDb]);

  // Muat data user ketika currentUser berubah menjadi Admin
  useEffect(() => {
    if (currentUser?.role === 'Admin') {
      loadUsersFromDb();
    } else {
      setUsers([]);
    }
  }, [currentUser, loadUsersFromDb]);

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
          error: data.error || 'Invalid username or password.',
        };
      }

      setCurrentUser(data.user);
      if (typeof window !== 'undefined') {
        localStorage.setItem('popatpic_auth_user', JSON.stringify(data.user));
      }

      if (data.role === 'Admin') {
        await loadUsersFromDb();
      }

      return {
        success: true,
        role: data.role,
      };
    } catch (err) {
      console.error('[AuthContext] login error:', err);
      return {
        success: false,
        error: 'An error occurred while contacting the authentication server.',
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
      setUsers([]);
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
          error: data.error || 'Registration failed.',
        };
      }

      return { success: true };
    } catch (err) {
      console.error('[AuthContext] register error:', err);
      return {
        success: false,
        error: 'An error occurred during registration.',
      };
    }
  };

  // Helper untuk manajemen creator di dashboard admin terhubung ke backend DB
  const updateUserStatus = async (userId: string, newStatus: 'active' | 'suspended') => {
    try {
      const res = await updateAdminUserStatus(userId, newStatus);
      if (res.success && res.user) {
        setUsers((prev) =>
          prev.map((u) => (u.id === userId ? res.user! : u))
        );
        if (currentUser?.id === userId) {
          setCurrentUser(res.user);
          if (typeof window !== 'undefined') {
            localStorage.setItem('popatpic_auth_user', JSON.stringify(res.user));
          }
        }
      }
    } catch (err) {
      console.error('[AuthContext] updateUserStatus error:', err);
    }
  };

  // Admin function: Hapus akun creator terhubung ke backend DB
  const deleteCreator = async (userId: string) => {
    try {
      const res = await deleteAdminUser(userId);
      if (res.success) {
        setUsers((prev) => prev.filter((u) => u.id !== userId));
        if (currentUser?.id === userId) {
          logout();
        }
      }
    } catch (err) {
      console.error('[AuthContext] deleteCreator error:', err);
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
