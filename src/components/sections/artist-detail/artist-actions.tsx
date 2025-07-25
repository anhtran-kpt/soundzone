"use client";

import { EllipsisIcon, ShuffleIcon } from "lucide-react";
import { IconButton } from "../../features/icon-button";
import { useActions } from "@/entities/artist/queries";
import ErrorMessage from "../../features/error-message";
import { FollowButton } from "../../features/follow-button";
import { Skeleton } from "../../ui/skeleton";
import PlayButton from "@/components/features/play-button";

export const ArtistActions = ({ artistSlug }: { artistSlug: string }) => {
  const { data: artist, status, error } = useActions(artistSlug);

  if (status === "pending") {
    return <ArtistActionsSkeleton />;
  }

  if (status === "error") {
    return <ErrorMessage error={error} />;
  }

  return (
    <section className="flex items-center gap-5">
      <PlayButton />
      <IconButton
        icon={ShuffleIcon}
        size="xl"
        tooltipContent={
          <>
            Enable shuffle for <strong>{artist.name}</strong>
          </>
        }
      />
      <FollowButton artistSlug={artistSlug} />
      <IconButton
        icon={EllipsisIcon}
        size="xl"
        tooltipContent={
          <>
            More options for <strong>{artist.name}</strong>
          </>
        }
      />
    </section>
  );
};

export const ArtistActionsSkeleton = () => {
  return (
    <section className="flex items-center gap-5">
      <Skeleton className="rounded-full size-12" />
      <Skeleton className="rounded-full size-9" />
      <Skeleton className="rounded-full h-9 w-24" />
      <Skeleton className="rounded-full size-9" />
    </section>
  );
};
