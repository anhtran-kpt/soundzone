import SongForm from "../components/song-form";

export default function CreateSongPage() {
  return (
    <div className="container py-10">
      <SongForm mode="create" />
    </div>
  );
}
