import { createAlbumAction, getAlbumBySlugAction } from "@/app/actions";

export type Album = Awaited<ReturnType<typeof getAlbumBySlugAction>>;
export type CreateAlbumReturn = Awaited<ReturnType<typeof createAlbumAction>>;
