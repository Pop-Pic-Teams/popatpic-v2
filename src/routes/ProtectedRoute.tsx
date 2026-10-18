'use client';

import React from 'react';
import { Navigate, useLocation } from '../utils/navigation';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children?: React.ReactNode;
  redirectTo?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectTo = '/login',
}) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to={redirectTo} state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
};
