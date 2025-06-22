import db from "@/lib/prisma/db";
import { CreateArtistInput, UpdateArtistInput } from "../validations";
import { fullArtistInclude } from "../prisma/presets";
import { FullArtist } from "../types";

export async function getArtistBySlug(
  slug: string
): Promise<FullArtist | null> {
  return await db.artist.findUnique({
    where: { slug },
    include: fullArtistInclude,
  });
}

export async function getAllArtists(): Promise<FullArtist[]> {
  return await db.artist.findMany({
    orderBy: { createdAt: "desc" },
    include: fullArtistInclude,
  });
}

export async function createArtist(data: CreateArtistInput): Promise<void> {
  await db.$transaction(async (tx) => {
    const slug = await tx.artist.generateSlug(data.name);

    await tx.artist.create({
      data: {
        ...data,
        slug,
      },
    });
  });
}

export async function updateArtist(
  id: string,
  data: UpdateArtistInput
): Promise<void> {
  await db.$transaction(async (tx) => {
    if (data.name) {
      const slug = await tx.artist.generateSlug(data.name);

      await tx.artist.update({
        where: { id },
        data: { ...data, slug },
      });
    } else {
      await tx.artist.update({
        where: { id },
        data,
      });
    }
  });
}
