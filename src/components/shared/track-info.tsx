import { Track } from "@/types";
import { CldImage } from "next-cloudinary";
import Explicit from "./explicit";
import CustomLink from "../common/custom-link";

interface TrackInfoProps {
  track: Track;
}

export default function TrackInfo({ track }: TrackInfoProps) {
  return (
    <div className="grow flex gap-3 items-center">
      <div className="relative size-14">
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
          className="text-sm font-medium"
        >
          {track.title}
        </CustomLink>
        <div className="flex items-center gap-1.5">
          {track.isExplicit && <Explicit />}
          {track.artists.map(({ artist }) => (
            <CustomLink
              href={`/artists/${artist.slug}`}
              key={artist.id}
              className="text-xs"
            >
              {artist.name}
            </CustomLink>
          ))}
        </div>
      </div>
    </div>
  );
}
