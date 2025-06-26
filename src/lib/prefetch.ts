import { QueryClient } from "@tanstack/react-query";
import { queryKeys } from "./query-keys";
import { albumApi, artistApi, playlistApi, trackApi } from "./api-client";

export const prefetchArtistDetail = async (
  qc: QueryClient,
  artistSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: queryKeys.artistDetail(artistSlug),
    queryFn: ({ signal }) => artistApi.getArtistBySlug(artistSlug, signal),
  });
};

export const prefetchAlbumDetail = async (
  qc: QueryClient,
  albumSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: queryKeys.albumDetail(albumSlug),
    queryFn: ({ signal }) => albumApi.getAlbumBySlug(albumSlug, signal),
  });
};

export const prefetchTrackDetail = async (
  qc: QueryClient,
  trackSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: queryKeys.trackDetail(trackSlug),
    queryFn: ({ signal }) => trackApi.getTrackBySlug(trackSlug, signal),
  });
};

export const prefetchPlaylistDetail = async (
  qc: QueryClient,
  playlistSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: queryKeys.playlistDetail(playlistSlug),
    queryFn: ({ signal }) =>
      playlistApi.getPlaylistBySlug(playlistSlug, signal),
  });
};
