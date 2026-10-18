import type { User } from '../types';

/**
 * Auth API service functions (mock / service layer)
 */
export const authApi = {
  getCurrentSession: (): User | null => {
    if (typeof window === 'undefined') return null;
    try {
      const stored = localStorage.getItem('popatpic_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  },

  saveSession: (user: User): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('popatpic_user', JSON.stringify(user));
  },

  clearSession: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('popatpic_user');
  },
};
