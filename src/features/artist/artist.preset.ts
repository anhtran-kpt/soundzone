import { Prisma } from "@/app/generated/prisma";

export const baseArtistSelect = {
  id: true,
  name: true,
  slug: true,
  description: true,
  imagePublicId: true,
  bannerPublicId: true,
} satisfies Prisma.ArtistSelect;
