# TODO: Fix All ESLint Errors and Warnings

## Tasks to Complete

- [x] Create src/utils/auth.js and move isAdmin function there
- [x] Update src/context/AuthProvider.jsx: Remove unused 'e' in catch block, remove isAdmin export, import isAdmin from new utils file
- [x] Update src/api/client.js: Add error logging to empty catch block
- [x] Update src/pages/Board.jsx: Remove unused isAdmin import, remove unused user destructuring, add missing dependencies to useCallback and useEffect
- [x] Update src/pages/Register.jsx: Remove unused login and user from useAuth destructuring
- [x] Update src/pages/Users.jsx: Add loadUsers to useEffect dependencies
- [x] Create src/ui/ui/MouseEnterContext.js and move MouseEnterContext there
- [x] Update src/ui/ui/MouseEnterProvider.jsx: Import MouseEnterContext from new file
- [x] Create src/context/AuthContext.js and move AuthContext there
- [x] Create src/context/useAuth.js and move useAuth hook there
- [x] Create src/ui/ui/useMouseEnter.js and move useMouseEnter hook there
- [x] Run npm run lint to verify all errors are fixed
- [x] Test the application to ensure functionality remains intact
