import { Prisma } from "@/app/generated/prisma";

export const albumSelect = {
  id: true,
  title: true,
  slug: true,
  releaseType: true,
  releaseDate: true,
  coverPublicId: true,
} satisfies Prisma.AlbumSelect;
