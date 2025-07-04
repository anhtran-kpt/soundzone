"use client";

import { Separator, Button } from "@/components/ui";
import {
  EllipsisIcon,
  HeartIcon,
  SquarePlayIcon,
  MicVocalIcon,
  ListMusicIcon,
  CastIcon,
} from "lucide-react";
import {
  useAudioKeyboardShortcuts,
  useMediaSession,
  useAudioPlayer,
} from "@/hooks/use-audio-player";
import PlayerControls from "./player-controls";
import ProgressBar from "./progress-bar";
import VolumeControl from "./volume-control";
import TrackInfo from "../ui/track-info";

function AudioPlayer() {
  const player = useAudioPlayer();

  useMediaSession();
  useAudioKeyboardShortcuts();

  if (!player.currentTrack) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-accent z-50 px-4 py-2">
      <div className="flex items-center justify-between gap-12">
        <div className="flex items-center">
          <TrackInfo track={player.currentTrack} />
          <div className="ml-6 space-x-2">
            <Button variant="ghost" size="icon" className="">
              <HeartIcon className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="">
              <EllipsisIcon className="size-4" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 items-center grow">
          <PlayerControls
            isPlaying={player.playback.isPlaying}
            isLoading={player.playback.isLoading}
            hasNext={player.hasNext}
            hasPrev={player.hasPrev}
            onTogglePlay={player.controls.togglePlay}
            onNext={player.controls.next}
            onPrevious={player.controls.previous}
            repeatMode={player.modes.repeatMode}
            isShuffled={player.modes.isShuffled}
            onToggleRepeat={player.modes.toggleRepeat}
            onToggleShuffle={player.modes.toggleShuffle}
          />
          <ProgressBar
            currentTime={player.playback.currentTime}
            duration={player.playback.duration}
            onSeek={player.controls.seek}
            formatTime={player.formatTime}
            className="w-full max-w-lg"
          />
        </div>
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="">
              <SquarePlayIcon className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="">
              <MicVocalIcon className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="">
              <CastIcon className="size-4" />
            </Button>
            <VolumeControl
              volume={player.volume.volume}
              isMuted={player.volume.isMuted}
              onVolumeChange={player.volume.setVolume}
              onToggleMute={player.volume.toggleMute}
              className="min-w-0 flex-shrink-0"
            />
            <Separator orientation="vertical" className="w-1 h-full" />
            <Button variant="ghost" size="icon" className="">
              <ListMusicIcon className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
