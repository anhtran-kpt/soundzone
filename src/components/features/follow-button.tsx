"use client";

import { Button } from "@/components/ui/button";
import { endpoints } from "@/lib/api/endpoints";
import fetcher from "@/lib/api/fetcher";
import { poster } from "@/lib/api/poster";
import { artistKeys, userKeys } from "@/lib/tanstack-query/query-keys";
import { FollowArtistReturn, IsFollowing } from "@/types/artist";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { useSession } from "next-auth/react";

interface FollowButtonProps {
  artistSlug: string;
}

type ToggleFollowParams = {
  artistSlug: string;
  userSlug: string;
  isFollowing: boolean;
};

export const FollowButton = ({ artistSlug }: FollowButtonProps) => {
  const { data: session, status } = useSession();

  const { data: isFollowing, isLoading } = useQuery({
    queryKey: artistKeys.isFollowing(artistSlug),
    queryFn: fetcher<IsFollowing>(endpoints.artist.isFollowing(artistSlug)),
  });

  const queryClient = useQueryClient();

  const toggleFollowMutation = useMutation({
    mutationFn: async ({ artistSlug, isFollowing }: ToggleFollowParams) => {
      if (isFollowing) {
        return poster<string, FollowArtistReturn>(
          endpoints.artist.unfollow(artistSlug)
        );
      } else {
        return poster<string, FollowArtistReturn>(
          endpoints.artist.follow(artistSlug)
        );
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
        queryKey: userKeys.followingArtists(userSlug),
      });
    },
  });

  const handleToggleFollow = () => {
    if (!session?.user.slug || isFollowing === undefined) return;

    toggleFollowMutation.mutate({
      artistSlug,
      userSlug: session.user.slug,
      isFollowing,
    });
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="rounded-full"
      onClick={handleToggleFollow}
      disabled={
        status === "loading" || isLoading || toggleFollowMutation.isPending
      }
    >
      {status === "loading" || isLoading ? (
        <Loader2Icon className="animate-spin" />
      ) : isFollowing ? (
        "Following"
      ) : (
        "Follow"
      )}
    </Button>
  );
};
