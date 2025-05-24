import { authActions } from "@/actions";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { SALT_ROUNDS } from "./constants";
import { redirect } from "next/navigation";
import { ApiError } from "./api/server/api-error";
import { getServerSession } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await authActions.signIn({
          email: credentials.email,
          password: credentials.password,
        });

        if (!user) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.avatarUrl,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
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
