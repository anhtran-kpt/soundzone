"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/lib/api/api-client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

interface FollowButtonProps {
  artistSlug: string;
}

export const FollowButton = ({ artistSlug }: FollowButtonProps) => {
  const queryKey = ["artists", artistSlug, "followers"];
  const queryClient = useQueryClient();
  const session = useSession();

  const { data: isFollowing } = useQuery({
    queryKey,
    queryFn: ({ signal }) =>
      api.get<boolean>(`/artists/${artistSlug}/followers`, signal),
  });

  const mutation = useMutation({
    mutationFn: async () => {
      if (isFollowing) {
        await api.delete(`/artists/${artistSlug}/followers`);
      } else {
        await api.post(`/artists/${artistSlug}/followers`);
      }
    },
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey,
      });

      const previous = queryClient.getQueryData<boolean>(queryKey);

      queryClient.setQueryData(queryKey, !isFollowing);

      return { previous };
    },
    onError: (_err, _data, context) => {
      if (context?.previous !== undefined) {
        queryClient.setQueryData(queryKey, context.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: [
          "users",
          session.data?.user.slug,
          "detail",
          "followed-artists",
        ],
      });
    },
  });

  return (
    <Button
      type="button"
      variant="outline"
      className="rounded-full"
      onClick={() => mutation.mutate()}
    >
      {isFollowing ? "Following" : "Follow"}
    </Button>
  );
};
