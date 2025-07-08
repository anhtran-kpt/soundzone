import {
  keepPreviousData,
  usePrefetchQuery,
  useQuery,
} from "@tanstack/react-query";
import { TrackService } from "./track.service";
import { PaginationParams } from "../shared";

const keys = {
  all: ["tracks"] as const,
  lists: () => [...keys.all, "list"] as const,
  list: (params?: Partial<PaginationParams>) =>
    [...keys.lists(), { params }] as const,
  details: () => [...keys.all, "detail"] as const,
  detail: (trackId: string) => [...keys.details(), trackId] as const,
} as const;

export const usePrefetchTracks = (params?: Partial<PaginationParams>) => {
  return usePrefetchQuery({
    queryKey: keys.list(params),
    queryFn: ({ signal }) => TrackService.fetchList(signal, params),
  });
};

export const useTracks = (params?: Partial<PaginationParams>) => {
  return useQuery({
    queryKey: keys.list(params),
    queryFn: ({ signal }) => TrackService.fetchList(signal, params),
    placeholderData: keepPreviousData,
  });
};

export const useTrackById = (trackId: string) => {
  return useQuery({
    queryKey: keys.detail(trackId),
    queryFn: ({ signal }) => TrackService.fetchById(trackId, signal),
    placeholderData: keepPreviousData,
    enabled: !!trackId,
  });
};
