import { AlbumActions } from "./album.actions";

export type AlbumDetail = Awaited<ReturnType<typeof AlbumActions.getBySlug>>;
export type AlbumList = Awaited<ReturnType<typeof AlbumActions.getList>>;
