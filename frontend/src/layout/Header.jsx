// frontend/src/components/Header.jsx
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import { isAdmin } from '../utils/auth'

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function onLogout() {
    logout()
    navigate('/login', { replace: true })
  }

  const admin = isAdmin(user)

  return (
    <header className="app-bar">
      <Link to="/" className="brand">
        NebulaBoard
      </Link>

      <nav className="app-actions">
        <NavLink to="/app" aria-current={({isActive}) => isActive ? 'page' : undefined}>
          Projects
        </NavLink>
        {admin && (
          <NavLink to="/admin" aria-current={({isActive}) => isActive ? 'page' : undefined}>
            Admin
          </NavLink>
        )}

        {user ? (
          <>
            <span className="badge">
              {user.username} · {admin ? 'ADMIN' : 'USER'}
            </span>
            <button className="btn btn--ghost" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn--ghost" to="/login">Login</Link>
            <Link className="btn btn--primary" to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  )
}
