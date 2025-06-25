import { apiClient } from "@/lib/api-client";
import { FullArtist } from "@/lib/types/artist";

export const artistKeys = {
  detail: (slug: string) => ["artists", slug] as const,
};

export async function fetchArtistBySlug(
  artistSlug: string,
  signal: AbortSignal
) {
  return await apiClient.get<FullArtist>(`/artists/${artistSlug}`, {
    signal,
  });
}
