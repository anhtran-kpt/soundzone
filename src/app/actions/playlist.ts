import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";
import { CreatePlaylistInput } from "@/schemas";

export const getPlaylistsAction = async () => {
  return await db.playlist.findMany({
    orderBy: {
      createdAt: "desc",
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
    },
  });
};

export const getPlaylistBySlugAction = async (playlistSlug: string) => {
  const playlistDetail = await db.playlist.findUnique({
    where: {
      slug: playlistSlug,
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
      user: true,
    },
  });

  if (!playlistDetail) {
    throw new Error(`Playlist with the slug ${playlistSlug} not found`);
  }

  return {
    ...playlistDetail,
    tracks: flattenRelation(playlistDetail.tracks, "track"),
    totalDuration: playlistDetail.tracks.reduce(
      (acc, track) => acc + track.track.duration,
      0
    ),
  };
};

export const createPlaylistAction = async (userId: string) => {
  return await db.$transaction(async (tx) => {
    const count = await tx.playlist.count({
      where: {
        userId,
        type: "USER",
      },
    });

    const title = `My Playlist #${count + 1}`;

    const slug = await tx.playlist.generateSlug(title);

    return await tx.playlist.create({
      data: {
        title,
        slug,
        type: "USER",
        userId,
      },
      include: {
        user: true,
      },
    });
  });
};
