import TrackCard from "./track-card";
import { Track } from "@/types/database";

interface TrackListProps {
  tracks: Track[];
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
