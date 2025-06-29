"use client";

import { Artist } from "@/types";
import { CldImage } from "next-cloudinary";
import { useMemo, useState, useEffect } from "react";
import { FastAverageColor } from "fast-average-color";
import { BadgeCheckIcon } from "lucide-react";

interface BannerProps {
  artist: Artist;
}

export function ArtistBanner({ artist }: BannerProps) {
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
        <div className="relative size-48 rounded-full">
          <CldImage
            src={artist.imagePublicId}
            alt={artist.name}
            fill
            sizes="192px"
            className="object-cover rounded-full border-2"
            onLoad={(e) => setImageUrl((e.target as HTMLImageElement).src)}
            priority
          />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <BadgeCheckIcon className="stroke-white fill-sky-500 size-8" />
            Verified Artist
          </div>
          <h2 className="font-bold text-5xl mt-1 mb-4">{artist.name}</h2>
          <p className="font-medium">871.312 monthly listeners</p>
        </div>
      </div>
    </div>
  );
}
