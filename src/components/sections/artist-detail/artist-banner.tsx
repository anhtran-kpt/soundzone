"use client";

import { useBanner } from "@/entities/artist/queries";
import ErrorMessage from "../../features/error-message";
import { BadgeCheckIcon } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { Skeleton } from "../../ui/skeleton";
import { useImageGradient } from "@/hooks/use-image-gradient";
import { useState } from "react";

export const ArtistBanner = ({ artistSlug }: { artistSlug: string }) => {
  const { data: artist, status, error } = useBanner(artistSlug);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { gradient } = useImageGradient(imageUrl);

  if (status === "pending") {
    return <ArtistBannerSkeleton />;
  }

  if (status === "error") {
    return <ErrorMessage error={error} />;
  }

  return (
    <section>
      <div className="relative h-96 -mx-12 -mt-21">
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
        <div className="absolute left-12 bottom-6 flex items-end gap-5">
          <div className="relative rounded-full overflow-hidden size-48 border-2 border-foreground">
            <CldImage
              src={artist.imagePublicId}
              alt={artist.name}
              fill
              sizes="192px"
              className="object-cover rounded-full"
              onLoad={(e) => setImageUrl((e.target as HTMLImageElement).src)}
              priority
            />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <div className="flex gap-2 items-center">
              <BadgeCheckIcon className="stroke-white fill-sky-500 size-8" />
              Verified Artist
            </div>
            <p className="font-extrabold text-6xl mt-1 mb-4">{artist.name}</p>
            <p className="font-medium">{artist.followers} followers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ArtistBannerSkeleton = () => {
  return (
    <section>
      <div className="relative h-96 -mx-12 -mt-21">
        <Skeleton className="w-full h-full rounded-none" />
        <div className="flex flex-col gap-4 absolute left-12 bottom-6 text-white">
          <Skeleton className="w-20 h-4" />
          <Skeleton className="w-32 h-12" />
          <Skeleton className="w-16 h-4" />
        </div>
      </div>
    </section>
  );
};
