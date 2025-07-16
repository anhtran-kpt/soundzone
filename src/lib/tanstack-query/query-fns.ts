import { api } from "../api/api-client";
import { ArtistDetailPage } from "../types";

export const fetchArtistDetailPage = async (
  artistSlug: string,
  signal: AbortSignal
) => {
  return await api.get<ArtistDetailPage>(
    `/pages/artists/${artistSlug}`,
    signal
  );
};
