"use client";

import { Button } from "@/components/ui/button";
import {
  useIsUserFollowing,
  useToggleFollow,
} from "@/features/artist/artist-queries";
import { Loader2Icon } from "lucide-react";
import { useSession } from "next-auth/react";

interface FollowButtonProps {
  artistSlug: string;
}

export const FollowButton = ({ artistSlug }: FollowButtonProps) => {
  const { data: session, status } = useSession();
  const { data: isFollowing, isLoading } = useIsUserFollowing(artistSlug);

  const mutation = useToggleFollow();

  const handleToggleFollow = () => {
    if (!session?.user.slug || isFollowing === undefined) return;

    mutation.mutate({
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
      disabled={status === "loading" || isLoading || mutation.isPending}
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
