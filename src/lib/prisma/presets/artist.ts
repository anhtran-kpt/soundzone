import { Prisma } from "@/app/generated/prisma";

export const fullArtistInclude = Prisma.validator<Prisma.ArtistInclude>()({
  albums: {
    include: {
      tracks: true,
    },
  },
  tracks: {
    include: {
      track: {
        include: {
          artists: {
            include: {
              artist: true,
            },
          },
        },
      },
    },
  },
});

export const minimalArtistSelect = Prisma.validator<Prisma.ArtistSelect>()({
  id: true,
  name: true,
  slug: true,
});
