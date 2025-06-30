"use client";

import { Artist } from "@/types";
import { CldImage } from "next-cloudinary";
import { BadgeCheckIcon } from "lucide-react";

interface BannerProps {
  artist: Artist;
}

export function ArtistBanner({ artist }: BannerProps) {
  return (
    <div className="relative h-96 -mx-12 -mt-21">
      <CldImage
        alt={artist.name}
        src={artist.bannerPublicId}
        fill
        sizes="100vw"
        className="object-center object-cover"
        quality={100}
        priority
      />

      <div className="flex flex-col gap-2 absolute left-12 bottom-6 text-white">
        <div className="flex gap-2 items-center">
          <BadgeCheckIcon className="stroke-white fill-sky-500 size-8" />
          Verified Artist
        </div>
        <h2 className="font-bold text-6xl mt-1 mb-4">{artist.name}</h2>
        <p className="font-medium">871.312 monthly listeners</p>
      </div>
    </div>
  );
}
