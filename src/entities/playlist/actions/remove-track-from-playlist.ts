"use server";

import db from "@/lib/prisma/db";
import { withErrorHandler } from "@/entities/shared/with-error-handler";

export const removeTrackFromPlaylist = withErrorHandler(
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

      return await tx.playlistTrack.delete({
        where: {
          playlistId_trackId: {
            playlistId,
            trackId,
          },
        },
      });
    });
  }
);
