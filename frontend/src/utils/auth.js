export const isAdmin = (user) =>
  user?.role === 'ADMIN' ||
  (Array.isArray(user?.authorities) && user.authorities.includes('ROLE_ADMIN'));
