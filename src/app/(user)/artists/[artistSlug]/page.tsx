import { artistActions } from "@/actions";
import { notFound } from "next/navigation";
import Image from "next/image";
import AlbumCard from "@/components/common/album-card";
import { Button } from "@/components/ui/button";
import { PlayIcon, PlusIcon } from "lucide-react";
import Icon from "@/components/common/icon";

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;

  const artist = await artistActions.getBySlug(artistSlug);

  if (!artist) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <section className="flex items-center gap-4 relative h-72">
        <div className="absolute inset-0 -mx-12 -mt-24 bg-muted dark:bg-muted/80"></div>
        <div className="absolute bottom-6 flex items-center gap-6 px-6">
          <Image
            src={artist.imageUrl}
            alt={artist.name}
            width={128}
            height={128}
            className="rounded-full size-40"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold">{artist.name}</h3>
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">
                {artist.followerCount} followers
              </p>
              <Button variant="outline" size="sm" className="gap-2">
                <Icon icon={PlusIcon} className="size-4" />
                Follow
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">
                {artist.monthlyListeners} monthly listeners
              </p>
              <Button variant="outline" size="sm">
                <Icon
                  icon={PlayIcon}
                  fill="black"
                  strokeWidth={0}
                  className="size-4"
                />
                <span className="text-sm">Play all</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">About</h2>
        <p className="text-sm text-muted-foreground">
          {artist.description || "No description available"}
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">Albums</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {artist.albums.length > 0 ? (
            artist.albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No albums found</p>
          )}
        </div>
      </section>
    </div>
  );
}
