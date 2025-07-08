import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";

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

export const getPlaylistAction = async (playlistId: string) => {
  const playlistDetail = await db.playlist.findUnique({
    where: {
      id: playlistId,
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
    throw new Error(`Playlist with id ${playlistId} not found`);
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
