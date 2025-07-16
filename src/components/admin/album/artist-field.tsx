import { useFormContext } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2Icon, ChevronsUpDownIcon, CheckIcon } from "lucide-react";
import { FormControl, FormField, FormMessage } from "@/components/ui/form";
import { FormItem } from "@/components/ui/form";
import { FormLabel } from "@/components/ui/form";
import { BadgeCheckbox } from "@/components/ui/badge-checkbox";
import { ArtistRole, CreditRole } from "@/app/generated/prisma/client";
import { ARTIST_ROLES, CREDIT_ROLES } from "@/lib/constants";
import {
  Command,
  CommandItem,
  CommandGroup,
  CommandList,
  CommandEmpty,
} from "@/components/ui/command";
import { PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@/components/ui/popover";
import { CommandInput } from "@/components/ui/command";
import { Popover } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useGetArtists } from "@/hooks";
import { Input } from "@/components/ui/input";
import { CldImage } from "next-cloudinary";

interface ArtistFieldProps {
  trackIndex: number;
  artistIndex: number;
  onRemove: () => void;
  canRemove: boolean;
}

export function ArtistField({
  trackIndex,
  artistIndex,
  onRemove,
  canRemove,
}: ArtistFieldProps) {
  const { control, setValue } = useFormContext();
  const { data: artists } = useGetArtists();

  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Artist #{artistIndex + 1}</CardTitle>
          {canRemove && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onRemove}
            >
              <Trash2Icon className="size-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex gap-4 items-start">
          <FormField
            control={control}
            name={`tracks.${trackIndex}.performers.${artistIndex}.artistId`}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Main credits</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[200px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? artists?.find((artist) => artist.id === field.value)
                              ?.name
                          : "Select artist"}
                        <ChevronsUpDownIcon className="opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search artist..."
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>No artist found.</CommandEmpty>
                        <CommandGroup>
                          {artists?.map((artist) => (
                            <CommandItem
                              value={artist.name}
                              key={artist.id}
                              onSelect={() => {
                                setValue(artistIdFieldName, artist.id);
                              }}
                            >
                              <div className="relative size-8 rounded-full">
                                <CldImage
                                  src={artist.imagePublicId}
                                  alt={artist.name}
                                  fill
                                  sizes="32px"
                                  className="object-cover rounded-full"
                                />
                              </div>
                              {artist.name}
                              <CheckIcon
                                className={cn(
                                  "ml-auto",
                                  artist.id === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`tracks.${trackIndex}.performers.${artistIndex}.role`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Roles</FormLabel>
                <FormControl>
                  <div className="flex flex-wrap gap-x-1 gap-y-2">
                    {Object.values(ArtistRole).map((role) => (
                      <BadgeCheckbox
                        key={role}
                        size="sm"
                        showIcon={false}
                        checked={field.value?.includes(role)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, role])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== role
                                )
                              );
                        }}
                      >
                        {ARTIST_ROLES[role]}
                      </BadgeCheckbox>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-4 items-start">
          <FormField
            control={control}
            name={`tracks.${trackIndex}.credits.${creditIndex}.name`}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Other credits</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter artist name"
                    autoComplete="artist-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`tracks.${trackIndex}.credits.${creditIndex}.roles`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Roles</FormLabel>
                <FormControl>
                  <div className="flex flex-wrap gap-x-1 gap-y-2">
                    {Object.values(CreditRole).map((role) => (
                      <BadgeCheckbox
                        key={role}
                        size="sm"
                        showIcon={false}
                        checked={field.value?.includes(role)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, role])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== role
                                )
                              );
                        }}
                      >
                        {CREDIT_ROLES[role]}
                      </BadgeCheckbox>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
