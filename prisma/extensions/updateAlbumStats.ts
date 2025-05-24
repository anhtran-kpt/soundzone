import { Prisma } from "@prisma/client";
import basePrisma from "../../src/lib/prisma";

export const updateAlbumStats = Prisma.defineExtension({
  name: "updateAlbumStats",
  query: {
    song: {
      async create({ args, query }) {
        const result = await query(args);
        const albumId = args.data?.albumId;

        if (albumId) {
          await basePrisma.$transaction(async (tx) => {
            const songs = await tx.song.findMany({
              where: { albumId },
              select: { duration: true },
            });
            const totalDuration = songs.reduce(
              (sum, song) => sum + song.duration,
              0
            );
            const songCount = songs.length;

            await tx.album.update({
              where: { id: albumId },
              data: {
                totalDuration,
                songCount,
              },
            });
          });
        }

        return result;
      },

      async update({ args, query }) {
        const result = await query(args);

        const song = await basePrisma.song.findUnique({
          where: { id: args.where?.id },
          select: { albumId: true },
        });

        const albumId = song?.albumId;

        if (albumId) {
          await basePrisma.$transaction(async (tx) => {
            const songs = await tx.song.findMany({
              where: { albumId },
              select: { duration: true },
            });

            const totalDuration = songs.reduce(
              (sum, song) => sum + song.duration,
              0
            );
            const songCount = songs.length;

            await tx.album.update({
              where: { id: albumId },
              data: {
                totalDuration,
                songCount,
              },
            });
          });
        }

        return result;
      },

      async delete({ args, query }) {
        const result = await query(args);

        const song = await basePrisma.song.findUnique({
          where: { id: args.where?.id },
          select: { albumId: true },
        });

        const albumId = song?.albumId;

        if (albumId) {
          await basePrisma.$transaction(async (tx) => {
            const songs = await tx.song.findMany({
              where: { albumId },
              select: { duration: true },
            });

            const totalDuration = songs.reduce(
              (sum, song) => sum + song.duration,
              0
            );
            const songCount = songs.length;

            await tx.album.update({
              where: { id: albumId },
              data: {
                totalDuration,
                songCount,
              },
            });
          });
        }

        return result;
      },
    },
  },
});
