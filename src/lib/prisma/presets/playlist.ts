import { Prisma } from "@/app/generated/prisma";

export const fullPlaylistInclude = Prisma.validator<Prisma.PlaylistInclude>()({
  tracks: true,
  user: true,
  likedByUsers: true,
  genres: true,
});

export const minimalPlaylistSelect = Prisma.validator<Prisma.PlaylistSelect>()({
  id: true,
  name: true,
  slug: true,
});
