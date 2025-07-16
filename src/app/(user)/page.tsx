"use client";

import { useAlbumList } from "@/features/album/album-queries";
import { AlbumList } from "@/components/ui/album-list";

export default function DiscoverPage() {
  const { data, isLoading } = useAlbumList();

  return (
    <div className="flex flex-col">
      <section>{data && <AlbumList albums={data.data} />}</section>
    </div>
  );
}
