import { api } from "@/lib/api/api-client";
import { PlaylistDetail, PlaylistList } from "./playlist.type";
import { PaginationParams } from "../shared";

export const PlaylistService = {
  fetchList: async (
    signal: AbortSignal,
    params?: Partial<PaginationParams>
  ) => {
    return await api.getWithMeta<PlaylistList>("/playlists", signal, params);
  },

  fetchById: async (playlistId: string, signal: AbortSignal) => {
    return await api.get<PlaylistDetail>(`/playlists/${playlistId}`, signal);
  },
};
