import db from "@/lib/prisma/db";
import { CreatePlaylistInput } from "@/schemas";

export const getPlaylistsAction = async () => {
  return await db.playlist.findMany({
    orderBy: {
      createdAt: "desc",
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
    },
  });

  if (!playlistDetail) {
    throw new Error(`Playlist with the slug ${playlistSlug} not found`);
  }

  return {
    ...playlistDetail,
    tracks: playlistDetail.tracks.map((track) => track.track),
  };
};

export const createPlaylistAction = async (data: CreatePlaylistInput) => {
  return await db.playlist.create({
    data,
  });
};
