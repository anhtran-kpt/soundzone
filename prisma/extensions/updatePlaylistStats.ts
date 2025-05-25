import basePrisma from "../../src/lib/prisma";
import { Prisma } from "@prisma/client";

export const updatePlaylistStats = Prisma.defineExtension({
  name: "updatePlaylistStats",
  query: {
    playlistTrack: {
      async create({ args, query }) {
        const result = await query(args);

        const playlistId = args.data?.playlistId;

        if (playlistId) {
          await basePrisma.$transaction(async (tx) => {
            const playlistTracks = await tx.playlistTrack.findMany({
              where: { playlistId },
              include: { track: true },
            });

            const trackCount = playlistTracks.length;
            const totalDuration = playlistTracks.reduce(
              (sum, entry) => sum + (entry.track?.duration ?? 0),
              0
            );

            await tx.playlist.update({
              where: { id: playlistId },
              data: {
                trackCount,
                totalDuration,
              },
            });
          });
        }

        return result;
      },

      async update({ args, query }) {
        const result = await query(args);

        const entry = await basePrisma.playlistTrack.findUnique({
          where: { id: args.where?.id },
          select: { playlistId: true },
        });

        const playlistId = entry?.playlistId;

        if (playlistId) {
          await basePrisma.$transaction(async (tx) => {
            const playlistTracks = await tx.playlistTrack.findMany({
              where: { playlistId },
              include: { track: true },
            });

            const trackCount = playlistTracks.length;
            const totalDuration = playlistTracks.reduce(
              (sum, entry) => sum + (entry.track?.duration ?? 0),
              0
            );

            await tx.playlist.update({
              where: { id: playlistId },
              data: {
                trackCount,
                totalDuration,
              },
            });
          });
        }

        return result;
      },

      async delete({ args, query }) {
        const result = await query(args);

        const entry = await basePrisma.playlistTrack.findUnique({
          where: { id: args.where?.id },
          select: { playlistId: true },
        });

        const playlistId = entry?.playlistId;

        if (playlistId) {
          await basePrisma.$transaction(async (tx) => {
            const playlistTracks = await tx.playlistTrack.findMany({
              where: { playlistId },
              include: { track: true },
            });

            const trackCount = playlistTracks.length;
            const totalDuration = playlistTracks.reduce(
              (sum, entry) => sum + (entry.track?.duration ?? 0),
              0
            );

            await tx.playlist.update({
              where: { id: playlistId },
              data: {
                trackCount,
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
