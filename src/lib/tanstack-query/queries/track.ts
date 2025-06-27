import apiClient from "@/lib/api-client";
import { GetTracksReturn } from "@/types";

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
