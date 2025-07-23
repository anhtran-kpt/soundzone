"use client";

import {
  DownloadIcon,
  EllipsisIcon,
  PlusCircle,
  ShuffleIcon,
} from "lucide-react";
import { IconButton } from "../../features/icon-button";
import { useActions } from "@/entities/album/queries";
import ErrorMessage from "../../features/error-message";
import { Skeleton } from "../../ui/skeleton";
import PlayButton from "@/components/features/play-button";

export const AlbumActions = ({
  albumSlug,
  artistSlug,
}: {
  albumSlug: string;
  artistSlug: string;
}) => {
  const { data: album, status, error } = useActions({ albumSlug, artistSlug });

  if (status === "pending") {
    return <AlbumActionsSkeleton />;
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
            Enable shuffle for <strong>{album.title}</strong>
          </>
        }
      />
      <IconButton
        icon={PlusCircle}
        size="xl"
        tooltipContent={
          <>
            Save to <strong>Your Library</strong>
          </>
        }
      />
      <IconButton
        icon={DownloadIcon}
        size="xl"
        tooltipContent={
          <>
            Download <strong>{album.title}</strong>
          </>
        }
      />
      <IconButton
        icon={EllipsisIcon}
        size="xl"
        tooltipContent={
          <>
            More options for <strong>{album.title}</strong>
          </>
        }
      />
    </section>
  );
};

export const AlbumActionsSkeleton = () => {
  return (
    <section className="flex items-center gap-5">
      <Skeleton className="rounded-full size-12" />
      <Skeleton className="rounded-full size-9" />
      <Skeleton className="rounded-full size-9" />
      <Skeleton className="rounded-full size-9" />
      <Skeleton className="rounded-full size-9" />
    </section>
  );
};
