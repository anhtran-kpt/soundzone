"use client";

import { useEffect, useMemo, useState } from "react";
import { FastAverageColor } from "fast-average-color";
import { FullArtist } from "@/lib/types";
import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/common";
import { PlusIcon, PlayIcon } from "lucide-react";

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
      <div
        className="absolute inset-0 -mx-12 -mt-24"
        style={{ backgroundColor: bannerColor || "transparent" }}
      ></div>
      <div className="absolute -bottom-12 flex items-center gap-6 px-6">
        <div className="relative size-56">
          {artist.imagePublicId && (
            <CldImage
              src={artist.imagePublicId}
              alt={artist.name}
              fill
              aspectRatio="1:1"
              className="rounded-full size-56 border-2 border-white"
              crop="fill"
              sizes="160px"
              onLoad={(e) => setImageUrl(e.target.src)}
              priority
            />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-bold">{artist.name}</h3>
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              {/* {artist.followerCount} followers */}
            </p>
            <Button variant="outline" size="sm" className="gap-2">
              <Icon icon={PlusIcon} className="size-4" />
              Follow
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              {/* {artist.monthlyListeners} monthly listeners */}
            </p>
            <Button variant="outline" size="sm">
              <Icon
                icon={PlayIcon}
                fill="black"
                strokeWidth={0}
                className="size-4"
              />
              <span className="text-sm">Play all</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
