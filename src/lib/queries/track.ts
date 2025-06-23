import { apiClient } from "@/lib/api/client/api-client";
import { FullTrack } from "@/lib/types";
import { ARTIST_TRACKS_ENDPOINTS, TRACK_ENDPOINTS } from "../endpoints";

export const trackKeys = {
  list: (params?: { limit?: number; page?: number }) =>
    ["tracks", params] as const,
  detail: (slug: string) => ["track", slug] as const,
  listByArtistSlug: (artistSlug: string) =>
    ["tracks", "artist", artistSlug] as const,
};

export async function fetchTracks(
  params?: { limit?: number; page?: number },
  signal?: AbortSignal
) {
  return await apiClient.get<FullTrack[]>(TRACK_ENDPOINTS.list(params), {
    params,
    signal,
  });
}

export async function fetchTracksByArtistSlug(
  artistSlug: string,
  params?: { limit?: number; page?: number },
  signal?: AbortSignal
) {
  return await apiClient.get<FullTrack[]>(
    ARTIST_TRACKS_ENDPOINTS.list(artistSlug, params),
    {
      params,
      signal,
    }
  );
}
