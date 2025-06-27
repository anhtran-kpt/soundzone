import apiClient from "@/lib/api-client";
import { CreateTrackInput } from "@/schemas";
import { CreateTrackReturn, GetTracksReturn } from "@/types";

const endpoints = {
  list: "/tracks",
  detail: (trackSlug: string) => `/tracks/${trackSlug}`,
  create: "/tracks",
} as const;

export const getTracks = async (signal: AbortSignal) => {
  return await apiClient.get<GetTracksReturn>(endpoints.list, { signal });
};

export const getTrackBySlug = async (
  trackSlug: string,
  signal: AbortSignal
) => {
  return await apiClient.get<GetTracksReturn>(endpoints.detail(trackSlug), {
    signal,
  });
};

export const createTrack = async (data: CreateTrackInput) => {
  return await apiClient.post<CreateTrackReturn>(endpoints.create, {
    data,
  });
};
