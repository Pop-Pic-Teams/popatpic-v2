'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
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
    password: 'admin123',
    createdAt: '2026-01-01T00:00:00Z',
  },
  {
    id: 'usr_creator_1',
    username: 'creator',
    email: 'creator@popatpic.com',
    name: 'Karima Ulya (Creator)',
    role: 'Creator',
    creatorStatus: 'active',
    password: 'creator123',
    createdAt: '2026-02-15T00:00:00Z',
  },
  {
    id: 'usr_creator_2',
    username: 'nadhira',
    email: 'nadhira.art@gmail.com',
    name: 'Nadhira Studio',
    role: 'Creator',
    creatorStatus: 'active',
    password: 'creator123',
    createdAt: '2026-03-10T00:00:00Z',
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
      if (stored) {
        const parsed: User[] = JSON.parse(stored);
        // Ensure default accounts exist with exact credentials
        const hasAdmin = parsed.some((u) => u.username === 'admin');
        const hasCreator = parsed.some((u) => u.username === 'creator');
        if (!hasAdmin || !hasCreator) {
          return DEFAULT_USERS;
        }
        return parsed;
      }
      return DEFAULT_USERS;
    } catch {
      return DEFAULT_USERS;
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('popatpic_all_users', JSON.stringify(users));
    }
  }, [users]);

  // Login handler
  const login = async (
    identifier: string,
    password: string
  ): Promise<{ success: boolean; role?: 'Creator' | 'Admin'; error?: string }> => {
    const trimmedId = identifier.trim().toLowerCase();
    const trimmedPass = password.trim();

    // 1. Direct match for username "admin" & password "admin123"
    if (
      (trimmedId === 'admin' || trimmedId === 'admin@popatpic.com') &&
      trimmedPass === 'admin123'
    ) {
      const adminUser = users.find((u) => u.username === 'admin') || DEFAULT_USERS[0];
      setCurrentUser(adminUser);
      if (typeof window !== 'undefined') {
        localStorage.setItem('popatpic_auth_user', JSON.stringify(adminUser));
      }
      return { success: true, role: 'Admin' };
    }

    // 2. Direct match for username "creator" & password "creator123" (Item 1)
    if (
      (trimmedId === 'creator' || trimmedId === 'creator@popatpic.com') &&
      trimmedPass === 'creator123'
    ) {
      const creatorUser = users.find((u) => u.username === 'creator') || DEFAULT_USERS[1];
      if (creatorUser.creatorStatus === 'suspended') {
        return {
          success: false,
          error: 'This Creator account has been suspended by an Administrator due to a policy violation.',
        };
      }
      setCurrentUser(creatorUser);
      if (typeof window !== 'undefined') {
        localStorage.setItem('popatpic_auth_user', JSON.stringify(creatorUser));
      }
      return { success: true, role: 'Creator' };
    }

    // 3. Registered accounts
    const user = users.find(
      (u) =>
        (u.username && u.username.toLowerCase() === trimmedId) ||
        u.email.toLowerCase() === trimmedId
    );

    if (!user) {
      return { success: false, error: 'Username or email is not registered.' };
    }

    if (user.password && user.password !== trimmedPass) {
      return { success: false, error: 'Incorrect password.' };
    }

    if (user.role === 'Creator' && user.creatorStatus === 'suspended') {
      return {
        success: false,
        error: 'Your Creator account has been suspended by an Administrator due to a policy violation.',
      };
    }

    setCurrentUser(user);
    if (typeof window !== 'undefined') {
      localStorage.setItem('popatpic_auth_user', JSON.stringify(user));
    }
    return { success: true, role: user.role as 'Creator' | 'Admin' };
  };

  const logout = () => {
    setCurrentUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('popatpic_auth_user');
    }
  };

  // Creator registration: Does NOT need approval!
  const register = async (
    email: string,
    password: string,
    name: string,
    username?: string
  ): Promise<{ success: boolean; error?: string }> => {
    const trimmedEmail = email.trim().toLowerCase();
    const cleanUsername = (username || trimmedEmail.split('@')[0]).trim().toLowerCase();

    if (users.some((u) => u.email.toLowerCase() === trimmedEmail)) {
      return { success: false, error: 'Email is already registered.' };
    }

    if (users.some((u) => u.username && u.username.toLowerCase() === cleanUsername)) {
      return { success: false, error: 'Username is already taken. Please choose another.' };
    }

    const newUser: User = {
      id: `usr_creator_${Date.now()}`,
      username: cleanUsername,
      email: trimmedEmail,
      name,
      role: 'Creator',
      creatorStatus: 'active', // Langsung aktif tanpa perlu approval!
      password,
      createdAt: new Date().toISOString(),
    };

    setUsers((prev) => [...prev, newUser]);

    // Auto login
    setCurrentUser(newUser);
    if (typeof window !== 'undefined') {
      localStorage.setItem('popatpic_auth_user', JSON.stringify(newUser));
    }
    return { success: true };
  };

  // Admin function: Nonaktifkan / aktifkan creator jika melanggar
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
