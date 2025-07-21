"use client";

import { CldImage } from "next-cloudinary";
import Dot from "@/components/ui/dot";
import { getYear } from "date-fns";
import pretterMs from "pretty-ms";
import { useMemo, useState, useEffect } from "react";
import { FastAverageColor } from "fast-average-color";
import { Skeleton } from "@/components/ui/skeleton";
import { useBanner } from "@/entities/album/queries";
import { TAlbumSlugs } from "@/entities/album/album-types";
import ErrorMessage from "../features/error-message";
import { NavLink } from "../features/nav-link";

export const AlbumBanner = ({ artistSlug, albumSlug }: TAlbumSlugs) => {
  const { data: album, status, error } = useBanner({ artistSlug, albumSlug });

  const fac = useMemo(() => new FastAverageColor(), []);

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [bannerColor, setBannerColor] = useState<string | null>(null);

  useEffect(() => {
    if (imageUrl) {
      fac
        .getColorAsync(imageUrl, {
          algorithm: "sqrt",
          ignoredColor: [
            [255, 255, 255, 255],
            [0, 0, 0, 255],
          ],
        })
        .then((color) => {
          setBannerColor(color.hex);
        });
    }
  }, [imageUrl, fac]);

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
          className="absolute inset-0 -mx-12 -mt-24 bg-gradient-to-b from-[var(--tw-gradient-from)] to-[var(--tw-gradient-to)]"
          style={
            bannerColor
              ? ({
                  "--tw-gradient-from": `${bannerColor}00`,
                  "--tw-gradient-to": bannerColor,
                } as React.CSSProperties)
              : undefined
          }
        />
        <div className="flex gap-5 absolute left-0 bottom-6 items-end">
          <div className="relative size-48 rounded-lg">
            <CldImage
              src={album.coverPublicId}
              alt={album.title}
              fill
              sizes="192px"
              className="object-cover rounded-lg"
              onLoad={(e) => setImageUrl((e.target as HTMLImageElement).src)}
              priority
            />
          </div>
          <div className="flex flex-col">
            <h3>{album.releaseType === "SINGLE" ? "Single" : "Album"}</h3>
            <h2 className="font-bold text-5xl mt-1 mb-4">{album.title}</h2>
            <div className="inline-flex items-center gap-2">
              <div className="relative size-8 rounded-full">
                <CldImage
                  src={album.artist.imagePublicId}
                  alt={album.artist.name}
                  fill
                  sizes="32px"
                  className="object-cover rounded-full"
                />
              </div>
              <NavLink href={`/artists/${artistSlug}`}>
                {album.artist.name}
              </NavLink>
              <Dot />
              <span>{getYear(album.releaseDate)}</span>
              <Dot />
              <span>
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
          <div className="flex flex-col">
            <Skeleton className="h-4 w-8" />
            <Skeleton className="font-bold text-5xl mt-1 mb-4" />
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
