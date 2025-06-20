import { CldImage } from "next-cloudinary";
import { cn } from "@/lib/utils";

interface ArtistImageProps {
  imagePublicId: string;
  artistName: string;
  className?: string;
}

export default function ArtistImage({
  imagePublicId,
  artistName,
  className,
}: ArtistImageProps) {
  return (
    <div
      className={cn("relative size-16 aspect-square rounded-full", className)}
    >
      <CldImage
        src={imagePublicId}
        alt={artistName}
        fill
        sizes="64px"
        className="rounded-full object-cover"
      />
    </div>
  );
}
