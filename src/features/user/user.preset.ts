import { Prisma } from "@/app/generated/prisma";

export const baseUserSelect = {
  id: true,
  title: true,
  slug: true,
  lyrics: true,
  duration: true,
  isExplicit: true,
  audioPublicId: true,
  userNumber: true,
  albumId: true,
} satisfies Prisma.UserSelect;
