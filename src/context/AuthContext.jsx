import { createContext, useState, useContext, useEffect } from "react";

// 1. Create the context
const AuthContext = createContext();

// 2. Create a provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null means not logged in
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom hook to use context easily
export const useAuth = () => useContext(AuthContext);
