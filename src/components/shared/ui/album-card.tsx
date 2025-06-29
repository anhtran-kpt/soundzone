import { Album } from "@/types";
import { formatDate } from "date-fns";
import { CldImage } from "next-cloudinary";
import { PlayIcon } from "lucide-react";
import Dot from "./dot";
import Link from "next/link";
import { Button } from "@/components/ui";

export function AlbumCard({ album }: { album: Album }) {
  return (
    <li className="flex flex-col items-center group gap-1.5">
      <div className="relative rounded-lg overflow-hidden w-full h-full aspect-square">
        <CldImage
          src={album.coverPublicId}
          alt={album.title}
          fill
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 group-hover:brightness-75"
          sizes="20vw"
        />
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full invisible group-hover:visible bg-primary text-white flex items-center justify-center">
          <PlayIcon className="size-5 fill-current" />
        </button>
      </div>
      <div className="flex flex-col items-center">
        <Button asChild type="button" variant="link">
          <Link
            href={`/artists/${album.artist.slug}/albums/${album.slug}`}
            className="text-sm font-medium line-clamp-1 text-ellipsis"
          >
            {album.title}
          </Link>
        </Button>
        <div className="flex text-[13px] text-muted-foreground items-center gap-1.5">
          <span>{formatDate(album.releaseDate, "yyyy")}</span>
          <Dot />
          <span>{album.releaseType === "ALBUM" ? "Album" : "Single"}</span>
        </div>
      </div>
    </li>
  );
}
