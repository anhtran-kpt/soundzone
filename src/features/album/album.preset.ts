import { Prisma } from "@/app/generated/prisma";

export const albumInfoSelect = {
  id: true,
  title: true,
  slug: true,
  releaseType: true,
  releaseDate: true,
  coverPublicId: true,
  artistId: true,
} satisfies Prisma.AlbumSelectScalar;
