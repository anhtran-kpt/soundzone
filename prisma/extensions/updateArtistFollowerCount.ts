import { Prisma } from "@prisma/client";
import basePrisma from "../../src/lib/prisma";

export const updateArtistFollowerCount = Prisma.defineExtension({
  name: "updateArtistFollowerCount",
  query: {
    userFollowedArtist: {
      async create({ args, query }) {
        const result = await query(args);
        const artistId = args.data?.artistId;

        if (artistId) {
          await basePrisma.$transaction(async (tx) => {
            const count = await tx.userFollowedArtist.count({
              where: { artistId },
            });

            await tx.artist.update({
              where: { id: artistId },
              data: {
                followerCount: count,
              },
            });
          });
        }

        return result;
      },

      async delete({ args, query }) {
        const result = await query(args);

        const entry = await basePrisma.userFollowedArtist.findUnique({
          where: { id: args.where?.id },
          select: { artistId: true },
        });
        const artistId = entry?.artistId;

        if (artistId) {
          await basePrisma.$transaction(async (tx) => {
            const count = await tx.userFollowedArtist.count({
              where: { artistId },
            });

            await tx.artist.update({
              where: { id: artistId },
              data: {
                followerCount: count,
              },
            });
          });
        }

        return result;
      },
    },
  },
});
