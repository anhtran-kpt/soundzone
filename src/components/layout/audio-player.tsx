"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import {
  EllipsisIcon,
  HeartIcon,
  ShuffleIcon,
  SkipBackIcon,
  CirclePlayIcon,
  SkipForwardIcon,
  RepeatIcon,
  SquarePlayIcon,
  MicVocalIcon,
  ListMusicIcon,
  CastIcon,
  Volume2Icon,
  CirclePauseIcon,
  VolumeXIcon,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { useAudioStore } from "@/stores/audioStore";
import { useEffect } from "react";

function AudioPlayer() {
  const {
    currentTrack,
    playback,
    controls,
    volume,
    modes,
    hasPrev,
    hasNext,
    formatTime,
    progress,
  } = useAudioPlayer();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-foreground z-50 px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="size-16 rounded-sm overflow-hidden">
            <Image
              src={currentTrack?.album?.coverUrl ?? null}
              alt="track-thumb"
              width={64}
              height={64}
            />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium">{currentTrack?.name}</h3>
            {currentTrack?.artists.map((artist) => (
              <Link
                key={artist.slug}
                href={`/admin/artists/${artist.artist.slug}`}
                className="text-xs text-gray-500"
              >
                {artist.artist.name}
              </Link>
            ))}
          </div>
          <div className="ml-6 space-x-2">
            <Button variant="ghost" size="icon" className="">
              <HeartIcon className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="">
              <EllipsisIcon className="size-4" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <div className="space-x-3 flex items-center">
            <Button variant="ghost" size="icon" className="">
              <ShuffleIcon className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className=""
              onClick={controls.previous}
              disabled={!hasPrev}
            >
              <SkipBackIcon className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className=""
              onClick={controls.togglePlay}
            >
              {playback.isPlaying ? (
                <CirclePlayIcon className="size-9 stroke-1" />
              ) : (
                <CirclePauseIcon className="size-9 stroke-1" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className=""
              onClick={controls.next}
              disabled={!hasNext}
            >
              <SkipForwardIcon className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="">
              <RepeatIcon className="size-4" />
            </Button>
          </div>
          <Progress value={progress} className="h-1 w-96" />
          <div>
            {formatTime(playback.currentTime)} / {formatTime(playback.duration)}
          </div>
          <audio src={currentTrack?.audioUrl} className="hidden" />
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
            <Button
              variant="ghost"
              size="icon"
              className=""
              onClick={volume.toggleMute}
            >
              {volume.isMuted ? (
                <VolumeXIcon className="size-4" />
              ) : (
                <Volume2Icon className="size-4" />
              )}
            </Button>
            <Progress value={volume.volume} className="w-16 h-1" />
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
