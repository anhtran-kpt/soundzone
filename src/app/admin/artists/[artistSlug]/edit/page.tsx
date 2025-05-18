"use client";

import ArtistForm from "@/app/admin/artists/components/artist-form";
import { useArtist } from "@/hooks";
import { useParams } from "next/navigation";

export default function EditArtistPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: artist, isLoading, error } = useArtist(slug);

  if (isLoading) return <div className="container py-10">Loading...</div>;
  if (error) return <div className="container py-10">Error loading artist</div>;
  if (!artist) return <div className="container py-10">Artist not found</div>;

  return (
    <div className="container py-10">
      <ArtistForm mode="edit" artist={artist} />
    </div>
  );
}
