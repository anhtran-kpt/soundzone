"use client";

import { CldImage } from "next-cloudinary";
import { cn } from "@/lib/utils";

interface ArtistImageProps {
  imagePublicId: string;
  name: string;
  size: "small" | "big";
}

export const ArtistImage = ({
  imagePublicId,
  name,
  size,
}: ArtistImageProps) => {
  return (
    <div
      className={cn(
        "relative shrink-0 rounded-full overflow-hidden",
        size === "small" ? "size-10" : "size-64"
      )}
    >
      <CldImage
        src={imagePublicId}
        alt={name}
        fill
        className={cn(
          "rounded-full object-cover",
          size === "small" ? "size-10" : "size-64"
        )}
        sizes={size === "small" ? "40px" : "256px"}
        priority
      />
    </div>
  );
};
