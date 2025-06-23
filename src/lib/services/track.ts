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

export async function getTracksByArtistSlug(
  artistSlug: string,
  params: { limit?: number; page?: number } = { limit: undefined, page: 1 }
): Promise<FullTrack[]> {
  return await db.track.findMany({
    where: {
      artists: {
        some: {
          artist: {
            slug: artistSlug,
          },
        },
      },
    },
    orderBy: {
      playHistory: {
        _count: "desc",
      },
    },
    skip: params?.page ? (params.page - 1) * (params.limit ?? 10) : 0,
    take: params?.limit,
    include: fullTrackInclude,
  });
}
