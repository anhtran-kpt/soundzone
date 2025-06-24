import { apiClient } from "@/lib/api-client";
import { FullAlbum } from "../types";
import {
  ALBUM_ARTIST_ENDPOINTS,
  ALBUM_ENDPOINTS,
  PaginationParams,
} from "../endpoints";

export const albumKeys = {
  all: ["albums"] as const,
  detail: (slug: string) => [...albumKeys.all, slug] as const,
  listByArtistSlug: (artistSlug: string) =>
    [...albumKeys.all, "artist", artistSlug] as const,
};

export async function fetchAlbumsByArtistSlug(
  artistSlug: string,
  params?: PaginationParams,
  signal?: AbortSignal
) {
  return await apiClient.get<FullAlbum[]>(
    ALBUM_ARTIST_ENDPOINTS.list(artistSlug, params),
    {
      params,
      signal,
    }
  );
}

export async function fetchAlbumBySlug(slug: string, signal?: AbortSignal) {
  return await apiClient.get<FullAlbum>(ALBUM_ENDPOINTS.detail(slug), {
    signal,
  });
}
