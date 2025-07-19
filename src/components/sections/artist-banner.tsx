"use client";

import { useArtistBanner } from "@/entities/artist/queries";
import ErrorMessage from "../features/error-message";
import { BadgeCheckIcon } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { Skeleton } from "../ui/skeleton";

export const ArtistBanner = ({ artistSlug }: { artistSlug: string }) => {
  const { data, isLoading, error } = useArtistBanner(artistSlug);

  if (isLoading) {
    return <ArtistBannerSkeleton />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <section>
      <div className="relative h-96 -mx-12 -mt-21">
        <CldImage
          alt={data?.name as string}
          src={data?.bannerPublicId as string}
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
          <p className="font-extrabold text-6xl mt-1 mb-4">{data?.name}</p>
          <p className="font-medium">{data?._count.followers} followers</p>
        </div>
      </div>
    </section>
  );
};

export const ArtistBannerSkeleton = () => {
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
