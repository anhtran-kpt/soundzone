import { createAlbumAction, getAlbumAction } from "@/app/actions";

export type Album = Exclude<Awaited<ReturnType<typeof getAlbumAction>>, null>;
export type CreateAlbumReturn = Awaited<ReturnType<typeof createAlbumAction>>;
