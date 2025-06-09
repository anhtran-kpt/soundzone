import db from "@/lib/prisma/db";
import { fullArtistInclude } from "@/lib/prisma/presets";
import { FullArtist } from "@/lib/types";
import { CreateArtistInput } from "@/lib/validations";

const artistActions = {
  getAll: async (): Promise<FullArtist[]> => {
    return await db.artist.findMany({
      orderBy: { createdAt: "desc" },
      include: fullArtistInclude,
    });
  },

  getBySlug: async (slug: string): Promise<FullArtist | null> => {
    return await db.artist.findUnique({
      where: { slug },
      include: fullArtistInclude,
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
