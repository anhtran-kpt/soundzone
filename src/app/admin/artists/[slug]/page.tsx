"use client";

import { useArtist } from "@/hooks";
import { useParams } from "next/navigation";

export default function ArtistPage() {
  const { slug } = useParams();
  const { data: artist, isLoading, error } = useArtist(slug as string);

  console.log(artist);

  return (
    <div className="flex flex-col">
      <h1>Artist</h1>
    </div>
  );
}
