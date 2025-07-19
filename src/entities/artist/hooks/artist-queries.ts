import { artistEndpoints } from "../artist-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../artist-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistInfo, TArtistFollowers } from "../artist-types";

export const useArtistFollowers = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.followers(artistSlug),
    queryFn: fetcher<TArtistFollowers>(artistEndpoints.followers(artistSlug)),
  });
};

export const useArtistInfo = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.info(artistSlug),
    queryFn: fetcher<TArtistInfo>(artistEndpoints.info(artistSlug)),
  });
};

export const useArtistPopularTracks = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.popularTracks(artistSlug),
    queryFn: fetcher < TArtist,
  });
};
