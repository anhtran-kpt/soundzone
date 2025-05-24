import ArtistForm from "@/components/forms/artist-form";

export default function CreateArtistPage() {
  return (
    <div className="container py-10">
      <ArtistForm mode="create" />
    </div>
  );
}
