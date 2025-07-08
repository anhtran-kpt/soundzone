import { api } from "@/lib/api/api-client";
import { ArtistInfo } from "./artist.type";

export const fetchArtistInfo = async (
  artistSlug: string,
  signal: AbortSignal
) => {
  return await api.get<ArtistInfo>(`/artists/${artistSlug}`, signal);
};
