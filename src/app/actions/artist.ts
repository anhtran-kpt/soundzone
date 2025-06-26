"use server";

import db from "@/lib/prisma/db";
import { CreateArtistInput } from "@/schemas";

export const getArtistsAction = async () => {
  return await db.artist.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getArtistBySlugAction = async (artistSlug: string) => {
  return await db.artist.findUnique({
    where: {
      slug: artistSlug,
    },
  });
};

export const getTracksByArtistSlugAction = async (artistSlug: string) => {
  return await db.artist.findUnique({
    where: {
      slug: artistSlug,
    },
    include: {
      tracks: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
};

export const createArtistAction = async (input: CreateArtistInput) => {
  return await db.$transaction(async (tx) => {
    const slug = await tx.artist.generateSlug(input.name);

    return await tx.artist.create({
      data: {
        ...input,
        slug,
      },
    });
  });
};
