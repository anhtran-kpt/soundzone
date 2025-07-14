"use client";

import Dot from "@/components/shared/ui/dot";
import { Button } from "@/components/ui/button";
import { AlbumInfo } from "@/features/album/album-types";
import { formatDate } from "date-fns";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { PlayIcon } from "lucide-react";
import { RELEASE_TYPES } from "@/lib/constants";
import { Skeleton } from "@/components/ui/skeleton";

export const AlbumCard = ({ album }: { album: AlbumInfo }) => {
  return (
    <li className="flex flex-col group gap-2 overflow-hidden">
      <div className="relative rounded-lg overflow-hidden size-full aspect-square">
        <CldImage
          src={album.coverPublicId}
          alt={album.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300 group-hover:brightness-75"
          sizes="20vw"
        />
        <Button
          type="button"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full invisible group-hover:visible bg-primary text-white flex items-center justify-center"
        >
          <PlayIcon className="size-6 fill-current" />
        </Button>
      </div>
      <div className="flex flex-col items-start w-full min-w-0">
        <Button
          asChild
          type="button"
          variant="link"
          className="h-6 p-0 w-full text-left"
        >
          <Link
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              display: "block",
              width: "100%",
            }}
            href={`/artists/${album.artist.slug}/albums/${album.slug}`}
            className="text-[0.925rem] font-medium truncate text-left"
          >
            {album.title}
          </Link>
        </Button>
        <div className="flex text-[13px] text-muted-foreground items-center gap-1.5 mt-0.5">
          <span>{formatDate(album.releaseDate, "yyyy")}</span>
          <Dot />
          <span>{RELEASE_TYPES[album.releaseType]}</span>
        </div>
      </div>
    </li>
  );
};

export const AlbumCardSkeleton = () => {
  return (
    <li className="flex flex-col group gap-2 overflow-hidden">
      <div className="relative rounded-lg overflow-hidden size-full aspect-square">
        <Skeleton className="w-full h-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full invisible">
          <Skeleton className="size-12 rounded-full" />
        </div>
      </div>

      <div className="flex flex-col items-start w-full min-w-0">
        <div className="h-6 w-full">
          <Skeleton className="h-4 w-3/4" />
        </div>

        <div className="flex text-[13px] items-center gap-1.5 mt-0.5">
          <Skeleton className="h-3 w-12" />
          <span className="text-muted-foreground">•</span>
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </li>
  );
};
