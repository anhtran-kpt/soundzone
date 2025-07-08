import { api } from "@/lib/api/api-client";
import { ArtistDetail, ArtistList, ArtistInfo } from "./artist.type";
import { PaginationParams } from "../shared";

export const ArtistService = {
  fetchList: async (
    signal: AbortSignal,
    params?: Partial<PaginationParams>
  ) => {
    return await api.getWithMeta<ArtistList>("/artists", signal, params);
  },

  fetchBySlug: async (artistId: string, signal: AbortSignal) => {
    return await api.get<ArtistDetail>(`/artists/${artistId}`, signal);
  },

  fetchInfo: async (artistSlug: string, signal: AbortSignal) => {
    return await api.get<ArtistInfo>(`/artists/${artistSlug}`, signal);
  },
};
