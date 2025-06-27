import { createAlbumAction, getAlbumBySlugAction } from "@/app/actions";

export type Album = Exclude<
  Awaited<ReturnType<typeof getAlbumBySlugAction>>,
  null
>;
export type CreateAlbumReturn = Awaited<ReturnType<typeof createAlbumAction>>;
