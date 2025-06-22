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

export async function getTrackBySlug(slug: string): Promise<FullTrack | null> {
  return await db.track.findUnique({
    where: { slug },
    include: fullTrackInclude,
  });
}

export async function getTrackByArtistSlug(slug: string): Promise<FullTrack[]> {
  return await db.track.findMany({
    where: {
      artists: {
        some: {
          artist: {
            slug,
          },
        },
      },
    },
    orderBy: {
      playHistory: {
        _count: "desc",
      },
    },
    include: fullTrackInclude,
  });
}
