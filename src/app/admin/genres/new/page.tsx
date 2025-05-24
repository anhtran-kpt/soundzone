import GenreForm from "@/components/forms/genre-form";

export default function CreateGenrePage() {
  return (
    <div className="container py-10">
      <GenreForm mode="create" />
    </div>
  );
}
