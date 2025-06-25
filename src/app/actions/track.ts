"use server";

import db from "@/lib/prisma/db";
import { fullTrackInclude } from "@/lib/prisma/presets";
import { FullTrack } from "@/lib/types";

export async function getAllTracksAction(): Promise<FullTrack[]> {
  return await db.track.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: fullTrackInclude,
  });
}

export async function getTrackBySlugAction(
  slug: string
): Promise<FullTrack | null> {
  return await db.track.findUnique({
    where: { slug },
    include: fullTrackInclude,
  });
}

export async function getTracksByArtistSlugAction(
  artistSlug: string,
  params: { offset: number; limit: number }
): Promise<PaginatedTracks> {
  const { offset, limit } = params;

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
