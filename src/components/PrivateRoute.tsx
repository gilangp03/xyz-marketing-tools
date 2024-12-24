import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Replace with your authentication logic

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;