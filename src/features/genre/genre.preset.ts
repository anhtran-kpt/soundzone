import { Prisma } from "@/app/generated/prisma";

export const baseGenreSelect = {
  id: true,
  title: true,
  slug: true,
  lyrics: true,
  duration: true,
  isExplicit: true,
  audioPublicId: true,
  genreNumber: true,
  albumId: true,
} satisfies Prisma.GenreSelect;
