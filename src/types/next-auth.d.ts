import { UserRole } from "@/app/generated/prisma";
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    refreshToken: string;
    user: {
      id: string;
      role: UserRole;
      firstName: string;
      lastName: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    firstName: string;
    lastName: string;
    refreshToken: string;
    role: UserRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: UserRole;
    firstName: string;
    lastName: string;
    refreshToken: string;
  }
}
