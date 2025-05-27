"use client";

import { PlayIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Track } from "@/types/database";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

interface TrackListProps {
  tracks: Track[];
}

export default function TrackList({ tracks }: TrackListProps) {
  const player = useAudioPlayer();

  const handlePlayTrack = async (track: Track) => {
    await player.playTrack(track);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tracks?.map((track: Track) => (
        <div key={track.id}>
          <Card>
            <div className="flex items-center">
              <Avatar className="size-20">
                <AvatarImage src={track.album.coverUrl || ""} />
                <AvatarFallback>{track.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardHeader>
                  <CardTitle>{track.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {track.lyrics || "No lyrics"}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePlayTrack(track)}
                    >
                      <PlayIcon className="h-4 w-4 mr-1" />
                      Play
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      ))}
      {(!tracks || tracks.length === 0) && (
        <div className="col-span-full text-center p-8 border rounded-lg">
          No tracks found.
        </div>
      )}
    </div>
  );
}
