import { Prisma } from "@/app/generated/prisma";

export const fullArtistInclude = Prisma.validator<Prisma.ArtistInclude>()({
  albums: {
    include: {
      tracks: true,
    },
  },
  tracks: true,
});

export const minimalArtistSelect = Prisma.validator<Prisma.ArtistSelect>()({
  id: true,
  name: true,
  slug: true,
});
