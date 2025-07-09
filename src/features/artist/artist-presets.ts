import { Prisma } from "@/app/generated/prisma";

export const artistInfoSelect = {
  id: true,
  name: true,
  slug: true,
  description: true,
  imagePublicId: true,
  bannerPublicId: true,
} satisfies Prisma.ArtistSelectScalar;
