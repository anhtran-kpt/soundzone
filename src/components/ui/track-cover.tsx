"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { CldImage } from "next-cloudinary";

interface TrackCoverProps {
  size?: "md" | "lg";
  alt: string;
  publicId: string;
}

export const TrackCover = ({ size = "md", alt, publicId }: TrackCoverProps) => {
  return (
    <div
      className={`relative ${
        size === "md" ? "size-12" : "size-16"
      } shrink-0 overflow-hidden aspect-square`}
    >
      <CldImage
        src={publicId}
        alt={alt}
        fill
        className="rounded-md object-cover"
        sizes={size === "md" ? "48px" : "64px"}
        priority
      />
    </div>
  );
};

export const TrackCoverSkeleton = ({ size }: Pick<TrackCoverProps, "size">) => {
  return (
    <div
      className={`relative ${
        size === "md" ? "size-12" : "size-16"
      } shrink-0 overflow-hidden aspect-square`}
    >
      <Skeleton
        className={`${
          size === "md" ? "size-12" : "size-16"
        } aspect-square rounded-md`}
      />
    </div>
  );
};
