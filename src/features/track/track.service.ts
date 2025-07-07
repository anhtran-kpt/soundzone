import { api } from "@/lib/api-client";
import { TrackDetail, TrackFilters, TrackList } from "./track.type";

export const trackService = {
  async fetchTracks(signal: AbortSignal, filters: TrackFilters) {
    return await api.getWithMeta<TrackList>("/tracks", signal, filters);
  },

  async fetchTrackById(trackId: string, signal: AbortSignal) {
    return await api.get<TrackDetail>(`/tracks/${trackId}`, signal);
  },

  async fetchTracksByArtistId(
    artistId: string,
    signal: AbortSignal,
    filters: TrackFilters
  ) {
    return await api.getWithMeta<TrackDetail>(
      `/tracks/${artistId}`,
      signal,
      filters
    );
  },
};
