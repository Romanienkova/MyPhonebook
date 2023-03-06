import { Outlet } from 'react-router';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export default function PrivateRoute() {
  const { isLoggedIn } = useAuth();
  return <>{!isLoggedIn ? <Navigate to="/login"></Navigate> : <Outlet />}</>;
}
