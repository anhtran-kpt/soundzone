import { api } from "@/lib/api/api-client";
import { AlbumDetail, AlbumList } from "./album-types";
import { PaginationParams } from "../shared/shared.type";

export const fetchAlbumList = async (
  signal: AbortSignal,
  params?: Partial<PaginationParams>
) => {
  return await api.getWithMeta<AlbumList>("/albums", signal, params);
};

export const fetchAlbumDetail = async (
  albumSlug: string,
  signal: AbortSignal
) => {
  return await api.get<AlbumDetail>(`/albums/${albumSlug}`, signal);
};

// export const create = async (data: CreateAlbumInput) => {
//   return await api.post<AlbumDetail>("/albums", data);
// };
