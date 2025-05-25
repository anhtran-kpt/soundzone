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
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useTrack } from "@/services/queries/track";

function AudioPlayer() {
  const { data: track, isLoading } = useTrack("thuan-theo-y-troi");

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-foreground z-50 px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="size-16 rounded-sm overflow-hidden">
            <Image
              src={track?.album?.coverUrl ?? null}
              alt="track-thumb"
              width={64}
              height={64}
            />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium">{track?.title}</h3>
            <Link
              href="/artists/bui-anh-tuan"
              className="text-xs text-gray-500"
            >
              Bùi Anh Tuấn
            </Link>
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
            <Button variant="ghost" size="icon" className="">
              <SkipBackIcon className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="">
              <CirclePlayIcon className="size-9 stroke-1" />
            </Button>
            <Button variant="ghost" size="icon" className="">
              <SkipForwardIcon className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="">
              <RepeatIcon className="size-4" />
            </Button>
          </div>
          <Progress value={50} className="h-1 w-96" />
          <audio src={track?.audioUrl} />
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
            <Button variant="ghost" size="icon" className="">
              <Volume2Icon className="size-4" />
            </Button>
            <Progress value={90} className="w-16" />
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
