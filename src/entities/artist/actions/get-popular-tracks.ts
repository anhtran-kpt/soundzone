"use server";

import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { PaginationParams, TArtist } from "@/entities/shared/shared-types";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";

export const getPopularTracks = withErrorHandler(
  async (artistSlug: string, params: PaginationParams) => {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const artist = await isEntityExists("artist", "slug", artistSlug);

    const tracks = await db.track.findMany({
      where: {
        artists: {
          some: { artistId: artist.id },
        },
      },
      omit: {
        lyrics: true,
        createdAt: true,
        updatedAt: true,
      },
      include: {
        album: {
          select: { id: true, slug: true, title: true, coverPublicId: true },
        },
        artists: {
          select: {
            artist: {
              select: { id: true, slug: true, name: true },
            },
          },
        },
        _count: {
          select: {
            playHistory: true,
          },
        },
      },
      orderBy: {
        playHistory: {
          _count: "desc",
        },
      },
      take: limit,
      skip,
    });

    return tracks.map((track) => {
      const allArtists = flattenRelation(track.artists, "artist");

      const [mainArtists, collaborators] = allArtists.reduce<
        [TArtist[], TArtist[]]
      >(
        ([main, others], artist) => {
          if (artist.slug === artistSlug) {
            main.push(artist);
          } else {
            others.push(artist);
          }
          return [main, others];
        },
        [[], []]
      );

      return {
        ...track,
        coverPublicId: track.album.coverPublicId,
        mainArtist: mainArtists[0],
        artists: allArtists,
        collaborators,
        plays: track._count.playHistory,
      };
    });
  }
);
