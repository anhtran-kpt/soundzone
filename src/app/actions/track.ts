"use server";

import db from "@/lib/prisma/db";

export const getTracksAction = async () => {
  return await db.track.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getTrackBySlugAction = async (trackSlug: string) => {
  return await db.track.findUnique({
    where: {
      slug: trackSlug,
    },
    include: {
      album: true,
      artists: {
        select: {
          artist: true,
        },
      },
    },
  });
};
