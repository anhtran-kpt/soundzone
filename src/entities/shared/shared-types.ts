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

export type TArtist = {
  id: string;
  slug: string;
  name: string;
};

export type TFullTrack = {
  id: string;
  slug: string;
  title: string;
  duration: number;
  trackNumber: number;
  isExplicit: boolean;
  audioPublicId: string;
  album: {
    title: string;
    coverPublicId: string;
    id: string;
    slug: string;
  };
  mainArtist: TArtist;
  plays: number;
  artists: TArtist[];
  collaborators?: TArtist[];
};

export type TPlaylist = {
  id: string;
  slug: string;
  title: string;
  tracks: TFullTrack[];
};
