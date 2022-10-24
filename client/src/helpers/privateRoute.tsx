import React from 'react';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router';

import { authService } from '../services/authService';
import { LOGIN } from '../config/path';

const PrivateRoute = () => {
  const isAuthenticated = authService.isAuthenticated();
  return isAuthenticated ? <Outlet /> : <Navigate to={LOGIN} />
}

export default PrivateRoute;
