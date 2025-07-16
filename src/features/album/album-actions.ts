"use server";

import db from "@/lib/prisma/db";
import { emptyToNull } from "@/lib/utils";
import { CreateAlbumInput } from "./album-schemas";
import { PaginationParams } from "../shared";
import { albumInfoSelect } from "./album-presets";
import { artistInfoSelect } from "../artist/artist-presets";
import { flattenRelation } from "@/lib/helpers";

export const getAlbumList = async (params: PaginationParams) => {
  const { page, limit } = params;

  const data = await db.album.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: albumInfoSelect,
    skip: (page - 1) * limit,
    take: limit,
  });

  const total = data.length;
  const totalPages = Math.ceil(total / limit);

  return {
    data,
    meta: {
      total,
      page,
      limit,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
  };
};

export const getAlbumDetailPage = async (
  artistSlug: string,
  albumSlug: string
) => {
  const album = await db.album.findUniqueOrThrow({
    where: {
      slug: albumSlug,
    },
    select: {
      id: true,
      title: true,
      releaseType: true,
      releaseDate: true,
      coverPublicId: true,
      artist: {
        select: artistInfoSelect,
      },
      tracks: {
        select: {
          id: true,
          title: true,
          audioPublicId: true,
          duration: true,
          slug: true,
          isExplicit: true,
          trackNumber: true,
          album: {
            select: {
              coverPublicId: true,
            },
          },
          _count: {
            select: {
              playHistory: true,
            },
          },
          artists: {
            select: {
              artist: {
                select: {
                  name: true,
                  slug: true,
                },
              },
            },
          },
        },
      },
    },
  });

  return {
    ...album,
    totalDuration: album.tracks.reduce((acc, track) => acc + track.duration, 0),
    tracks: album.tracks.map((track) => ({
      ...track,
      artists: flattenRelation(track.artists, "artist"),
    })),
  };
};

export const create = async (data: CreateAlbumInput) => {
  const { title, releaseDate, releaseType, coverPublicId, artistId, tracks } =
    data;

  return await db.$transaction(async (tx) => {
    const albumSlug = await tx.album.generateSlug(title);

    const album = await tx.album.create({
      data: {
        title,
        slug: albumSlug,
        releaseType,
        releaseDate,
        coverPublicId,
        artistId,
      },
    });

    await Promise.all(
      tracks.map(async (trackData, trackIndex) => {
        const trackSlug = await tx.track.generateSlug(trackData.title);

        const track = await tx.track.create({
          data: {
            title: trackData.title,
            slug: trackSlug,
            duration: trackData.duration,
            audioPublicId: trackData.audioPublicId,
            trackNumber: trackIndex + 1,
            isExplicit: trackData.isExplicit,
            lyrics: emptyToNull(trackData.lyrics),
            albumId: album.id,
          },
        });

        if (trackData.performers.length > 0) {
          await tx.trackArtist.createMany({
            data: trackData.performers.map((performer) => ({
              trackId: track.id,
              artistId: performer.artistId,
              role: performer.role,
            })),
          });

          await tx.credit.createMany({
            data: trackData.credits.map((credit) => ({
              name: credit.name,
              roles: credit.roles,
              trackId: track.id,
            })),
          });
        }

        if (trackData.genreIds.length > 0) {
          await tx.trackGenre.createMany({
            data: trackData.genreIds.map((genreId) => ({
              trackId: track.id,
              genreId,
            })),
          });
        }
      })
    );
  });
};
