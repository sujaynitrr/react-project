import { createContext, useContext, useState } from "react";
export const AuthProvider = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthProvider.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthProvider.Provider>
  );
};
export default AuthContextProvider;

export const useAuth = () => {
  return useContext(AuthProvider);
};
