import { Prisma } from "@/app/generated/prisma";
import { fullAlbumInclude, minimalAlbumSelect } from "../prisma/presets";

export type FullAlbum = Prisma.AlbumGetPayload<{
  include: typeof fullAlbumInclude;
}>;

export type MinimalAlbum = Prisma.AlbumGetPayload<{
  select: typeof minimalAlbumSelect;
}>;
