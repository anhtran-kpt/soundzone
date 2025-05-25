import { Prisma } from "@prisma/client";
import basePrisma from "../../src/lib/prisma";

export const updateAlbumStats = Prisma.defineExtension({
  name: "updateAlbumStats",
  query: {
    track: {
      async create({ args, query }) {
        const result = await query(args);
        const albumId = args.data?.albumId;

        if (albumId) {
          await basePrisma.$transaction(async (tx) => {
            const tracks = await tx.track.findMany({
              where: { albumId },
              select: { duration: true },
            });
            const totalDuration = tracks.reduce(
              (sum, track) => sum + track.duration,
              0
            );
            const trackCount = tracks.length;

            await tx.album.update({
              where: { id: albumId },
              data: {
                totalDuration,
                trackCount,
              },
            });
          });
        }

        return result;
      },

      async update({ args, query }) {
        const result = await query(args);

        const track = await basePrisma.track.findUnique({
          where: { id: args.where?.id },
          select: { albumId: true },
        });

        const albumId = track?.albumId;

        if (albumId) {
          await basePrisma.$transaction(async (tx) => {
            const tracks = await tx.track.findMany({
              where: { albumId },
              select: { duration: true },
            });

            const totalDuration = tracks.reduce(
              (sum, track) => sum + track.duration,
              0
            );
            const trackCount = tracks.length;

            await tx.album.update({
              where: { id: albumId },
              data: {
                totalDuration,
                trackCount,
              },
            });
          });
        }

        return result;
      },

      async delete({ args, query }) {
        const result = await query(args);

        const track = await basePrisma.track.findUnique({
          where: { id: args.where?.id },
          select: { albumId: true },
        });

        const albumId = track?.albumId;

        if (albumId) {
          await basePrisma.$transaction(async (tx) => {
            const tracks = await tx.track.findMany({
              where: { albumId },
              select: { duration: true },
            });

            const totalDuration = tracks.reduce(
              (sum, track) => sum + track.duration,
              0
            );
            const trackCount = tracks.length;

            await tx.album.update({
              where: { id: albumId },
              data: {
                totalDuration,
                trackCount,
              },
            });
          });
        }

        return result;
      },
    },
  },
});
