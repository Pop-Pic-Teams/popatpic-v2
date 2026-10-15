import { useAuth as useAuthContext } from '../../../context/AuthContext';

/**
 * Feature-level useAuth hook providing easy access to auth state & actions
 */
export const useAuth = () => {
  return useAuthContext();
};
