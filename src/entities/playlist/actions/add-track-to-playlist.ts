"use server";

import db from "@/lib/prisma/db";
import { withErrorHandler } from "@/entities/shared/with-error-handler";

export const addTrackToPlaylist = withErrorHandler(
  async (input: { trackId: string; playlistId: string }) => {
    const { trackId, playlistId } = input;

    return db.$transaction(async (tx) => {
      if (
        !(await tx.track.findUnique({
          where: {
            id: trackId,
          },
        }))
      ) {
        throw new Error("Track not found");
      }

      if (
        !(await tx.playlistTrack.findUnique({
          where: {
            playlistId_trackId: {
              playlistId,
              trackId,
            },
          },
        }))
      ) {
        throw new Error("Track existed in playlist");
      }

      const lastTrack = await tx.playlistTrack.findFirst({
        where: { playlistId },
        orderBy: { order: "desc" },
      });

      const newOrder = (lastTrack?.order || 0) + 1;

      const playlistTrack = await tx.playlistTrack.create({
        data: {
          playlistId,
          trackId,
          order: newOrder,
        },
        include: {
          track: true,
        },
      });

      return playlistTrack;
    });
  }
);
