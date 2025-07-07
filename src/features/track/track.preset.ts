import { Prisma } from "@/app/generated/prisma";

export const baseTrackSelect = {
  id: true,
  title: true,
  slug: true,
  lyrics: true,
  duration: true,
  isExplicit: true,
  audioPublicId: true,
  trackNumber: true,
  albumId: true,
} satisfies Prisma.TrackSelect;
