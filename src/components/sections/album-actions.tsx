"use client";

import {
  DownloadIcon,
  EllipsisIcon,
  PlayIcon,
  PlusCircle,
  ShuffleIcon,
} from "lucide-react";
import { IconButton } from "../features/icon-button";

export const AlbumActions = () => {
  return (
    <section className="flex items-center gap-5">
      <IconButton
        icon={PlayIcon}
        size="xl"
        className="bg-primary p-3.5"
        iconClassName="stroke-0 fill-foreground"
      />
      <IconButton icon={ShuffleIcon} size="xl" />
      <IconButton icon={PlusCircle} size="xl" />
      <IconButton icon={DownloadIcon} size="xl" />
      <IconButton icon={EllipsisIcon} size="xl" />
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
