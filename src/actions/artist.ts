import prisma from "@/lib/prisma/prisma";
import { CreateArtistDto } from "@/schemas";

const artistActions = {
  getAll: async () => {
    return await prisma.artist.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  getBySlug: async (slug: string) => {
    return await prisma.artist.findUnique({
      where: { slug },
    });
  },

  create: async (data: CreateArtistDto) => {
    const { genreIds, ...rest } = data;

    await prisma.$transaction(async (tx) => {
      const slug = await tx.artist.generateSlug(rest.name);

      const artist = await tx.artist.create({
        data: {
          ...rest,
          slug,
        },
      });

      if (genreIds) {
        await tx.artistGenre.createMany({
          data: genreIds.map((genreId) => ({
            artistId: artist.id,
            genreId,
          })),
        });
      }

      return artist;
    });
  },
};

export default artistActions;
