import ArtistForm from "../components/artist-form";

export default function CreateArtistPage() {
  return (
    <div className="container py-10">
      <ArtistForm mode="create" />
    </div>
  );
}
