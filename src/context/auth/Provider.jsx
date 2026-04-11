import { useState } from "react";
import AuthContext from "./context";

const DEFAULT_PROFILE_PHOTO = "https://via.placeholder.com/150?text=Profile";

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("user") !== null;
  });

  const saveUser = (nextUser) => {
    localStorage.setItem("user", JSON.stringify(nextUser));
    setUser(nextUser);
    setIsAuthenticated(true);
  };

  const login = (username, password) => {
    if (!username || !password) return false;

    const userData = {
      username,
      profile_photo: DEFAULT_PROFILE_PHOTO,
    };

    saveUser(userData);
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  const updateProfile = (updates) => {
    const nextUser = {
      ...user,
      ...updates,
    };
    saveUser(nextUser);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;