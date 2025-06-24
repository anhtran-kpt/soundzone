import { apiClient } from "@/lib/api-client";
import { FullAlbum } from "../types";

export const albumKeys = {
  detail: (slug: string) => ["albums", slug] as const,
  paginatedByArtist: (artistSlug: string, offset: number, limit: number) =>
    ["albums", "artist", artistSlug, "paginated", offset, limit] as const,
};

export async function fetchAlbumsByArtistSlug(
  artistSlug: string,
  params: { offset: number; limit: number },
  signal?: AbortSignal
) {
  return await apiClient.get<FullAlbum[]>(`/albums/artist/${artistSlug}`, {
    params,
    signal,
  });
}

export async function fetchAlbumBySlug(slug: string, signal?: AbortSignal) {
  return await apiClient.get<FullAlbum>(`/albums/${slug}`, {
    signal,
  });
}
