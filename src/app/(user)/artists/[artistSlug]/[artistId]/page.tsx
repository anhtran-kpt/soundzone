"use client";

// import AlbumCard from "@/components/common/album-card";
import { Button } from "@/components/ui/button";
import { PlayIcon, PlusIcon } from "lucide-react";
import Icon from "@/components/common/icon";
import { CldImage } from "next-cloudinary";
import { useParams } from "next/navigation";
import { useArtist } from "@/lib/queries/artist";
import { FastAverageColor } from "fast-average-color";
import { useEffect, useMemo, useState } from "react";
import Discography from "@/components/sections/discography";
import CustomLink from "@/components/common/custom-link";

export default function ArtistPage() {
  const { artistId } = useParams();

  const { data: artist, isLoading } = useArtist(artistId as string);
  const fac = useMemo(() => new FastAverageColor(), []);

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [bannerColor, setBannerColor] = useState<string | null>(null);

  useEffect(() => {
    if (imageUrl) {
      fac
        .getColorAsync(imageUrl, {
          algorithm: "sqrt",
          ignoredColor: [
            [255, 255, 255, 255],
            [0, 0, 0, 255],
          ],
        })
        .then((color) => {
          setBannerColor(color.hex);
        });
    }
  }, [imageUrl, fac]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <section className="flex items-center gap-4 relative h-72">
        <div
          className="absolute inset-0 -mx-12 -mt-24"
          style={{ backgroundColor: bannerColor || "transparent" }}
        ></div>
        <div className="absolute bottom-6 flex items-center gap-6 px-6">
          <div className="relative size-40">
            {artist.imagePublicId && (
              <CldImage
                src={artist.imagePublicId}
                alt={artist.name}
                fill
                aspectRatio="1:1"
                className="rounded-full size-40"
                crop="fill"
                sizes="160px"
                onLoad={(e) => setImageUrl(e.target.src)}
              />
            )}
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold">{artist.name}</h3>
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">
                {/* {artist.followerCount} followers */}
              </p>
              <Button variant="outline" size="sm" className="gap-2">
                <Icon icon={PlusIcon} className="size-4" />
                Follow
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">
                {/* {artist.monthlyListeners} monthly listeners */}
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
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-2">Discography</h2>
          <CustomLink href={`/artists/${artist.slug}/discography`}>
            Show all
          </CustomLink>
        </div>
        <Discography albums={artist.albums} />
        {/* <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {artist.albums.length > 0 ? (
            artist.albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No albums found</p>
          )}
        </div> */}
      </section>
    </div>
  );
}
