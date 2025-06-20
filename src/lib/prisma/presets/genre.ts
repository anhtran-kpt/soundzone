import { Prisma } from "@/app/generated/prisma";

export const fullGenreInclude = Prisma.validator<Prisma.GenreInclude>()({
  tracks: true,
});

export const minimalGenreSelect = Prisma.validator<Prisma.GenreSelect>()({
  id: true,
  name: true,
  slug: true,
});
