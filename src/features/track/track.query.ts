import {
  keepPreviousData,
  usePrefetchQuery,
  useQuery,
} from "@tanstack/react-query";
import { fetchTrackById, fetchTracks } from "./track.service";

const keys = {
  list: ["tracks"] as const,
  detail: (trackId: string) => [...keys.list, trackId] as const,
} as const;

export const usePrefetchTracks = () => {
  return usePrefetchQuery({
    queryKey: keys.list,
    queryFn: ({ signal }) => fetchTracks(signal),
  });
};

export const useFetchTracks = () => {
  return useQuery({
    queryKey: keys.list,
    queryFn: ({ signal }) => fetchTracks(signal),
    placeholderData: keepPreviousData,
  });
};

export const useFetchById = (trackId: string) => {
  return useQuery({
    queryKey: keys.detail(trackId),
    queryFn: ({ signal }) => fetchTrackById(trackId, signal),
    placeholderData: keepPreviousData,
    enabled: !!trackId,
  });
};
