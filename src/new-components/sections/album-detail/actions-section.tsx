"use client";

import { Skeleton } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { useAlbumInfo } from "@/features/album/album-queries";
import { useCurrentTrack, useIsPlaying } from "@/hooks";
import {
  DownloadIcon,
  EllipsisIcon,
  PauseIcon,
  PlayIcon,
  PlusCircleIcon,
  ShuffleIcon,
} from "lucide-react";

export const ActionsSection = ({ albumSlug }: { albumSlug: string }) => {
  const { data: album, isLoading } = useAlbumInfo(albumSlug);
  const currentTrack = useCurrentTrack();
  const isPlaying = useIsPlaying();

  if (isLoading || !album) {
    return <ActionsSectionSkeleton />;
  }

  return (
    <section className="flex gap-6 items-center relative">
      <Button type="button" size="icon" className="rounded-full size-12">
        {currentTrack?.album.albumId === album.id && isPlaying ? (
          <PauseIcon strokeWidth={0} fill="currentColor" className="size-6" />
        ) : (
          <PlayIcon strokeWidth={0} fill="currentColor" className="size-6" />
        )}
      </Button>
      <ShuffleIcon />
      <PlusCircleIcon />
      <DownloadIcon />
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
      <Skeleton className="rounded-full size-6" />
    </section>
  );
};
