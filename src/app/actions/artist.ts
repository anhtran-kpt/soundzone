"use server";

import db from "@/lib/prisma/db";
import { CreateArtistInput } from "@/schemas";
import { Album } from "../generated/prisma";

type ReleaseGroup = Record<string, Album[]>;

const groupAlbumsByType = (albums: Album[]): ReleaseGroup => {
  return albums.reduce<ReleaseGroup>((acc, album) => {
    const key =
      album.releaseType === "ALBUM"
        ? "album"
        : album.releaseType === "SINGLE" || album.releaseType === "EP"
        ? "single"
        : "other";
    (acc[key] ||= []).push(album);
    return acc;
  }, {});
};

export const getArtistsAction = async () => {
  return await db.artist.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getArtistBySlugAction = async (artistSlug: string) => {
  const artistDetail = await db.artist.findUnique({
    where: {
      slug: artistSlug,
    },
    include: {
      tracks: {
        select: {
          track: {
            include: {
              album: true,
              artists: {
                select: {
                  artist: true,
                },
              },
            },
          },
        },
      },
      albums: {
        orderBy: {
          likedByUsers: {
            _count: "desc",
          },
        },
      },
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  return artistDetail
    ? {
        ...artistDetail,
        albumsByType: groupAlbumsByType(artistDetail.albums),
      }
    : [];
};

export const getTracksByArtistSlugAction = async (artistSlug: string) => {
  const artistWithTracks = await db.artist.findUnique({
    where: {
      slug: artistSlug,
    },
    include: {
      tracks: {
        include: {
          track: {
            include: {
              artists: {
                include: {
                  artist: true,
                },
              },
              album: true,
            },
          },
        },
      },
    },
  });

  return (
    artistWithTracks?.tracks.map(({ track }) => ({
      ...track,
      album: track.album,
      artists: track.artists.map((artist) => artist.artist),
    })) ?? []
  );
};

export const createArtistAction = async (input: CreateArtistInput) => {
  return await db.$transaction(async (tx) => {
    const slug = await tx.artist.generateSlug(input.name);

    return await tx.artist.create({
      data: {
        ...input,
        slug,
      },
    });
  });
};
