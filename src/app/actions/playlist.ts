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

export const addTrackToPlaylistAction = async (
  trackId: string,
  playlistId: string
) => {
  return db.$transaction(async (tx) => {
    if (
      !(await tx.track.findUnique({
        where: {
          id: trackId,
        },
      }))
    ) {
      throw new Error("Track not found");
    }

    if (
      !(await tx.playlistTrack.findUnique({
        where: {
          playlistId_trackId: {
            playlistId,
            trackId,
          },
        },
      }))
    ) {
      throw new Error("Track existed in playlist");
    }

    const lastTrack = await tx.playlistTrack.findFirst({
      where: { playlistId },
      orderBy: { order: "desc" },
    });

    const newOrder = (lastTrack?.order || 0) + 1;

    const playlistTrack = await tx.playlistTrack.create({
      data: {
        playlistId,
        trackId,
        order: newOrder,
      },
      include: {
        track: true,
      },
    });

    return playlistTrack;
  });
};

export const removeTrackFromPlaylistAction = async (
  trackId: string,
  playlistId: string
) => {
  return db.$transaction(async (tx) => {
    if (
      !(await tx.track.findUnique({
        where: {
          id: trackId,
        },
      }))
    ) {
      throw new Error("Track not found");
    }

    return await tx.playlistTrack.delete({
      where: {
        playlistId_trackId: {
          playlistId,
          trackId,
        },
      },
    });
  });
};
