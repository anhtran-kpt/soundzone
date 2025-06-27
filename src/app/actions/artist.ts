"use server";

import db from "@/lib/prisma/db";
import { CreateArtistInput } from "@/schemas";
import { Album, Artist } from "@/app/generated/prisma";

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

  if (!artistDetail) {
    throw new Error(`Artist with slug "${artistSlug}" not found`);
  }

  return {
    ...artistDetail,
    albumsByType: groupAlbumsByType(artistDetail.albums),
  };
};

export const createArtistAction = async (
  input: CreateArtistInput
): Promise<Artist> => {
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
