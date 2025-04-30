"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface RegisterData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface SignInData {
  email: string;
  password: string;
}

const storeRefreshToken = (token: string) => {
  try {
    localStorage.setItem("refreshToken", token);
  } catch (error) {
    console.error("Error storing refresh token:", error);
  }
};

const getStoredRefreshToken = (): string | null => {
  try {
    return localStorage.getItem("refreshToken");
  } catch (error) {
    console.error("Error retrieving refresh token:", error);
    return null;
  }
};

const removeStoredRefreshToken = () => {
  try {
    localStorage.removeItem("refreshToken");
  } catch (error) {
    console.error("Error removing refresh token:", error);
  }
};

export const useAuth = () => {
  const { data: session, status, update } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // When session changes, store refresh token if available
  useEffect(() => {
    if (session?.refreshToken) {
      storeRefreshToken(session.refreshToken);
    }
  }, [session]);

  // Utility function to check for token expiration
  const isTokenExpired = (token: string): boolean => {
    try {
      // For JWT tokens, you could decode and check exp
      // This is a simple implementation
      const payload = JSON.parse(atob(token.split(".")[1]));
      const expiry = payload.exp * 1000; // Convert to milliseconds
      return Date.now() >= expiry;
    } catch (error) {
      console.error("Error checking token expiration:", error);
      return true; // Assume expired on error
    }
  };

  // Check if user is authenticated
  const isAuthenticated = status === "authenticated";

  // Check if user is an admin
  const isAdmin = isAuthenticated && session?.user?.role === "ADMIN";

  // Register a new user
  const register = async (data: RegisterData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/auth/register", data);

      if (response.status === 201) {
        // Automatically sign in the user after registration
        return login({
          email: data.email,
          password: data.password,
        });
      }
      return false;
    } catch (error) {
      setError(error.response?.data?.error || "Registration failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Sign in a user
  const login = async (data: SignInData) => {
    setLoading(true);
    setError(null);

    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
        return false;
      }

      if (result?.ok) {
        // Note: session.refreshToken will be stored by the useEffect
        router.push("/");
        router.refresh();
        return true;
      }
      return false;
    } catch (error: any) {
      setError("Login failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Sign out a user
  const logout = async (logoutAll: boolean = false) => {
    setLoading(true);

    try {
      // Get the current refresh token
      const refreshToken = getStoredRefreshToken();

      // Call our API to revoke the token
      if (refreshToken) {
        await axios.post("/api/auth/logout", {
          refreshToken,
          logoutAll,
        });
      }

      // Clear the stored refresh token
      removeStoredRefreshToken();

      // Use NextAuth signOut
      await signOut({ redirect: false });

      router.push("/auth/signin");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Logout from all devices
  const logoutAllDevices = async () => {
    return logout(true);
  };

  // Refresh the access token
  const refreshAccessToken = async () => {
    const refreshToken = getStoredRefreshToken();

    if (!refreshToken) {
      console.log("No refresh token available");
      return false;
    }

    try {
      const response = await axios.post("/api/auth/refresh", {
        refreshToken,
      });

      if (response.data?.refreshToken) {
        // Store the new refresh token
        storeRefreshToken(response.data.refreshToken);

        // Force a session update if available
        if (update) {
          await update({
            ...session,
            refreshToken: response.data.refreshToken,
          });
        }

        router.refresh();
        return true;
      }
      return false;
    } catch (error) {
      console.error("Token refresh error:", error);

      // If refresh fails, log out the user
      await logout();
      return false;
    }
  };

  return {
    user: session?.user,
    isAuthenticated,
    isAdmin,
    loading,
    error,
    register,
    login,
    logout,
    logoutAllDevices,
    refreshAccessToken,
  };
};
