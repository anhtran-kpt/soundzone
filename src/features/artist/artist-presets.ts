import { Prisma } from "@/app/generated/prisma";

export const baseArtistSelect = {
  id: true,
  name: true,
  slug: true,
} satisfies Prisma.ArtistSelect;
