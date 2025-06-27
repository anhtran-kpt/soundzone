import { api } from "@/lib/api-client";
import { Track } from "@/types";

const endpoints = {
  list: "/tracks",
  detail: (trackSlug: string) => `/tracks/${trackSlug}`,
  create: "/tracks",
} as const;

export const getTracks = async (signal: AbortSignal) => {
  return await api.get<Track[]>(endpoints.list, signal);
};

export const getTrackBySlug = async (
  trackSlug: string,
  signal: AbortSignal
) => {
  return await api.get<Track>(endpoints.detail(trackSlug), signal);
};
