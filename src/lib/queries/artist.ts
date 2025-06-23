import { apiClient } from "@/lib/api/client/api-client";
import { FullArtist } from "../types";
import { ARTIST_ENDPOINTS } from "../endpoints";

export const artistKeys = {
  all: ["artists"] as const,
  list: (params?: { limit?: number; page?: number }) =>
    [...artistKeys.all, params] as const,
  detail: (slug: string) => [...artistKeys.all, slug] as const,
};

export async function fetchArtists(
  params?: { limit?: number; page?: number },
  signal?: AbortSignal
) {
  return await apiClient.get<FullArtist[]>(ARTIST_ENDPOINTS.list(params), {
    params,
    signal,
  });
}

export async function fetchArtistBySlug(slug: string, signal?: AbortSignal) {
  return await apiClient.get<FullArtist>(ARTIST_ENDPOINTS.detail(slug), {
    signal,
  });
}
