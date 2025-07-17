"use server";

import db from "@/lib/prisma/db";

export const getArtistInfo = async (artistSlug: string) => {
  try {
    const artist = await db.artist.findUnique({
      where: {
        slug: artistSlug,
      },
      include: {
        _count: {
          select: {
            followers: true,
          },
        },
      },
      omit: {
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!artist) {
      throw new Error("[GET_ARTIST_INFO]: Artist not found!");
    }

    return {
      ...artist,
      followers: artist._count.followers,
    };
  } catch (error) {
    console.error("[GET_ARTIST_INFO]", error);
    throw new Error("[GET_ARTIST_INFO]: Something went wrong!");
  }
};
