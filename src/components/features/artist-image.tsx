"use client";

import { useState } from "react";
import { CldImage } from "next-cloudinary";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ArtistImageProps {
  publicId: string;
  alt: string;
  size: "sm" | "lg" | "xl";
}

export const ArtistImage = ({ publicId, alt, size }: ArtistImageProps) => {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

  const sizeClass = {
    sm: "size-12",
    lg: "size-32",
    xl: "size-64",
  }[size];

  const fallbackText = alt?.charAt(0).toUpperCase() || "?";

  return (
    <div
      className={cn(
        "relative shrink-0 rounded-full aspect-square overflow-hidden",
        sizeClass
      )}
    >
      {status === "loading" && (
        <Skeleton className={cn("rounded-full aspect-square", sizeClass)} />
      )}

      {status === "error" ? (
        <Avatar className={sizeClass}>
          <AvatarFallback className="rounded-full">
            {fallbackText}
          </AvatarFallback>
        </Avatar>
      ) : (
        <CldImage
          src={publicId}
          alt={alt}
          fill
          className={cn(
            "object-cover rounded-full aspect-square transition-opacity duration-500 ease-in-out",
            sizeClass,
            {
              "opacity-0": status === "loading",
              "opacity-100": status === "loaded",
            }
          )}
          sizes={size === "sm" ? "48px" : size === "lg" ? "128px" : "256px"}
          priority
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
    </div>
  );
};
