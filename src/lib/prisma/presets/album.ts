import { Prisma } from "@/app/generated/prisma";

export const fullAlbumInclude = Prisma.validator<Prisma.AlbumInclude>()({
  artist: true,
  tracks: {
    include: {
      artists: true,
    },
  },
  likedByUsers: true,
});

export const minimalAlbumSelect = Prisma.validator<Prisma.AlbumSelect>()({
  id: true,
  title: true,
  slug: true,
  releaseDate: true,
  coverPublicId: true,
});
