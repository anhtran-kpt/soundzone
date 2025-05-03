import bcrypt from "bcryptjs";
import {
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  SALT_ROUNDS,
} from "./constants";
import jwt from "jsonwebtoken";
import { User } from "@/app/generated/prisma";
import { v4 as uuidv4 } from "uuid";
import { AccessTokenPayload, RefreshTokenPayload } from "@/types/auth";

export async function compareValues(
  value: string,
  hashedValue: string
): Promise<boolean> {
  return await bcrypt.compare(value, hashedValue);
}

export async function hashValue(value: string): Promise<string> {
  return await bcrypt.hash(value, SALT_ROUNDS);
}

export function generateAccessToken(user: User): string {
  const payload: AccessTokenPayload = {
    sub: user.id,
    email: user.email,
    role: user.role,
  };

  return jwt.sign(payload, JWT_ACCESS_SECRET as string, { expiresIn: "15m" });
}

export function generateRefreshToken(user: User): {
  token: string;
  jti: string;
} {
  const jti = uuidv4();

  const payload: RefreshTokenPayload = {
    sub: user.id,
    jti,
  };

  return {
    token: jwt.sign(payload, JWT_REFRESH_SECRET as string, { expiresIn: "7d" }),
    jti,
  };
}

export function verifyAccessToken(accessToken: string): AccessTokenPayload {
  try {
    const decoded = jwt.verify(
      accessToken,
      JWT_ACCESS_SECRET as string
    ) as AccessTokenPayload;

    return decoded;
  } catch (error) {
    console.error(error);
    throw new Error("Invalid access token");
  }
}

export function verifyRefreshToken(refreshToken: string): RefreshTokenPayload {
  try {
    const decoded = jwt.verify(
      refreshToken,
      JWT_REFRESH_SECRET as string
    ) as RefreshTokenPayload;

    return decoded;
  } catch (error) {
    console.error(error);
    throw new Error("Invalid refresh token");
  }
}
