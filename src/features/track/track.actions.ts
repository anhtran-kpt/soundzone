"use server";

import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";

export const fetchTracksAction = async () => {
  return await db.track.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchTrackByIdAction = async (trackId: string) => {
  const trackDetail = await db.track.findUnique({
    where: {
      id: trackId,
    },
    include: {
      album: {
        include: {
          artist: true,
        },
      },
      artists: {
        select: {
          artist: true,
        },
      },
      playHistory: true,
    },
  });

  if (!trackDetail) {
    throw new Error(`Track with id ${trackId} not found`);
  }

  return {
    ...trackDetail,
    artists: flattenRelation(trackDetail.artists, "artist"),
  };
};
