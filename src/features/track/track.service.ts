import { api } from "@/lib/api-client";
import { TrackDetail, TrackList } from "./track.type";

const endpoints = {
  list: "/tracks",
  detail: (trackId: string) => `/tracks/${trackId}`,
} as const;

export const fetchTracks = async (signal: AbortSignal) => {
  return await api.getWithMeta<TrackList>(endpoints.list, signal);
};

export const fetchTrackById = async (trackId: string, signal: AbortSignal) => {
  return await api.get<TrackDetail>(endpoints.detail(trackId), signal);
};
