import { Prisma } from "@/app/generated/prisma";

export const baseAlbumSelect = {
  id: true,
  title: true,
  slug: true,
  releaseType: true,
  releaseDate: true,
  coverPublicId: true,
  artistId: true,
} satisfies Prisma.AlbumSelect;
