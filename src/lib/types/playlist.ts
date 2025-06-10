import { Prisma } from "@/app/generated/prisma";
import { fullPlaylistInclude, minimalPlaylistSelect } from "../prisma/presets";

export type FullPlaylist = Prisma.PlaylistGetPayload<{
  include: typeof fullPlaylistInclude;
}>;

export type MinimalPlaylist = Prisma.PlaylistGetPayload<{
  select: typeof minimalPlaylistSelect;
}>;
