import db from "../prisma/db";
import { fullTrackInclude } from "../prisma/presets";
import { FullTrack } from "../types";

export interface PaginatedTracks {
  items: FullTrack[];
  total: number;
  offset: number;
  limit: number;
}

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
  params: { offset?: number; limit?: number } = {}
): Promise<PaginatedTracks> {
  const { offset = 0, limit = 5 } = params;

  const total = await db.track.count({
    where: {
      artists: {
        some: { artist: { slug: artistSlug } },
      },
    },
  });

  const tracks = await db.track.findMany({
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
    skip: offset,
    take: limit,
    include: fullTrackInclude,
  });

  return {
    items: tracks,
    total,
    offset,
    limit,
  };
}
