import { Prisma } from "@/app/generated/prisma";

export const userInfoSelect = {
  id: true,
  name: true,
  slug: true,
  email: true,
  imagePublicId: true,
  role: true,
} satisfies Prisma.UserSelectScalar;
