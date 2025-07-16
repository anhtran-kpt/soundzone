"use client";

import { CldImage } from "next-cloudinary";
import { BadgeCheckIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ArtistDetailPage } from "@/lib/types";

type BannerSectionProps = {
  banner: ArtistDetailPage["banner"];
};

export const BannerSection = ({
  banner: { name, bannerPublicId, followers },
}: BannerSectionProps) => {
  return (
    <section>
      <div className="relative h-96 -mx-12 -mt-21">
        <CldImage
          alt={name}
          src={bannerPublicId}
          fill
          sizes="100vw"
          className="object-center object-cover brightness-80"
          priority
        />

        <div className="flex flex-col gap-2 absolute left-12 bottom-6 text-white">
          <div className="flex gap-2 items-center">
            <BadgeCheckIcon className="stroke-white fill-sky-500 size-8" />
            Verified Artist
          </div>
          <p className="font-extrabold text-6xl mt-1 mb-4">{name}</p>
          <p className="font-medium">{followers} followers</p>
        </div>
      </div>
    </section>
  );
};

export const BannerSectionSkeleton = () => {
  return (
    <section>
      <div className="relative h-96 -mx-12 -mt-21">
        <Skeleton className="w-full h-full" />
        <div className="flex flex-col gap-4 absolute left-12 bottom-6 text-white">
          <Skeleton className="w-20 h-4" />
          <Skeleton className="w-32 h-12" />
          <Skeleton className="w-16 h-4" />
        </div>
      </div>
    </section>
  );
};
