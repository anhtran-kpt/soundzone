import { getAlbumInfo } from "./album-actions";

export type AlbumInfo = Awaited<ReturnType<typeof getAlbumInfo>>;
