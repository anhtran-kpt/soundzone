"use server";

import db from "@/lib/prisma/db";
import { Track } from "../generated/prisma";

export const getTracksAction = async (): Promise<Track[] | []> => {
  return await db.track.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getTrackBySlugAction = async (
  trackSlug: string
): Promise<Track | null> => {
  return await db.track.findUnique({
    where: {
      slug: trackSlug,
    },
  });
};
