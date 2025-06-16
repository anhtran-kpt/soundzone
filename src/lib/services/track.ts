import db from "../prisma/db";
import { fullTrackInclude } from "../prisma/presets";
import { FullTrack } from "../types";

export async function getAllTracks(): Promise<FullTrack[]> {
  return await db.track.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: fullTrackInclude,
  });
}

export async function getTrackById(id: string): Promise<FullTrack | null> {
  return await db.track.findUnique({
    where: { id },
    include: fullTrackInclude,
  });
}
