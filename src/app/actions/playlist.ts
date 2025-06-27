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
  return await db.playlist.findUnique({
    where: {
      slug: playlistSlug,
    },
  });
};

export const createPlaylistAction = async (data: CreatePlaylistInput) => {
  return await db.playlist.create({
    data,
  });
};
