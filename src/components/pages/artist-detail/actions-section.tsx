"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useCurrentTrack, useIsPlaying } from "@/hooks";
import { ArtistDetailPage } from "@/lib/types";
import { FollowButton } from "@/components/features/follow-button";
import { EllipsisIcon, PauseIcon, PlayIcon, ShuffleIcon } from "lucide-react";

type ActionsSectionProps = {
  actions: ArtistDetailPage["actions"];
};

export const ActionsSection = ({
  actions: { artistId, artistSlug },
}: ActionsSectionProps) => {
  const currentTrack = useCurrentTrack();
  const isPlaying = useIsPlaying();

  return (
    <section className="flex gap-6 items-center relative">
      <Button type="button" size="icon" className="rounded-full size-12">
        {currentTrack?.album.artistId === artistId && isPlaying ? (
          <PauseIcon strokeWidth={0} fill="currentColor" className="size-6" />
        ) : (
          <PlayIcon strokeWidth={0} fill="currentColor" className="size-6" />
        )}
      </Button>
      <ShuffleIcon />
      <FollowButton artistSlug={artistSlug} />
      <EllipsisIcon />
    </section>
  );
};

export const ActionsSectionSkeleton = () => {
  return (
    <section className="flex gap-6 items-center py-6 relative">
      <Skeleton className="rounded-full size-12" />
      <Skeleton className="rounded-full size-6" />
      <Skeleton className="rounded-full size-6" />
      <Skeleton className="rounded-full size-6" />
    </section>
  );
};
