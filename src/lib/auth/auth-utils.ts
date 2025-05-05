import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./auth-options";
import { AppError } from "@/lib/api/error-handler";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getSession();

  if (!session?.user?.id) {
    return null;
  }

  return session.user;
}

export async function requireAuth() {
  const session = await getSession();

  if (!session?.user?.id) {
    redirect("/login");
  }

  return session;
}

export async function requireAdmin() {
  const session = await getSession();

  if (!session?.user?.id || session.user.role !== "ADMIN") {
    redirect("/");
  }

  return session;
}

export async function requireAuthApi() {
  const session = await getSession();

  if (!session?.user?.id) {
    throw new AppError(
      "You need to sign in to perform this action",
      401,
      "UNAUTHORIZED"
    );
  }

  return session;
}

export async function requireAdminApi() {
  const session = await getSession();

  if (!session?.user?.id) {
    throw new AppError(
      "You need to sign in to perform this action",
      401,
      "UNAUTHORIZED"
    );
  }

  if (session.user.role !== "ADMIN") {
    throw new AppError(
      "You do not have permission to perform this action",
      403,
      "FORBIDDEN"
    );
  }

  return session;
}
