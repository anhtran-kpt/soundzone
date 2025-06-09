import { Artist } from "@/types/database";
import CustomLink from "./custom-link";
import { cn } from "@/lib/utils";

interface ArtistNamesProps {
  artists: Artist[];
  className?: string;
}

export default function ArtistNames({ artists, className }: ArtistNamesProps) {
  return (
    <div
      className={cn("text-xs text-muted-foreground truncate mt-0.5", className)}
    >
      {artists
        .map((artist) => (
          <CustomLink
            key={artist.artistId}
            href={`/artists/${artist.artist.slug}`}
            className="hover:underline"
          >
            {artist.artist.name}
          </CustomLink>
        ))
        .reduce((prev, curr) => [prev, ", ", curr])}
    </div>
  );
}
