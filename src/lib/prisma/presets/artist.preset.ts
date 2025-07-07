import { Prisma } from "@/app/generated/prisma";
import { trackSelect } from "./track.preset";

export const artistSelect = {
  id: true,
  name: true,
  slug: true,
  description: true,
  imagePublicId: true,
  bannerPublicId: true,
} satisfies Prisma.ArtistSelect;

export const fullArtistSelect = {
  ...artistSelect,
  tracks: {
    select: trackSelect,
  },
  albums: true,
  followers: true,
} satisfies Prisma.ArtistSelect;
