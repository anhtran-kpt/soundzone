import { api } from "@/lib/api-client";
import { Track } from "@/types";

const endpoints = {
  list: "/tracks",
  detail: (trackId: string) => `/tracks/${trackId}`,
  create: "/tracks",
} as const;

export const getTracks = async (signal: AbortSignal) => {
  return await api.get<Track[]>(endpoints.list, signal);
};

export const getTrack = async (trackId: string, signal: AbortSignal) => {
  return await api.get<Track>(endpoints.detail(trackId), signal);
};
