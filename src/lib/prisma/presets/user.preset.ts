import { Prisma } from "@/app/generated/prisma";

export const userSelect = {
  id: true,
  name: true,
  slug: true,
  email: true,
  password: true,
  imagePublicId: true,
  role: true,
} satisfies Prisma.UserSelect;
