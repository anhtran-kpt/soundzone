"use client";

import { Album } from "@/types";
import { CldImage } from "next-cloudinary";
import Dot from "./dot";
import { getYear } from "date-fns";
import pretterMs from "pretty-ms";
import { useMemo, useState, useEffect } from "react";
import { FastAverageColor } from "fast-average-color";
import Link from "next/link";
import { Button } from "@/components/ui";

interface BannerProps {
  album: Album;
}

export function AlbumBanner({ album }: BannerProps) {
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

  return (
    <div className="relative h-80">
      <div
        className="absolute inset-0 -mx-12 -mt-24 bg-gradient-to-b from-[var(--tw-gradient-from)] to-[var(--tw-gradient-to)]"
        style={
          bannerColor
            ? {
                "--tw-gradient-from": `${bannerColor}00`,
                "--tw-gradient-to": bannerColor,
              }
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
            <Button type="button" variant="link" asChild>
              <Link
                className="font-medium"
                href={`/artists/${album.artist.slug}`}
              >
                {album.artist.name}
              </Link>
            </Button>
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
  );
}
