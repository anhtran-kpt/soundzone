import { ZodSchema } from "zod";
import { ApiError } from "./api/server/api-error";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import { SALT_ROUNDS } from "./constants";
import { authOptions } from "./auth";
import { redirect } from "next/navigation";

export const validateData = (schema: ZodSchema, data: unknown) => {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.errors
      .map((err) => `${err.path.join(".")}: ${err.message}`)
      .join(", ");

    throw ApiError.badRequest(errorMessages, "VALIDATION_ERROR");
  }

  return result.data;
};

export const emptyToNull = (value: string | undefined): string | null => {
  return value?.trim() === "" ? null : value!;
};

export const formatDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export const formatName = (name: string) => {
  const words = name.split(" ");
  if (words.length >= 2) {
    return `${words[words.length - 2].charAt(0)}${words[
      words.length - 1
    ].charAt(0)}`;
  }
  if (words.length === 1) {
    return words[0].charAt(0);
  }
};

export async function comparePasswords(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

export async function hashPassword(plainPassword: string): Promise<string> {
  return await bcrypt.hash(plainPassword, SALT_ROUNDS);
}

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
    redirect("/signin");
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
    throw ApiError.unauthorized(
      "You need to sign in to perform this action",
      "UNAUTHORIZED"
    );
  }

  return session;
}

export async function requireAdminApi() {
  const session = await getSession();

  if (!session?.user?.id) {
    throw ApiError.unauthorized(
      "You need to sign in to perform this action",
      "UNAUTHORIZED"
    );
  }

  if (session.user.role !== "ADMIN") {
    throw ApiError.forbidden(
      "You do not have permission to perform this action",
      "FORBIDDEN"
    );
  }

  return session;
}
