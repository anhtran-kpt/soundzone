import { UserRole } from "@/app/generated/prisma";
import { DefaultSession, DefaultUser } from "next-auth";

export type PaginationParams = {
  page: number;
  limit: number;
};

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

export type TTrack = {
  title: string;
  duration: number;
  slug: string;
  id: string;
  trackNumber: number;
  isExplicit: boolean;
  audioPublicId: string;
  coverPublicId: string;
  album: {
    title: string;
    id: string;
    slug: string;
    artist: {
      name: string;
    };
  };
  artists: [{ id: string; slug: string; name: string }];
};

export type TPlaylist = {
  title: string;
  id: string;
  slug: string;
  tracks: TTrack[];
};
