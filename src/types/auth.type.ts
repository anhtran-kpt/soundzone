import { z } from "zod";
import { User, UserRole } from "@/app/generated/prisma";
import { DefaultSession, DefaultUser } from "next-auth";

export const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export type signUpInput = z.infer<typeof signUpSchema>;
export type signInInput = z.infer<typeof signInSchema>;

export type UserResponse = Omit<User, "password">;

export interface AccessTokenPayload {
  sub: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

export interface RefreshTokenPayload {
  sub: string;
  jti: string;
  iat?: number;
  exp?: number;
}

export interface createRefreshTokenInput {
  userId: string;
  jti: string;
  token: string;
  deviceType: string;
}

export interface refreshTokensInput {
  oldRefreshToken: string;
  deviceType: string;
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: UserRole;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: UserRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: UserRole;
  }
}
