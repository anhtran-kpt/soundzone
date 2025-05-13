"use client";

import GenreForm from "@/app/admin/genres/components/genre-form";
import { useGenre } from "@/features/genre/hooks";
import { useParams } from "next/navigation";

export default function EditBlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: genre, isLoading, error } = useGenre(slug);

  if (isLoading) return <div className="container py-10">Loading...</div>;
  if (error) return <div className="container py-10">Error loading genre</div>;
  if (!genre) return <div className="container py-10">Genre not found</div>;

  return (
    <div className="container py-10">
      <GenreForm mode="edit" genre={genre} />
    </div>
  );
}
