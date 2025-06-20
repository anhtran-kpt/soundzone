"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useArtists } from "@/lib/queries";
import { ArtistImage } from "../shared";

interface ComboboxPopoverProps {
  id: string;
  artistName?: string;
  onValueChange: (id: string) => void;
  onAddNewArtist?: (name: string) => void;
}

export function ComboboxPopover({
  id,
  artistName,
  onValueChange,
  onAddNewArtist,
}: ComboboxPopoverProps) {
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const { data: artists } = useArtists();

  if (!artists) return null;

  const artist = artists.find((artist) => artist.id === id);

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleAddNewArtist = () => {
    if (onAddNewArtist && searchValue.trim()) {
      onAddNewArtist(searchValue.trim());
      setOpen(false);
      setSearchValue("");
    }
  };

  console.log(artistName);

  return (
    <div className="flex items-center space-x-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {id ? (
              <div className="flex items-center gap-2">
                <ArtistImage
                  imagePublicId={artist?.imagePublicId || ""}
                  artistName={artist?.name || artistName || id}
                  className="size-8"
                  sizes="32px"
                />
                <span className="font-medium">
                  {artist?.name || artistName}
                </span>
              </div>
            ) : (
              <span className="text-sm text-muted-foreground">
                Select artist
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput
              placeholder="Search artist..."
              value={searchValue}
              onValueChange={setSearchValue}
            />
            <CommandList>
              {filteredArtists.length === 0 && searchValue.trim() ? (
                <div className="p-2">
                  <div className="text-sm text-muted-foreground mb-2">
                    No artist found for &quot;{searchValue}&quot;
                  </div>
                  {onAddNewArtist && (
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={handleAddNewArtist}
                    >
                      <span className="mr-2">+</span>
                      Add &quot;{searchValue}&quot; as new artist
                    </Button>
                  )}
                </div>
              ) : filteredArtists.length === 0 ? (
                <CommandEmpty>
                  Start typing to search for artists...
                </CommandEmpty>
              ) : (
                <CommandGroup>
                  {filteredArtists.map((artist) => (
                    <CommandItem
                      key={artist.id}
                      value={artist.name}
                      onSelect={() => {
                        onValueChange(artist.id);
                        setOpen(false);
                        setSearchValue("");
                      }}
                    >
                      <ArtistImage
                        imagePublicId={artist.imagePublicId}
                        artistName={artist.name}
                        className="size-8"
                        sizes="32px"
                      />
                      <span className="font-medium">{artist.name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
