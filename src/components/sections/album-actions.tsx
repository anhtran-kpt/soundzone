"use client";

import {
  DownloadIcon,
  EllipsisIcon,
  PlayIcon,
  PlusCircle,
  ShuffleIcon,
} from "lucide-react";
import { IconButton } from "../features/icon-button";
import { useActions } from "@/entities/album/queries";
import ErrorMessage from "../features/error-message";

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
      <IconButton
        icon={PlayIcon}
        size="xl"
        className="bg-primary p-3.5"
        iconClassName="stroke-0 fill-foreground"
        tooltipContent={
          <>
            Play <strong>{album.title}</strong>
          </>
        }
      />
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
      <IconButton
        icon={PlayIcon}
        size="xl"
        className="bg-primary p-4"
        iconClassName="stroke-0 fill-foreground"
      />
      <IconButton icon={ShuffleIcon} size="xl" />
      <IconButton icon={PlusCircle} size="xl" />
      <IconButton icon={DownloadIcon} size="xl" />
      <IconButton icon={EllipsisIcon} size="xl" />
    </section>
  );
};
