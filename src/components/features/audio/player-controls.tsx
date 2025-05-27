"use client";

import { Button } from "@/components/ui/button";
import { RepeatMode } from "@/stores/audioStore";
import {
  SkipBackIcon,
  SkipForwardIcon,
  Repeat1Icon,
  ShuffleIcon,
  Loader2Icon,
  CirclePlayIcon,
  CirclePauseIcon,
} from "lucide-react";

interface PlayerControlsProps {
  isPlaying: boolean;
  isLoading: boolean;
  hasNext: boolean;
  hasPrev: boolean;
  repeatMode: RepeatMode;
  isShuffled: boolean;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onToggleRepeat: () => void;
  onToggleShuffle: () => void;
}

export default function PlayerControls({
  isPlaying,
  isLoading,
  hasNext,
  hasPrev,
  repeatMode,
  isShuffled,
  onTogglePlay,
  onNext,
  onPrevious,
  onToggleRepeat,
  onToggleShuffle,
}: PlayerControlsProps) {
  const getRepeatIcon = (): React.ElementType => {
    switch (repeatMode) {
      case "one":
        return Repeat1Icon;
      case "all":
      case "off":
      default:
        return RepeatIcon;
    }
  };

  const RepeatIcon = getRepeatIcon();

  return (
    <div className="space-x-3 flex items-center">
      <Button
        variant={isShuffled ? "default" : "ghost"}
        size="sm"
        onClick={onToggleShuffle}
      >
        <ShuffleIcon className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className=""
        onClick={onPrevious}
        disabled={!hasPrev}
      >
        <SkipBackIcon className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className=""
        onClick={onTogglePlay}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2Icon className="size-9 animate-spin" />
        ) : isPlaying ? (
          <CirclePauseIcon className="size-9 stroke-1" />
        ) : (
          <CirclePlayIcon className="size-9 stroke-1" />
        )}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className=""
        onClick={onNext}
        disabled={!hasNext}
      >
        <SkipForwardIcon className="size-4" />
      </Button>
      <Button
        variant={repeatMode !== "off" ? "default" : "ghost"}
        size="sm"
        onClick={onToggleRepeat}
      >
        <RepeatIcon className="size-4" />
      </Button>
    </div>
  );
}
