import db from "@/lib/prisma/db";

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
