import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = localStorage.getItem("auth_user");
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch {
        localStorage.removeItem("auth_user");
      }
    }
    setLoading(false);
  }, []);

  const login = ({ username, password }) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "asiya" && password === "1234") {
          const u = { username };
          setUser(u);
          localStorage.setItem("auth_user", JSON.stringify(u));
          setLoading(false);
          resolve(u);
        } else {
          setLoading(false);
          reject(new Error("Invalid credentials"));
        }
      }, 800);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
