import { Button } from "@/components/ui/button";
import { Track } from "@/types/database";
import { PlayIcon } from "lucide-react";

interface TrackItemProps {
  track: Track;
}

export default function TrackItem({ track }: TrackItemProps) {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline">
        <PlayIcon className="size-4" />
      </Button>
      <div>{track.name}</div>
    </div>
  );
}
