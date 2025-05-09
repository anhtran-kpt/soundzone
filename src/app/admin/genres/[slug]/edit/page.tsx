import { genreService } from "@/services/client/genre-service";
import { notFound } from "next/navigation";
import GenreForm from "../../components/genre-form";

interface EditGenrePageProps {
  params: {
    slug: string;
  };
}

export default async function EditGenrePage({ params }: EditGenrePageProps) {
  const response = await genreService.getGenre(params.slug);

  if (!response.success || !response.data) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Edit Genre</h1>
        <p className="text-muted-foreground">Update genre information</p>
      </div>

      <div className="max-w-2xl">
        <GenreForm initialData={response.data} isEditing />
      </div>
    </div>
  );
}
