import { getAlbumInfo, getAlbumList } from "./album-actions";

export type AlbumInfo = Awaited<ReturnType<typeof getAlbumInfo>>;
export type AlbumList = Awaited<ReturnType<typeof getAlbumList>>;
