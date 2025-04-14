import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "./api/auth";
import { jwtDecode } from "jwt-decode";
import { JWT } from "next-auth/jwt";

interface User {
  id: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  role: "user" | "admin";
}

interface CustomJWT extends JWT {
  accessToken?: string;
  user?: User;
  expiresAt?: number;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  pages: {
    signIn: "/signin",
    signOut: "/signout",
    error: "/error",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const { accessToken, ...userData } = await login(
            credentials?.email,
            credentials?.password
          );

          if (accessToken) {
            const decoded = jwtDecode(accessToken);
            const expiresAt = decoded.exp;

            return {
              accessToken,
              user: userData,
              expiresAt,
            };
          }
          return null;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          accessToken: user.accessToken,
          user: user.user,
          expiresAt: user.expiresAt,
        };
      }

      const customToken = token as CustomJWT;
      if (customToken.expiresAt && Date.now() >= customToken.expiresAt * 1000) {
        return {};
      }

      return token;
    },
    async session({ session, token }) {
      const customToken = token as CustomJWT;
      return {
        ...session,
        user: customToken.user || {},
        accessToken: customToken.accessToken,
        expires: session.expires,
      };
    },
  },
};

export default NextAuth(authOptions);
