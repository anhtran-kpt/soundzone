import { Prisma } from "@/app/generated/prisma";

export const fullAlbumInclude = Prisma.validator<Prisma.AlbumInclude>()({
  artist: true,
  genres: true,
  tracks: true,
  likedByUsers: true,
});

export const minimalAlbumSelect = Prisma.validator<Prisma.AlbumSelect>()({
  id: true,
  name: true,
  slug: true,
  releaseDate: true,
  coverUrl: true,
});
