"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useArtist } from "@/lib/queries/artist";
import { useParams } from "next/navigation";
import Link from "next/link";
import { formatName } from "@/lib/helpers";
import { CldImage } from "next-cloudinary";

export default function ArtistPage() {
  const { artistSlug, artistId } = useParams();
  const { data: artist, isLoading, error } = useArtist(artistId as string);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className="flex flex-col space-y-4">
      <Link href={`/admin/artists/${artistSlug}/${artistId}/albums/new`}>
        Create Album
      </Link>
      <Link href={`/admin/artists/${artistSlug}/${artistId}/albums`}>
        View Albums
      </Link>
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          {artist.imagePublicId ? (
            <CldImage
              src={artist.imagePublicId}
              alt={artist.name}
              fill
              aspectRatio="1:1"
              className="rounded-full"
              crop="fill"
            />
          ) : (
            <AvatarFallback>{formatName(artist.name)}</AvatarFallback>
          )}
        </Avatar>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{artist.name}</h1>
          <p className="text-sm text-muted-foreground">{artist.nationality}</p>
        </div>
      </div>
      <p>{artist.description}</p>
    </div>
  );
}
