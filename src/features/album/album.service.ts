import { api } from "@/lib/api-client";
import { AlbumDetail, AlbumFilters, AlbumList } from "./album.type";
import { CreateAlbumInput } from "./album.schema";

export const fetchAlbumsService = async (
  signal: AbortSignal,
  filters: AlbumFilters
) => {
  return await api.getWithMeta<AlbumList>("/albums", signal, filters);
};

export const fetchAlbumByIdService = async (
  albumId: string,
  signal: AbortSignal
) => {
  return await api.get<AlbumDetail>(`/albums/${albumId}`, signal);
};

export const createAlbumService = async (data: CreateAlbumInput) => {
  return await api.post<AlbumDetail>("/albums", data);
};
