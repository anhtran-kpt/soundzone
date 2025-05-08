import GenreForm from "../components/genre-form";

export default function CreateGenrePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Create Genre</h1>
        <p className="text-muted-foreground">
          Add a new genre to your music library
        </p>
      </div>

      <div className="max-w-2xl w-full">
        <GenreForm />
      </div>
    </div>
  );
}
