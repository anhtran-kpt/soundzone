import { useTrackPopular } from "@/lib/queries";
import { cn } from "@/lib/utils";
import { CldImage } from "next-cloudinary";

export default function TracksPopular({ className }: { className?: string }) {
  const { data: tracks, status } = useTrackPopular({
    limit: 5,
  });

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h2 className="text-2xl font-bold">Popular</h2>
      <ul role="list" className="flex flex-col gap-4">
        {tracks.map((track, index) => (
          <li key={track.id}>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{index + 1}</span>
              <div className="relative size-16">
                <CldImage
                  src={track.album.coverPublicId}
                  alt={track.album.title}
                  fill
                  className="rounded-md"
                  sizes="160px"
                  priority
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
