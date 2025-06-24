import { apiClient } from "@/lib/api-client";
import { PaginationParams } from "@/lib/type";
import { FullTrack } from "@/lib/types";

export const trackKeys = {
  list: (params?: PaginationParams) => ["tracks", params] as const,
  detail: (slug: string) => ["track", slug] as const,
  listByArtistSlug: (artistSlug: string) =>
    ["tracks", "artist", artistSlug] as const,
  paginatedByArtist: (artistSlug: string, offset: number, limit: number) =>
    ["artist", artistSlug, "tracks", "paginated", offset, limit] as const,
};

export async function fetchTracks(
  params?: PaginationParams,
  signal?: AbortSignal
) {
  return await apiClient.get<FullTrack[]>("/tracks", {
    params,
    signal,
  });
}

export async function fetchTracksByArtistSlug(
  artistSlug: string,
  params?: PaginationParams,
  signal?: AbortSignal
) {
  return await apiClient.get<FullTrack[]>(`/artists/${artistSlug}/tracks`, {
    params,
    signal,
  });
}
