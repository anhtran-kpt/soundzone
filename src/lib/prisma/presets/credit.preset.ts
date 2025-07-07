import { Prisma } from "@/app/generated/prisma";

export const creditSelect = {
  id: true,
  name: true,
} satisfies Prisma.CreditSelect;
