import db from "@/lib/db";
import { CreateArtistInput } from "@/schemas";

const artistActions = {
  getAll: async () => {
    return await db.artist.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        albums: true,
        tracks: true,
      },
    });
  },

  getBySlug: async (slug: string) => {
    return await db.artist.findUnique({
      where: { slug },
      include: {
        albums: true,
      },
    });
  },

  create: async (data: CreateArtistInput) => {
    const { genreIds, ...rest } = data;

    await db.$transaction(async (tx) => {
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
