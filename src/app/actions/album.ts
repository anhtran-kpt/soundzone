"use server";

import db from "@/lib/prisma/db";
import { emptyToNull } from "@/lib/utils";
import { ReleaseType } from "@/app/generated/prisma";
import { CreateAlbumInput } from "@/schemas/album";

export const getAlbumsAction = async () => {
  return await db.album.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getAlbumBySlugAction = async (albumSlug: string) => {
  const albumDetail = await db.album.findUnique({
    where: {
      slug: albumSlug,
    },
    include: {
      artist: true,
      tracks: {
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
      },
    },
  });

  if (!albumDetail) {
    throw new Error(`Album with slug ${albumSlug} not found`);
  }

  return {
    ...albumDetail,
    totalDuration: albumDetail.tracks.reduce(
      (acc, track) => acc + track.duration,
      0
    ),
  };
};

export const createAlbumAction = async (data: CreateAlbumInput) => {
  const {
    title,
    description,
    releaseDate,
    coverPublicId,
    bannerPublicId,
    artistId,
    tracks,
  } = data;

  return await db.$transaction(async (tx) => {
    const albumSlug = await tx.album.generateSlug(title);

    const album = await tx.album.create({
      data: {
        title,
        slug: albumSlug,
        description: emptyToNull(description),
        releaseType:
          tracks.length === 1 ? ReleaseType.SINGLE : ReleaseType.ALBUM,
        releaseDate,
        coverPublicId,
        bannerPublicId,
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
