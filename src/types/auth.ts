import { z } from "zod";
import { User } from "@/app/generated/prisma";

export const SignUpSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const SignInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export type signUpInput = z.infer<typeof SignUpSchema>;
export type signInInput = z.infer<typeof SignInSchema>;

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
