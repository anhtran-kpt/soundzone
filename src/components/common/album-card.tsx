import { DotIcon, PlayIcon } from "lucide-react";
import Icon from "@/components/common/icon";
import CustomLink from "./custom-link";
import { FullAlbum } from "@/lib/types";
import { CldImage } from "next-cloudinary";
import { formatDate } from "date-fns";

interface AlbumCardProps {
  album: FullAlbum;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  console.log(album);
  return (
    <div className="flex flex-col items-center group aspect-square">
      <div className="relative rounded-md overflow-hidden group w-full h-full">
        {album.coverPublicId && (
          <CldImage
            src={album.coverPublicId}
            alt={album.title}
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 group-hover:brightness-75"
            sizes="
    (max-width: 640px) 33vw,
    (max-width: 768px) 25vw,
    (max-width: 1024px) 20vw,
    16.66vw
  "
          />
        )}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Icon
            icon={PlayIcon}
            fill="white"
            strokeWidth={0}
            className="size-8"
          />
        </div>
      </div>
      <div className="flex flex-col w-full mt-2">
        <CustomLink
          href={`/albums/${album.slug}/${album.id}`}
          className="font-medium text-center"
        >
          {album.title}
        </CustomLink>
        <div className="flex gap-0.5 items-center justify-center text-xs text-muted-foreground">
          {album.releaseDate && (
            <span className="">{formatDate(album.releaseDate, "yyyy")}</span>
          )}
          <Icon icon={DotIcon} className="size-5" fill="currentColor" />
          <span>{album.tracks.length} tracks</span>
        </div>
      </div>
    </div>
  );
}
