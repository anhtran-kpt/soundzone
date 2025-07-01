import { UserRole } from "@/app/generated/prisma";
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: UserRole;
      imagePublicId: string;
      slug: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: UserRole;
    slug: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: UserRole;
    slug: string;
  }
}
