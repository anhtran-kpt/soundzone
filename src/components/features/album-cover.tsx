"use client";

import { CldImage } from "next-cloudinary";
import { cn } from "@/lib/utils";

interface AlbumCoverProps {
  alt: string;
  publicId: string;
}

export const AlbumCover = ({ alt, publicId }: AlbumCoverProps) => {
  return (
    <div className={cn("rounded-md relative overflow-hidden size-48")}>
      <CldImage
        alt={alt}
        src={publicId}
        priority
        className="object-cover rounded-md"
        fill
        sizes="192px"
      />
    </div>
  );
};
