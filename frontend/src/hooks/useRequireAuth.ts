import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export function useRequireAuth(redirectTo = "/signin", requireAdmin = false) {
  const { user, status, isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!user) {
      router.push(redirectTo);
    } else if (requireAdmin && !isAdmin) {
      router.push("/");
    }
  }, [user, status, isAdmin, router, redirectTo, requireAdmin]);

  return { user, status, isLoading: status === "loading" };
}
