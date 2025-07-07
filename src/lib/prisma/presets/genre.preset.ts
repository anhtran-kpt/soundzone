import { Prisma } from "@/app/generated/prisma";
import { trackSelect } from "./track.preset";

export const genreSelect = {
  id: true,
  name: true,
  slug: true,
} satisfies Prisma.GenreSelect;

export const fullGenreSelect = {
  ...genreSelect,
  tracks: {
    select: {
      track: {
        select: trackSelect,
      },
    },
  },
} satisfies Prisma.GenreSelect;
