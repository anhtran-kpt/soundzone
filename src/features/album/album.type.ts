import { PaginationOptions } from "../shared";
import { fetchAlbumByIdAction, fetchAlbumsAction } from "./album.actions";

export type AlbumDetail = Awaited<ReturnType<typeof fetchAlbumByIdAction>>;
export type AlbumList = Awaited<ReturnType<typeof fetchAlbumsAction>>;

export type AlbumFilters = {
  artistId?: string;
} & PaginationOptions;
