import { useState } from "react";
import AuthContext from "../context/AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("role") === "true";
  });

  const login = (user: any, token: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", user.role.toString());
    localStorage.setItem("userId", user.id);

    setUser(user);
    setIsAdmin(user.isAdmin);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");

    setUser(null);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
