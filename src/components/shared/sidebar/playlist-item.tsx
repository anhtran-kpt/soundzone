import Dot from "@/components/shared/ui/dot";
import { Button } from "@/components/ui";
import { UserPlaylists } from "@/features/user";
import { FALLBACK_IMAGE } from "@/lib/constants";
import { PlayIcon } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export const PlaylistItem = ({
  playlist,
}: {
  playlist: UserPlaylists[number];
}) => {
  return (
    <Link
      href={`/users/${playlist.user?.slug}/playlists/${playlist.slug}`}
      className="flex items-center gap-3 w-xs"
    >
      <div className="relative size-12 shrink-0">
        <CldImage
          src={playlist.coverPublicId ?? FALLBACK_IMAGE!}
          alt={playlist.title}
          fill
          className="rounded-sm object-cover"
          sizes="48px"
          priority
        />
        {/* <Button
          type="button"
          size="icon"
          variant="secondary"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4"
        >
          <PlayIcon stroke="0" fill="white" />
        </Button> */}
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
