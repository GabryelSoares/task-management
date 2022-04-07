import * as React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/auth';

interface Props {
  children: JSX.Element
}

export const RequireAuth: React.FC<Props> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if(!auth.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;

}
