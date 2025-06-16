import { Prisma } from "@/app/generated/prisma";

export const fullPlaylistInclude = Prisma.validator<Prisma.PlaylistInclude>()({
  tracks: true,
  user: true,
  likedByUsers: true,
});

export const minimalPlaylistSelect = Prisma.validator<Prisma.PlaylistSelect>()({
  id: true,
  title: true,
  slug: true,
});
