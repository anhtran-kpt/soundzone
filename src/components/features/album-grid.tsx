"use client";

import { Album } from "@/app/generated/prisma";
import { CldImage } from "next-cloudinary";
import { PlayIcon } from "lucide-react";
import { RELEASE_TYPES } from "@/lib/constants";
import { formatDate } from "date-fns";
import Dot from "../ui/dot";
import { NavLink } from "./nav-link";
import { IconButton } from "./icon-button";
import { Skeleton } from "../ui/skeleton";

interface AlbumGridProps {
  albums: Album[];
}

export const AlbumGrid = ({ albums }: AlbumGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {albums.map((album) => (
        <div
          key={album.slug}
          className="flex flex-col group gap-2 overflow-hidden"
        >
          <div className="relative rounded-md overflow-hidden size-full aspect-square">
            <CldImage
              src={album.coverPublicId}
              alt={album.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 group-hover:brightness-75"
              sizes="20vw"
            />
            <IconButton
              icon={PlayIcon}
              size="xl"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover:visible bg-primary p-3.5"
              iconClassName="stroke-0 fill-foreground"
            />
          </div>
          <div className="flex flex-col items-start w-full min-w-0">
            <NavLink
              href=""
              // href={`/artists/${album.artist.slug}/albums/${album.slug}`}
              className="text-[calc(15rem/16)] truncate w-full"
            >
              {album.title}
            </NavLink>
            <div className="flex text-[calc(13rem/16)] text-muted-foreground items-center gap-1.5 mt-0.5">
              <span>{formatDate(album.releaseDate, "yyyy")}</span>
              <Dot />
              <span>{RELEASE_TYPES[album.releaseType]}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const AlbumGridSkeleton = ({ count = 5 }: { count: number }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col group gap-2 overflow-hidden">
          <div className="relative rounded-md overflow-hidden size-full aspect-square">
            <Skeleton className="size-full" />
          </div>
          <div className="flex flex-col gap-2 items-start w-full min-w-0">
            <Skeleton className="w-2/3 h-5" />
            <Skeleton className="w-16 h-3" />
          </div>
        </div>
      ))}
    </div>
  );
};
