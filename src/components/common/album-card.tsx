import Image from "next/image";
import { Album } from "@/types/database";
import { PlayIcon } from "lucide-react";
import Icon from "@/components/common/icon";
import CustomLink from "./custom-link";

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <div className="flex flex-col gap-2 items-center group aspect-square">
      <div className="relative rounded-md overflow-hidden group w-full h-full">
        <Image
          src={album.coverUrl}
          alt={album.name}
          fill
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 group-hover:brightness-75"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Icon
            icon={PlayIcon}
            fill="white"
            strokeWidth={0}
            className="size-8"
          />
        </div>
      </div>
      <CustomLink href={`/albums/${album.slug}`} className="font-medium">
        {album.name}
      </CustomLink>
    </div>
  );
}
