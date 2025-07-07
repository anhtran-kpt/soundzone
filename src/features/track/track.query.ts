import {
  keepPreviousData,
  usePrefetchQuery,
  useQuery,
} from "@tanstack/react-query";
import { trackService } from "./track.service";
import { TrackFilters } from "./track.type";

const keys = {
  list: ["tracks"] as const,
  detail: (trackId: string) => [...keys.list, trackId] as const,
} as const;

export const usePrefetchTracks = (filters: TrackFilters) => {
  return usePrefetchQuery({
    queryKey: keys.list,
    queryFn: ({ signal }) => trackService.fetchTracks(signal, filters),
  });
};

export const useFetchTracks = (filters: TrackFilters) => {
  return useQuery({
    queryKey: keys.list,
    queryFn: ({ signal }) => trackService.fetchTracks(signal, filters),
    placeholderData: keepPreviousData,
  });
};

export const useFetchTrackById = (trackId: string) => {
  return useQuery({
    queryKey: keys.detail(trackId),
    queryFn: ({ signal }) => trackService.fetchTrackById(trackId, signal),
    placeholderData: keepPreviousData,
    enabled: !!trackId,
  });
};

export const useFetchTracksByArtistId = (
  artistId: string,
  filters: TrackFilters
) => {
  return useQuery({
    queryKey: keys.list,
    queryFn: ({ signal }) =>
      trackService.fetchTracksByArtistId(artistId, signal, filters),
    placeholderData: keepPreviousData,
  });
};
