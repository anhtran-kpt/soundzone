"use server";

import db from "@/lib/prisma/db";

export const isUserExists = async (userSlug: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        slug: userSlug,
      },
      select: {
        id: true,
      },
    });

    if (!user) {
      throw new Error("[IS_USER_EXISTS]: User not found!");
    }

    return user;
  } catch (error) {
    console.error("[IS_USER_EXISTS]", error);

    throw new Error("[IS_USER_EXISTS]: Something went wrong!");
  }
};
