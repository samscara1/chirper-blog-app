import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from './AuthProvider';

export const ProtectedRoute = () => {
  const currentUser = useContext(AuthContext);
  return currentUser ? <Outlet /> : <Navigate to="/register" />;
};
