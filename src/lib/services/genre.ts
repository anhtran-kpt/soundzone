import db from "@/lib/prisma/db";

export async function getGenreByName(name: string) {
  return await db.genre.findUnique({ where: { name } });
}

export async function createGenre(name: string) {
  await db.$transaction(async (tx) => {
    const slug = await tx.genre.generateSlug(name);
    await tx.genre.create({ data: { name, slug } });
  });
}

export async function updateGenre(id: string, name: string) {
  await db.$transaction(async (tx) => {
    const slug = await tx.genre.generateSlug(name);

    await tx.genre.update({
      where: { id },
      data: {
        name,
        slug,
      },
    });
  });
}
