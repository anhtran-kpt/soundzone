"use client";

import { useEffect, useMemo, useState } from "react";
import { FastAverageColor } from "fast-average-color";
import { FullArtist } from "@/lib/types";
import { CldImage } from "next-cloudinary";

export default function ArtistBanner({ artist }: { artist: FullArtist }) {
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
    <section className="flex items-center gap-4 relative h-72">
      {artist.bannerPublicId ? (
        <CldImage
          src={artist.bannerPublicId}
          alt={artist.name}
          className="object-center max-w-none -mx-12 -mt-24 w-[calc(100%+6rem)]! h-[calc(100%+6rem)]!"
          sizes="100vw"
          fill
          priority
        />
      ) : (
        <div
          className="absolute inset-0 -mx-12 -mt-24"
          style={{ backgroundColor: bannerColor || "transparent" }}
        ></div>
      )}
      <div className="absolute -bottom-2/5 left-1/12 flex flex-col items-center">
        <div className="relative size-64">
          {artist.imagePublicId && (
            <CldImage
              src={artist.imagePublicId}
              alt={artist.name}
              fill
              aspectRatio="1:1"
              className="rounded-full size-56 border-2 border-white"
              crop="fill"
              sizes="160px"
              onLoad={(e) => setImageUrl((e.target as HTMLImageElement).src)}
              priority
            />
          )}
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <h3 className="text-2xl font-bold">{artist.name}</h3>
        </div>
      </div>
    </section>
  );
}
