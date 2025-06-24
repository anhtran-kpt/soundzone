import { apiClient } from "@/lib/api-client";
import { PaginationParams } from "@/lib/type";
import { FullArtist } from "@/lib/types/artist";

export const artistKeys = {
  all: ["artists"] as const,
  list: (params?: PaginationParams) => [...artistKeys.all, params] as const,
  detail: (slug: string) => [...artistKeys.all, slug] as const,
};

export async function fetchArtists(
  params?: PaginationParams,
  signal?: AbortSignal
) {
  return await apiClient.get<FullArtist[]>("/artists", {
    params,
    signal,
  });
}

export async function fetchArtistBySlug(
  artistSlug: string,
  signal?: AbortSignal
) {
  return await apiClient.get<FullArtist>(`/artists/${artistSlug}`, {
    signal,
  });
}
