import { api } from "@/lib/api-client";
import { TrackDetail, TrackList } from "./track.type";
import { PaginationParams } from "../shared";

export const TrackService = {
  fetchList: async (
    signal: AbortSignal,
    params?: Partial<PaginationParams>
  ) => {
    return await api.getWithMeta<TrackList>("/tracks", signal, params);
  },

  fetchById: async (trackId: string, signal: AbortSignal) => {
    return await api.get<TrackDetail>(`/tracks/${trackId}`, signal);
  },
};
