"use server";

import db from "@/lib/prisma/db";
import { isUserExists } from "./is-user-exists";

export const getFollowingArtists = async (userSlug: string) => {
  try {
    const user = await isUserExists(userSlug);

    const artists = await db.artist.findMany({
      where: {
        followers: {
          some: {
            userId: user.id,
          },
        },
      },
      select: {
        name: true,
        imagePublicId: true,
        slug: true,
        id: true,
      },
    });

    return artists;
  } catch (error) {
    console.error("[GET_FOLLOWING_ARTIST]", error);

    throw new Error("[GET_FOLLOWING_ARTIST]: Something went wrong!");
  }
};
