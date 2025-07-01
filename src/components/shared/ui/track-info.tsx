import { Track } from "@/types";
import { CldImage } from "next-cloudinary";
import Explicit from "./explicit";
import Link from "next/link";

interface TrackInfoProps {
  track: Track;
}

export default function TrackInfo({ track }: TrackInfoProps) {
  return (
    <div className="flex items-center gap-3 w-xs">
      <div className="relative size-14 shrink-0">
        <CldImage
          src={track.album.coverPublicId}
          alt={track.title}
          fill
          className="rounded-md object-cover"
          sizes="56px"
          priority
        />
      </div>
      <div className="flex flex-col gap-1 w-full overflow-hidden">
        <Link
          href={`/artists/${track.album.artist.slug}/albums/${track.album.slug}`}
          className="text-[0.925rem] font-medium truncate block w-full"
        >
          {track.title}
        </Link>
        <div className="flex items-center gap-1.5 truncate text-xs">
          {track.isExplicit && <Explicit />}
          {track.artists.map((artist, index) => (
            <span key={artist.slug} className="text-muted-foreground truncate">
              <Link
                href={`/artists/${artist.slug}`}
                className="text-xs hover:text-primary hover:underline underline-offset-3 truncate"
              >
                {artist.name}
              </Link>
              {index < track.artists.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
