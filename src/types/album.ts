import {
  createAlbumAction,
  getAlbumBySlugAction,
  getAlbumsAction,
} from "@/app/actions";

export type GetAlbumsReturn = Awaited<ReturnType<typeof getAlbumsAction>>;
export type GetAlbumBySlugReturn = Awaited<
  ReturnType<typeof getAlbumBySlugAction>
>;
export type CreateAlbumReturn = Awaited<ReturnType<typeof createAlbumAction>>;
