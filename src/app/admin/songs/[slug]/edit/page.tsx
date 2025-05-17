"use client";

import { useSong } from "@/hooks";
import { useParams } from "next/navigation";
import SongForm from "../../components/song-form";

export default function EditSongPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: song, isLoading, error } = useSong(slug);

  if (isLoading) return <div className="container py-10">Loading...</div>;
  if (error) return <div className="container py-10">Error loading song</div>;
  if (!song) return <div className="container py-10">Song not found</div>;

  return (
    <div className="container py-10">
      <SongForm mode="edit" song={song} />
    </div>
  );
}
