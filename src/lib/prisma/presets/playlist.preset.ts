import { Prisma } from "@/app/generated/prisma";

export const playlistSelect = {
  id: true,
  title: true,
  slug: true,
  isPublic: true,
  description: true,
  coverPublicId: true,
} satisfies Prisma.PlaylistSelect;
