import { Track } from "@/types";
import { CldImage } from "next-cloudinary";
import Explicit from "./explicit";
import CustomLink from "../common/custom-link";
import { formatArtistNames } from "@/lib/utils";

interface TrackInfoProps {
  track: Track;
}

export default function TrackInfo({ track }: TrackInfoProps) {
  return (
    <div className="flex items-center gap-3 grow min-w-0">
      <div className="relative size-14 shrink-0">
        <CldImage
          src={track.album.coverPublicId}
          alt={track.title}
          fill
          className="rounded-md object-cover"
          sizes="56px"
        />
      </div>
      <div className="flex flex-col gap-1">
        <CustomLink
          href={`/artists/${track.album.artist.slug}/albums/${track.album.slug}`}
          className="text-sm font-medium truncate"
        >
          {track.title}
        </CustomLink>
        <div className="flex items-center gap-1.5 truncate text-xs">
          {track.isExplicit && <Explicit />}
          <span>{formatArtistNames(track.artists)}</span>
        </div>
      </div>
    </div>
  );
}
