import React from 'react';
import { Navigate, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AlertTriangle, ArrowLeft, LogIn } from 'lucide-react';
import type { UserRole } from '../types/photobooth';

interface RoleGuardProps {
  allowedRoles: UserRole[];
  requireActiveCreator?: boolean;
  children?: React.ReactNode;
  fallbackPath?: string;
}

export const RoleGuard: React.FC<RoleGuardProps> = ({
  allowedRoles,
  requireActiveCreator = true,
  children,
  fallbackPath,
}) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (!currentUser) {
    if (fallbackPath) {
      return <Navigate to={fallbackPath} state={{ from: location }} replace />;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const hasRole = allowedRoles.includes(currentUser.role);
  const isSuspended =
    currentUser.role === 'Creator' &&
    requireActiveCreator &&
    currentUser.creatorStatus === 'suspended';

  if (!hasRole || isSuspended) {
    return (
      <div className="min-h-screen bg-[#FAF6F0] flex flex-col items-center justify-center p-6 text-center font-sans text-[#2C211B]">
        <div className="h-16 w-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4 shadow-xs">
          <AlertTriangle className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-serif text-[#2C211B] mb-2">
          {isSuspended ? 'Creator Account Suspended' : 'Access Restricted'}
        </h2>
        <p className="text-xs text-stone-500 max-w-sm mb-6 leading-relaxed">
          {isSuspended
            ? 'Your Creator account has been suspended by an Administrator due to a policy violation. Please contact support.'
            : `You need an authorized ${allowedRoles.join(' or ')} account to access this page. Currently signed in as @${currentUser.username} (${currentUser.role}).`}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#EDE3D5] bg-[#FFFDF9] px-4 py-2.5 text-xs font-semibold text-stone-700 hover:bg-orange-50 cursor-pointer transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home</span>
          </button>
          <button
            onClick={() => navigate('/login')}
            className="inline-flex items-center gap-1.5 rounded-lg bg-stone-900 px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-stone-800 cursor-pointer transition-colors"
          >
            <LogIn className="h-4 w-4" />
            <span>Switch Account</span>
          </button>
        </div>
      </div>
    );
  }

  return <>{children || <Outlet />}</>;
};
