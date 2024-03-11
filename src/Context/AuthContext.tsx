"use client";
import { useState, useEffect, createContext, ReactNode } from "react";
import { getCookie } from "cookies-next";
export const AuthContext = createContext({
  user: undefined,
  isAuthenticated: false,
});
export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsauthenticated] = useState(false);

  useEffect(() => {
    const access_token = getCookie("user");
    if (access_token) {
      const user = JSON.parse(access_token).data.user.user_metadata;
      setUser(user);
      setIsauthenticated(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
