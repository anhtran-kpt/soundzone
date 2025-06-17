"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useArtist } from "@/lib/queries/artist";
import { useParams } from "next/navigation";
import Link from "next/link";
import { formatName } from "@/lib/helpers";
import cloudinaryLoader from "@/lib/cloudinary-loader";
import Image from "next/image";
import CloudinaryImage from "@/components/shared/cloudinary-image";

export default function ArtistPage() {
  const { artistSlug } = useParams();
  const { data: artist, isLoading, error } = useArtist(artistSlug as string);

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
      <Link href={`/admin/artists/${artistSlug}/albums/new`}>Create Album</Link>
      <Link href={`/admin/artists/${artistSlug}/albums`}>View Albums</Link>
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <CloudinaryImage
            publicId={artist?.imagePublicId || ""}
            alt={artist?.name || ""}
            width={80}
            height={80}
            className="rounded-full"
          />
          <AvatarFallback>{formatName(artist?.name || "")}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{artist?.name}</h1>
          <p className="text-sm text-muted-foreground">{artist?.nationality}</p>
        </div>
      </div>
      <p>{artist?.description}</p>
    </div>
  );
}
