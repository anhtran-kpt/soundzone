"use server";

import db from "@/lib/prisma/db";
import { isUserExists } from "./is-user-exists";

export const getPlaylists = async (userSlug: string) => {
  try {
    const user = await isUserExists(userSlug);

    const playlists = await db.playlist.findMany({
      where: {
        userId: user.id,
      },
      select: {
        title: true,
        coverPublicId: true,
        slug: true,
        id: true,
      },
    });

    return playlists;
  } catch (error) {
    console.error("[GET_PLAYLISTS]", error);

    throw new Error("[GET_PLAYLISTS]: Something went wrong!");
  }
};
