import { api } from "@/lib/api/api-client";
import { GenreDetail, GenreList } from "./genre.type";
import { PaginationParams } from "../shared";

export const GenreService = {
  fetchList: async (
    signal: AbortSignal,
    params?: Partial<PaginationParams>
  ) => {
    return await api.getWithMeta<GenreList>("/genres", signal, params);
  },

  fetchById: async (genreId: string, signal: AbortSignal) => {
    return await api.get<GenreDetail>(`/genres/${genreId}`, signal);
  },
};
