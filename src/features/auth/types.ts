export type UserRole = 'Admin' | 'Creator';

export interface User {
  id: string;
  name: string;
  username: string;
  role: UserRole;
  avatar?: string;
  creatorStatus?: 'active' | 'suspended';
  bio?: string;
  email?: string;
  phone?: string;
  website?: string;
  totalSubmissions?: number;
  approvedCount?: number;
}

export interface AuthState {
  currentUser: User | null;
  isAuthenticated: boolean;
  role: UserRole | null;
}
