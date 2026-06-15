import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({
    user,
    login: (username, password) => {
      if (username.trim().toLowerCase() === 'unir' && password === 'unir123') {
        setUser({ name: 'Juan Armando', username: 'unir' });
        return true;
      }
      return false;
    },
    logout: () => setUser(null),
  }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() { return useContext(AuthContext); }
