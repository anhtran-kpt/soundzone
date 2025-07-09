import { api } from "@/lib/api/api-client";
import { AlbumDetail, AlbumList } from "./album-types";
import { CreateAlbumInput } from "./album-schemas";
import { PaginationParams } from "../shared";

export const AlbumService = {
  fetchList: async (
    signal: AbortSignal,
    params?: Partial<PaginationParams>
  ) => {
    return await api.getWithMeta<AlbumList>("/albums", signal, params);
  },

  fetchBySlug: async (albumId: string, signal: AbortSignal) => {
    return await api.get<AlbumDetail>(`/albums/${albumId}`, signal);
  },

  create: async (data: CreateAlbumInput) => {
    return await api.post<AlbumDetail>("/albums", data);
  },
};
