import { EllipsisIcon, HeartIcon } from "lucide-react";
import { Button } from "../ui/button";
import Icon from "./icon";
import TrackInfo from "../features/audio/track-info";
import { Track } from "@/types/database";

interface TrackCardProps {
  track: Track;
}

export default function TrackCard({ track }: TrackCardProps) {
  return (
    <div className="flex justify-between items-center">
      <TrackInfo track={track} />
      <div className="space-x-2">
        <Button variant="ghost" size="icon">
          <Icon icon={HeartIcon} />
        </Button>
        <Button variant="ghost" size="icon">
          <Icon icon={EllipsisIcon} />
        </Button>
      </div>
    </div>
  );
}
