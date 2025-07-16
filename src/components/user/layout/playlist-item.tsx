import Dot from "@/components/ui/dot";
import { FALLBACK_PUBLIC_ID } from "@/lib/constants";
import { Playlist } from "@/types";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export const PlaylistItem = ({ playlist }: { playlist: Playlist }) => {
  return (
    <Link href={``} className="flex items-center gap-3 w-xs">
      <div className="relative size-14 shrink-0">
        <CldImage
          src={playlist.coverPublicId ?? FALLBACK_PUBLIC_ID!}
          alt={playlist.title}
          fill
          className="rounded-md object-cover"
          sizes="56px"
          priority
        />
      </div>
      <div className="flex flex-col gap-1 w-full overflow-hidden">
        <div>{playlist.title}</div>
        <div className="flex items-center gap-1.5 truncate text-xs">
          Playlist
          <Dot />
          {playlist.user?.name}
        </div>
      </div>
    </Link>
  );
};
