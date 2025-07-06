import { api } from "@/lib/api-client";
import { Track } from "@/types";

const endpoints = {
  searchTracks: (query: string) =>
    `/search/tracks?q=${encodeURIComponent(query)}&limit=5`,
} as const;

export const searchTracks = async (query: string, signal: AbortSignal) => {
  return await api.get<Track[]>(endpoints.searchTracks(query), signal);
};
