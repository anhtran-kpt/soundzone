import { QueryClient } from "@tanstack/react-query";
import { artistKeys } from "../query-keys";
import { artistApi } from "../api-client";

export const prefetchArtistDetail = async (
  qc: QueryClient,
  artistSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: artistKeys.detail(artistSlug),
    queryFn: ({ signal }) => artistApi.getArtistBySlug(artistSlug, signal),
  });
};

export const prefetchTracksByArtistSlug = async (
  qc: QueryClient,
  artistSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: artistKeys.tracks(artistSlug),
    queryFn: ({ signal }) =>
      artistApi.getTracksByArtistSlug(artistSlug, signal),
  });
};
