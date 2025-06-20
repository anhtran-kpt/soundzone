import { CldImage } from "next-cloudinary";
import { cn } from "@/lib/utils";

interface ArtistImageProps {
  imagePublicId: string;
  artistName: string;
  className?: string;
  sizes?: string;
}

export default function ArtistImage({
  imagePublicId,
  artistName,
  className,
  sizes = "64px",
}: ArtistImageProps) {
  return (
    <div
      className={cn("relative size-16 aspect-square rounded-full", className)}
    >
      <CldImage
        src={imagePublicId}
        alt={artistName}
        fill
        sizes={sizes}
        className="rounded-full object-cover"
      />
    </div>
  );
}
