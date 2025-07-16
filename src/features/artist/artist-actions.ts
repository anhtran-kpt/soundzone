"use server";

import db from "@/lib/prisma/db";
import { PaginationParams } from "../shared";
import { requireAuth } from "@/lib/next-auth";
import { artistInfoSelect } from "./artist-presets";
import { albumInfoSelect } from "../album/album-presets";
import { flattenRelation } from "@/lib/helpers";

export const getArtistPopularTracks = async (
  artistSlug: string,
  params: PaginationParams
) => {
  const { page, limit } = params;

  const [tracks, total] = await db.$transaction([
    db.track.findMany({
      where: {
        artists: {
          some: {
            role: "MAIN_ARTIST",
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
      include: {
        _count: {
          select: {
            playHistory: true,
          },
        },
        album: {
          select: {
            title: true,
            id: true,
            slug: true,
            coverPublicId: true,
          },
        },
        artists: {
          select: {
            artist: {
              select: {
                slug: true,
                name: true,
              },
            },
          },
        },
      },
      take: limit,
      skip: (page - 1) * limit,
    }),

    db.track.count({
      where: {
        artists: {
          some: {
            role: "MAIN_ARTIST",
            artist: {
              slug: artistSlug,
            },
          },
        },
      },
    }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return {
    tracks: tracks.map((track) => ({
      ...track,
      artists: flattenRelation(track.artists, "artist"),
    })),
    meta: {
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
  };
};

export const getArtistDiscography = async (artistSlug: string) => {
  const artist = await db.artist.findUniqueOrThrow({
    where: {
      slug: artistSlug,
    },
  });

  const [popularReleases, albumReleases, singleAndEpReleases] =
    await db.$transaction([
      db.album.findMany({
        where: {
          artistId: artist.id,
        },
        orderBy: {
          likedByUsers: {
            _count: "desc",
          },
        },
        take: 5,
        select: albumInfoSelect,
      }),

      db.album.findMany({
        where: {
          artistId: artist.id,
          releaseType: "ALBUM",
        },
        orderBy: {
          likedByUsers: {
            _count: "desc",
          },
        },
        take: 5,
        select: albumInfoSelect,
      }),

      db.album.findMany({
        where: {
          artistId: artist.id,
          releaseType: {
            in: ["SINGLE", "EP"],
          },
        },
        orderBy: {
          likedByUsers: {
            _count: "desc",
          },
        },
        take: 5,
        select: albumInfoSelect,
      }),
    ]);

  return {
    popularReleases,
    albumReleases,
    singleAndEpReleases,
  };
};

export const getArtistInfo = async (artistSlug: string) => {
  return await db.artist.findUniqueOrThrow({
    where: {
      slug: artistSlug,
    },
    select: artistInfoSelect,
  });
};

export const isFollowing = async (artistSlug: string) => {
  const session = await requireAuth();

  const artist = await db.artist.findUniqueOrThrow({
    where: {
      slug: artistSlug,
    },
  });

  return !!(await db.userFollowedArtist.findFirst({
    where: {
      userId: session.user.id,
      artistId: artist.id,
    },
    select: { id: true },
  }));
};

export const followArtist = async (artistSlug: string) => {
  const session = await requireAuth();

  const artist = await db.artist.findUniqueOrThrow({
    where: {
      slug: artistSlug,
    },
  });

  await db.userFollowedArtist.create({
    data: {
      userId: session.user.id,
      artistId: artist.id,
    },
  });
};

export const unfollowArtist = async (artistSlug: string) => {
  const session = await requireAuth();

  const artist = await db.artist.findUniqueOrThrow({
    where: {
      slug: artistSlug,
    },
  });

  await db.userFollowedArtist.deleteMany({
    where: {
      userId: session.user.id,
      artistId: artist.id,
    },
  });
};

export const getArtistDetailPage = async (artistSlug: string) => {
  const artist = await db.artist.findUniqueOrThrow({
    where: {
      slug: artistSlug,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
      tracks: {
        select: {
          track: {
            select: {
              _count: {
                select: {
                  playHistory: true,
                },
              },
              title: true,
              id: true,
              lyrics: true,
              slug: true,
              duration: true,
              isExplicit: true,
              audioPublicId: true,
              trackNumber: true,
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
              album: {
                select: {
                  coverPublicId: true,
                  title: true,
                  slug: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const popular = await getArtistPopularTracks(artist.slug, {
    page: 1,
    limit: 5,
  });

  const [popularReleases, albumReleases, singleAndEpReleases] =
    await db.$transaction([
      db.album.findMany({
        where: {
          artistId: artist.id,
        },
        orderBy: {
          likedByUsers: {
            _count: "desc",
          },
        },
        take: 5,
        select: albumInfoSelect,
      }),

      db.album.findMany({
        where: {
          artistId: artist.id,
          releaseType: "ALBUM",
        },
        orderBy: {
          likedByUsers: {
            _count: "desc",
          },
        },
        take: 5,
        select: albumInfoSelect,
      }),

      db.album.findMany({
        where: {
          artistId: artist.id,
          releaseType: {
            in: ["SINGLE", "EP"],
          },
        },
        orderBy: {
          likedByUsers: {
            _count: "desc",
          },
        },
        take: 5,
        select: albumInfoSelect,
      }),
    ]);

  return {
    banner: {
      name: artist.name,
      bannerPublicId: artist.bannerPublicId,
      followers: artist._count.followers,
    },
    actions: {
      artistId: artist.id,
      artistSlug: artist.slug,
    },
    popular,
    discography: {
      artistSlug: artist.slug,
      popularReleases,
      albumReleases,
      singleAndEpReleases,
    },
    about: {
      name: artist.name,
      imagePublicId: artist.imagePublicId,
      followers: artist._count.followers,
      description: artist.description,
    },
  };
};
