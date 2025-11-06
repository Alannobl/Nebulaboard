import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { isAdmin } from '../utils/auth';

export function RequireAuth({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export function RequireAdmin({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;
  if (!isAdmin(user)) return <Navigate to="/app" replace />;
  return children;
}
