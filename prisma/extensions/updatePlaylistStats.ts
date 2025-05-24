import basePrisma from "../../src/lib/prisma";
import { Prisma } from "@prisma/client";

export const updatePlaylistStats = Prisma.defineExtension({
  name: "updatePlaylistStats",
  query: {
    playlistSong: {
      async create({ args, query }) {
        const result = await query(args);

        const playlistId = args.data?.playlistId;

        if (playlistId) {
          await basePrisma.$transaction(async (tx) => {
            const playlistSongs = await tx.playlistSong.findMany({
              where: { playlistId },
              include: { song: true },
            });

            const songCount = playlistSongs.length;
            const totalDuration = playlistSongs.reduce(
              (sum, entry) => sum + (entry.song?.duration ?? 0),
              0
            );

            await tx.playlist.update({
              where: { id: playlistId },
              data: {
                songCount,
                totalDuration,
              },
            });
          });
        }

        return result;
      },

      async update({ args, query }) {
        const result = await query(args);

        const entry = await basePrisma.playlistSong.findUnique({
          where: { id: args.where?.id },
          select: { playlistId: true },
        });

        const playlistId = entry?.playlistId;

        if (playlistId) {
          await basePrisma.$transaction(async (tx) => {
            const playlistSongs = await tx.playlistSong.findMany({
              where: { playlistId },
              include: { song: true },
            });

            const songCount = playlistSongs.length;
            const totalDuration = playlistSongs.reduce(
              (sum, entry) => sum + (entry.song?.duration ?? 0),
              0
            );

            await tx.playlist.update({
              where: { id: playlistId },
              data: {
                songCount,
                totalDuration,
              },
            });
          });
        }

        return result;
      },

      async delete({ args, query }) {
        const result = await query(args);

        const entry = await basePrisma.playlistSong.findUnique({
          where: { id: args.where?.id },
          select: { playlistId: true },
        });

        const playlistId = entry?.playlistId;

        if (playlistId) {
          await basePrisma.$transaction(async (tx) => {
            const playlistSongs = await tx.playlistSong.findMany({
              where: { playlistId },
              include: { song: true },
            });

            const songCount = playlistSongs.length;
            const totalDuration = playlistSongs.reduce(
              (sum, entry) => sum + (entry.song?.duration ?? 0),
              0
            );

            await tx.playlist.update({
              where: { id: playlistId },
              data: {
                songCount,
                totalDuration,
              },
            });
          });
        }

        return result;
      },
    },
  },
});
