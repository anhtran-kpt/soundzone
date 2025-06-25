import { apiClient } from "@/lib/api-client";
import { FullTrack } from "@/lib/types";

export const trackKeys = {
  paginatedByArtist: (artistSlug: string, offset: number, limit: number) =>
    ["artist", artistSlug, "tracks", "paginated", offset, limit] as const,
};

export async function fetchTracksByArtistSlug(
  artistSlug: string,
  params: { offset: number; limit: number },
  signal: AbortSignal
) {
  return await apiClient.get<FullTrack[]>(`/tracks/artist/${artistSlug}`, {
    params,
    signal,
  });
}
