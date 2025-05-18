"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useArtist } from "@/hooks";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ArtistPage() {
  const { artistSlug } = useParams();
  const { data: artist, isLoading, error } = useArtist(artistSlug as string);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col space-y-4">
      <Link href={`/admin/artists/${artistSlug}/albums/new`}>Create Album</Link>
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={artist?.avatarUrl || ""} />
          <AvatarFallback>
            {artist?.name.split(" ")[0].charAt(0)}
            {artist?.name.split(" ")[1]?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{artist?.name}</h1>
          <p className="text-sm text-muted-foreground">{artist?.nationality}</p>
        </div>
      </div>
      <p>{artist?.bio}</p>
    </div>
  );
}
