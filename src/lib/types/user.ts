import { Prisma } from "@/app/generated/prisma";
import { fullUserInclude, minimalUserSelect } from "../prisma/presets";

export type FullUser = Prisma.UserGetPayload<{
  include: typeof fullUserInclude;
}>;

export type MinimalUser = Prisma.UserGetPayload<{
  select: typeof minimalUserSelect;
}>;
