import prisma from "@/lib/prisma/prisma";
import { CreateArtistDto } from "@/schemas";

export const getAllArtists = async () => {
  return await prisma.artist.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const getArtistBySlug = async (slug: string) => {
  return await prisma.artist.findUnique({
    where: { slug },
  });
};

export const createArtist = async (data: CreateArtistDto) => {
  await prisma.$transaction(async (tx) => {
    const slug = await tx.artist.generateSlug(data.name);

    await tx.artist.create({
      data: {
        ...data,
        slug,
      },
    });

    return null;
  });
};
