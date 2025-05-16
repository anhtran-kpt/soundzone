"use client";

import AlbumForm from "@/app/admin/albums/components/album-form";
import { useAlbum } from "@/hooks";
import { useParams } from "next/navigation";

export default function EditAlbumPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: album, isLoading, error } = useAlbum(slug);

  if (isLoading) return <div className="container py-10">Loading...</div>;
  if (error) return <div className="container py-10">Error loading album</div>;
  if (!album) return <div className="container py-10">Album not found</div>;

  return (
    <div className="container py-10">
      <AlbumForm mode="edit" album={album} />
    </div>
  );
}
