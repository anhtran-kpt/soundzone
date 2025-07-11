import { AlbumInfo } from "@/features/album/album-types";
import { AlbumCard } from "./album-card";

export const AlbumList = ({ albums }: { albums: AlbumInfo[] }) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      {albums.map((album) => (
        <AlbumCard key={album.slug} album={album} />
      ))}
    </ul>
  );
};
