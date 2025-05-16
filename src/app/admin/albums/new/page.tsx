import AlbumForm from "../components/album-form";

export default function CreateAlbumPage() {
  return (
    <div className="container py-10">
      <AlbumForm mode="create" />
    </div>
  );
}
