import { Prisma } from "@/app/generated/prisma";
import { fullArtistInclude, minimalArtistSelect } from "../prisma/presets";

export type FullArtist = Prisma.ArtistGetPayload<{
  include: typeof fullArtistInclude;
}>;

export type MinimalArtist = Prisma.ArtistGetPayload<{
  select: typeof minimalArtistSelect;
}>;
