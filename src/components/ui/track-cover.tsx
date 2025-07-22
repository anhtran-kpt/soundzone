"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { CldImage } from "next-cloudinary";

interface TrackCoverProps {
  type?: "list" | "player";
  alt: string;
  publicId: string;
}

export const TrackCover = ({
  type = "list",
  alt,
  publicId,
}: TrackCoverProps) => {
  return (
    <div
      className={`relative ${
        type === "list" ? "size-12" : "size-16"
      } shrink-0 overflow-hidden aspect-square`}
    >
      <CldImage
        src={publicId}
        alt={alt}
        fill
        className="rounded-sm object-cover"
        sizes={type === "list" ? "48px" : "64px"}
        priority
      />
    </div>
  );
};

export const TrackCoverSkeleton = ({ type }: Pick<TrackCoverProps, "type">) => {
  return (
    <div
      className={`relative ${
        type === "list" ? "size-12" : "size-16"
      } shrink-0 overflow-hidden aspect-square`}
    >
      <Skeleton
        className={`${
          type === "list" ? "size-12" : "size-16"
        } aspect-square rounded-sm`}
      />
    </div>
  );
};
