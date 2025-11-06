import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { isAdmin } from '../utils/auth';

export default function AdminRoute({ children }) {
  const { user, loading } = useAuth() || {};
  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;
  if (!isAdmin(user)) return <div style={{padding:16}}>You are not authorized to access the admin portal.</div>;
  return children;
}
