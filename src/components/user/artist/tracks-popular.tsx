import { TracksList } from "@/components/shared/ui";
import { Track } from "@/types";
import { Button } from "@/components/ui";

interface TracksPopularProps {
  tracks: Track[];
}

export default function TracksPopular({ tracks }: TracksPopularProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Popular</h2>
      <TracksList tracks={tracks} />
      <Button variant="link" className="justify-start">
        Show more
      </Button>
    </div>
  );
}
