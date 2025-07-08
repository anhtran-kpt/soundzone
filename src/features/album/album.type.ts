import { AlbumActions } from "./album.actions";

export type AlbumDetail = Awaited<ReturnType<typeof AlbumActions.getById>>;
export type AlbumList = Awaited<ReturnType<typeof AlbumActions.getList>>;
