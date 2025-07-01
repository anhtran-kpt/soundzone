"use server";

import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";

export const getTracksAction = async () => {
  return await db.track.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getTrackBySlugAction = async (trackSlug: string) => {
  const trackDetail = await db.track.findUnique({
    where: {
      slug: trackSlug,
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
    },
  });

  if (!trackDetail) {
    throw new Error(`Track with ${trackSlug} not found`);
  }

  return {
    ...trackDetail,
    artists: flattenRelation(trackDetail.artists, "artist"),
  };
};
