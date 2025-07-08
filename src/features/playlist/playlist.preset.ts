import { Prisma } from "@/app/generated/prisma";

export const basePlaylistSelect = {
  id: true,
  title: true,
  slug: true,
  lyrics: true,
  duration: true,
  isExplicit: true,
  audioPublicId: true,
  playlistNumber: true,
  albumId: true,
} satisfies Prisma.PlaylistSelect;
