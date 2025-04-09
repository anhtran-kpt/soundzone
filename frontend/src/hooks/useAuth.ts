"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useCallback } from "react";

export function useAuth() {
  const { data: session, status } = useSession();

  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";
  const isAdmin = session?.user?.role === "ADMIN";

  const login = useCallback(async (email: string, password: string) => {
    return signIn("credentials", { email, password, redirect: false });
  }, []);

  const logout = useCallback(() => {
    return signOut({ redirect: true, callbackUrl: "/" });
  }, []);

  return {
    user: session?.user,
    isAuthenticated,
    isAdmin,
    isLoading,
    login,
    logout,
  };
}
