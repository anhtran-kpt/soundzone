import { Prisma } from "@/app/generated/prisma";

export const albumInfoSelect = {
  id: true,
  title: true,
  slug: true,
  releaseType: true,
  releaseDate: true,
  coverPublicId: true,
  artist: {
    select: {
      slug: true,
    },
  },
} satisfies Prisma.AlbumSelect;
