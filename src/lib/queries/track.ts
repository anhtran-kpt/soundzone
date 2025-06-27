import { api } from "@/lib/api-client";
import { GetTracksReturn, GetTrackBySlugReturn } from "@/types";

const endpoints = {
  list: "/tracks",
  detail: (trackSlug: string) => `/tracks/${trackSlug}`,
  create: "/tracks",
} as const;

export const getTracks = async (signal: AbortSignal) => {
  return await api.get<GetTracksReturn>(endpoints.list, signal);
};

export const getTrackBySlug = async (
  trackSlug: string,
  signal: AbortSignal
) => {
  return await api.get<GetTrackBySlugReturn>(
    endpoints.detail(trackSlug),
    signal
  );
};
