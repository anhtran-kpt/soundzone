import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchArtistInfo,
  fetchArtistPopularTracks,
  followArtist,
  isFollowing,
  unfollowArtist,
} from "./artist-services";
import { PaginationParams } from "../shared";
import { userKeys } from "../user";

const artistKeys = {
  all: ["artists"] as const,
  detail: (artistSlug: string) =>
    [...artistKeys.all, artistSlug, "detail"] as const,
  info: (artistSlug: string) =>
    [...artistKeys.all, artistSlug, "info"] as const,
  popularTracks: (artistSlug: string, params?: Partial<PaginationParams>) =>
    [...artistKeys.all, artistSlug, "popular-tracks", params] as const,
  followers: (artistSlug: string) =>
    [...artistKeys.all, artistSlug, "followers"] as const,
  isFollowing: (artistSlug: string) =>
    [...artistKeys.all, artistSlug, "followers", "me"] as const,
} as const;

export const useArtistInfo = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.info(artistSlug),
    queryFn: ({ signal }) => fetchArtistInfo(artistSlug, signal),
    enabled: !!artistSlug,
  });
};

export const useArtistPopularTracks = (
  artistSlug: string,
  params?: Partial<PaginationParams>
) => {
  return useQuery({
    queryKey: artistKeys.popularTracks(artistSlug, params),
    queryFn: ({ signal }) =>
      fetchArtistPopularTracks(artistSlug, signal, params),
    enabled: !!artistSlug,
  });
};

export const useIsUserFollowing = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.isFollowing(artistSlug),
    queryFn: ({ signal }) => isFollowing(artistSlug, signal),
  });
};

interface ToggleFollowParams {
  artistSlug: string;
  isFollowing: boolean;
  userSlug: string;
}

export const useToggleFollow = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ artistSlug, isFollowing }: ToggleFollowParams) => {
      if (isFollowing) {
        unfollowArtist(artistSlug);
      } else {
        followArtist(artistSlug);
      }
    },

    onMutate: async ({ artistSlug, isFollowing }: ToggleFollowParams) => {
      await queryClient.cancelQueries({
        queryKey: artistKeys.followers(artistSlug),
      });

      const previous = queryClient.getQueryData<boolean>(
        artistKeys.followers(artistSlug)
      );

      queryClient.setQueryData(artistKeys.followers(artistSlug), !isFollowing);

      return { previous, artistSlug };
    },

    onError: (_err, _data, context) => {
      if (context?.previous !== undefined && context?.artistSlug) {
        queryClient.setQueryData(
          artistKeys.followers(context.artistSlug),
          context.previous
        );
      }
    },

    onSettled: (_data, _err, { artistSlug, userSlug }: ToggleFollowParams) => {
      queryClient.invalidateQueries({
        queryKey: artistKeys.followers(artistSlug),
      });
      queryClient.invalidateQueries({
        queryKey: userKeys.followedArtists(userSlug),
      });
    },
  });
};
