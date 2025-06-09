import { Prisma } from "@/app/generated/prisma";

export const fullArtistInclude = Prisma.validator<Prisma.ArtistInclude>()({
  albums: true,
  tracks: true,
  genres: true,
});

export const minimalArtistSelect = Prisma.validator<Prisma.ArtistSelect>()({
  id: true,
  name: true,
  slug: true,
});
