import { getAlbumDetail, getAlbumList } from "./album-actions";

export type AlbumDetail = Awaited<ReturnType<typeof getAlbumDetail>>;
export type AlbumList = Awaited<ReturnType<typeof getAlbumList>>;
