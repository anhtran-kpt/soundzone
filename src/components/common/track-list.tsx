import TrackCard from "./track-card";
import { FullTrack } from "@/lib/types";

interface TrackListProps {
  tracks: FullTrack[];
}

export default function TrackList({ tracks }: TrackListProps) {
  return (
    <ul role="list" className="grid grid-cols-3 gap-8">
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </ul>
  );
}
