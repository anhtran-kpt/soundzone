"use client";

import { CldImage } from "next-cloudinary";
import Dot from "@/components/ui/dot";
import { formatDate } from "date-fns";
import pretterMs from "pretty-ms";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useBanner } from "@/entities/album/queries";
import { TAlbumSlugs } from "@/entities/album/album-types";
import ErrorMessage from "../../features/error-message";
import { NavLink } from "../../features/nav-link";
import { useImageGradient } from "@/hooks/use-image-gradient";

export const AlbumBanner = ({ artistSlug, albumSlug }: TAlbumSlugs) => {
  const { data: album, status, error } = useBanner({ artistSlug, albumSlug });

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { gradient } = useImageGradient(imageUrl);

  if (status === "pending") {
    return <AlbumBannerSkeleton />;
  }

  if (status === "error") {
    return <ErrorMessage error={error} />;
  }

  return (
    <section>
      <div className="relative h-80">
        <div
          className="absolute inset-0 -mx-12 -mt-24 bg-gradient-to-t from-[var(--tw-gradient-from)] via-[var(--tw-gradient-via)] to-[var(--tw-gradient-to)]"
          style={
            {
              "--tw-gradient-from": gradient?.from,
              "--tw-gradient-via": gradient?.via,
              "--tw-gradient-to": gradient?.to,
            } as React.CSSProperties
          }
        />
        <div className="flex gap-5 absolute left-0 bottom-6 items-end">
          <div className="relative size-48 rounded-sm">
            <CldImage
              src={album.coverPublicId}
              alt={album.title}
              fill
              sizes="192px"
              className="object-cover rounded-sm"
              onLoad={(e) => setImageUrl((e.target as HTMLImageElement).src)}
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-medium">
              {album.releaseType === "SINGLE" ? "Single" : "Album"}
            </span>
            <span className="font-bold text-5xl mt-2 mb-4">{album.title}</span>
            <div className="inline-flex items-center gap-2">
              <div className="relative size-6 rounded-full">
                <CldImage
                  src={album.artist.imagePublicId}
                  alt={album.artist.name}
                  fill
                  sizes="24px"
                  className="object-cover rounded-full"
                />
              </div>
              <NavLink href={`/artists/${artistSlug}`} className="text-sm">
                {album.artist.name}
              </NavLink>
              <Dot />
              <span className="">{formatDate(album.releaseDate, "PP")}</span>
              <Dot />
              <span className="">
                {album.tracks.length > 1
                  ? `${album.tracks.length} songs`
                  : `1 song`}
                , {pretterMs(album.totalDuration * 1000)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AlbumBannerSkeleton = () => {
  return (
    <section>
      <div className="relative h-80">
        <Skeleton className="absolute inset-0 -mx-12 -mt-24 bg-gradient-to-b from-[var(--tw-gradient-from)] to-[var(--tw-gradient-to)]" />
        <div className="flex gap-5 absolute left-0 bottom-6 items-end">
          <div className="relative size-48 rounded-lg">
            <Skeleton className="size-48 rounded-lg" />
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="h-4 w-8" />
            <Skeleton className="w-32 h-12 mt-1 mb-4" />
            <div className="inline-flex items-center gap-2">
              <div className="relative size-8 rounded-full">
                <Skeleton className="size-8 rounded-full" />
              </div>
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
