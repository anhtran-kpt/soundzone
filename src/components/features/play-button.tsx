import { PlayIcon } from "lucide-react";
import { Button } from "../../ui";
import { useAudioPlayer } from "@/hooks";
import { Track, Playlist } from "@/types";

interface PlayButtonProps {
  track: Track;
  playlist?: Playlist;
}

export default function PlayButton({ track, playlist }: PlayButtonProps) {
  const { playTrack } = useAudioPlayer();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="hidden group-hover:flex items-center justify-center size-4"
      onClick={() => playTrack(track, playlist)}
    >
      <PlayIcon strokeWidth={0} fill="currentColor" />
    </Button>
  );
}
