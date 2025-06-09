import { Prisma } from "@/app/generated/prisma";
import { fullGenreInclude, minimalGenreSelect } from "../prisma/presets";

export type FullGenre = Prisma.GenreGetPayload<{
  include: typeof fullGenreInclude;
}>;

export type MinimalGenre = Prisma.GenreGetPayload<{
  select: typeof minimalGenreSelect;
}>;
