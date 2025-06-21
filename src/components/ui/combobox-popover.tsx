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
import { Icon } from "../common";
import { PlusIcon } from "lucide-react";

interface ComboboxPopoverProps {
  id: string;
  onValueChange: (id: string) => void;
  onAddNewArtist?: (name: string) => void;
}

export function ComboboxPopover({
  id,
  onValueChange,
  onAddNewArtist,
}: ComboboxPopoverProps) {
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [artistWithoutId, setArtistWithoutId] = React.useState<string | null>(
    null
  );

  const { data: artists } = useArtists();

  if (!artists) return null;

  const artist = artists.find((artist) => artist.id === id);

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleAddNewArtist = () => {
    if (onAddNewArtist && searchValue.trim()) {
      onAddNewArtist(searchValue.trim());
      setArtistWithoutId(searchValue.trim());
      setOpen(false);
      setSearchValue("");
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="px-2 py-6 w-fit">
        <Button type="button" variant="outline" className="justify-start">
          {id ? (
            <div className="flex items-center gap-2">
              <ArtistImage
                imagePublicId={artist?.imagePublicId || ""}
                artistName={artist?.name || "artist-image"}
                className="size-8"
                sizes="32px"
              />
              <span className="font-medium">{artist?.name}</span>
            </div>
          ) : artistWithoutId ? (
            <span className="font-medium">{artistWithoutId}</span>
          ) : (
            <span className="text-sm text-muted-foreground">Select artist</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-1 w-64" side="right" align="start">
        <Command>
          <CommandInput
            placeholder="Search artist..."
            value={searchValue}
            onValueChange={setSearchValue}
          />
          <CommandList>
            {filteredArtists.length === 0 && searchValue.trim() ? (
              <div className="p-2">
                <div className="text-sm text-muted-foreground mb-2 text-center">
                  No artist found.
                </div>
                {onAddNewArtist && (
                  <Button
                    variant="outline"
                    className="w-full flex flex-wrap"
                    onClick={handleAddNewArtist}
                  >
                    <Icon icon={PlusIcon} className="size-4" />
                    Add as new artist
                  </Button>
                )}
              </div>
            ) : filteredArtists.length === 0 ? (
              <CommandEmpty>Start typing to search for artists...</CommandEmpty>
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
  );
}
