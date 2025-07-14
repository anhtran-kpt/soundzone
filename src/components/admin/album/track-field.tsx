import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import {
  FormDescription,
  Input,
  Button,
  Switch,
  Textarea,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
  FormLabel,
  Command,
  CommandItem,
  CommandGroup,
  CommandList,
  CommandEmpty,
  PopoverContent,
  PopoverTrigger,
  CommandInput,
  Popover,
  Separator,
} from "@/components/ui";
import { PlusIcon, UploadIcon } from "lucide-react";
import { CldImage, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import Explicit from "@/new-components/ui/explicit-icon";
import { Trash2Icon, ChevronsUpDownIcon, CheckIcon } from "lucide-react";
import { BadgeCheckbox } from "@/components/shared/ui/badge-checkbox";
import { ArtistRole, CreditRole } from "@/app/generated/prisma/client";
import { ARTIST_ROLES, CREDIT_ROLES } from "@/lib/constants";
import { cn, getAudioUrl } from "@/lib/utils";
import { useGetArtists, useGetGenres } from "@/hooks";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { CldUploadWidget } from "next-cloudinary";

interface TrackFieldProps {
  trackIndex: number;
  removeTrack: (trackIndex: number) => void;
  disableRemove: boolean;
}

export function TrackField({
  trackIndex,
  removeTrack,
  disableRemove,
}: TrackFieldProps) {
  const { data: genres } = useGetGenres();
  const { data: artists } = useGetArtists();

  const {
    control,
    setValue,
    formState: { isSubmitting },
  } = useFormContext();

  const audioPublicId = useWatch({
    name: `tracks.${trackIndex}.audioPublicId`,
  });

  const {
    fields: performersFields,
    append: appendPerformer,
    remove: removePerformer,
  } = useFieldArray({
    control,
    name: `tracks.${trackIndex}.performers`,
  });

  const {
    fields: otherCreditsFields,
    append: appendOtherCredit,
    remove: removeOtherCredit,
  } = useFieldArray({
    control,
    name: `tracks.${trackIndex}.credits`,
  });

  const handleAddPerformer = () => {
    appendPerformer({
      artistId: "",
      role: ArtistRole.MAIN_ARTIST,
    });
  };

  const handleAddOtherCredit = () => {
    appendOtherCredit({
      name: "",
      roles: [],
    });
  };

  const handleRemovePerformer = (performerIndex: number) => {
    removePerformer(performerIndex);
  };

  const handleRemoveOtherCredit = (creditIndex: number) => {
    removeOtherCredit(creditIndex);
  };

  return (
    <Card className="rounded-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Track #{trackIndex + 1}</CardTitle>
          {!disableRemove && (
            <Button
              type="button"
              onClick={() => removeTrack(trackIndex)}
              variant="outline"
            >
              <Trash2Icon />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex gap-6">
            <FormField
              control={control}
              name={`tracks.${trackIndex}.audioPublicId`}
              render={() => (
                <FormItem>
                  <FormLabel>Audio</FormLabel>
                  {audioPublicId ? (
                    <AudioPlayer
                      src={getAudioUrl(audioPublicId)}
                      className="rounded shadow max-w-md"
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground italic">
                      No audio uploaded yet.
                    </p>
                  )}
                  <FormControl>
                    <CldUploadWidget
                      signatureEndpoint="/api/sign-cloudinary-params"
                      options={{
                        folder: "soundzone/tracks",
                        resourceType: "video",
                      }}
                      onSuccess={(result) => {
                        const info = result.info as CloudinaryUploadWidgetInfo;

                        setValue(
                          `tracks.${trackIndex}.audioPublicId`,
                          info?.public_id
                        );
                        setValue(
                          `tracks.${trackIndex}.duration`,
                          info?.duration
                        );
                      }}
                      onQueuesEnd={(result, { widget }) => {
                        widget.close();
                      }}
                    >
                      {({ open }) => (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => open()}
                        >
                          <UploadIcon className="size-4 mr-1" />
                          Upload audio file
                        </Button>
                      )}
                    </CldUploadWidget>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`tracks.${trackIndex}.title`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter track title"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`tracks.${trackIndex}.isExplicit`}
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-1">
                    <FormLabel>
                      <Explicit />
                      Explicit content
                    </FormLabel>
                    <FormDescription>
                      This track contains explicit content.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={control}
            name={`tracks.${trackIndex}.genreIds`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Genres</FormLabel>
                <FormControl>
                  <div className="flex flex-wrap gap-x-1 gap-y-2">
                    {genres?.map((genre) => (
                      <BadgeCheckbox
                        key={genre.id}
                        size="sm"
                        showIcon={false}
                        checked={field.value?.includes(genre.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, genre.id])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== genre.id
                                )
                              );
                        }}
                      >
                        {genre.name}
                      </BadgeCheckbox>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator />

          <div className="space-y-4 flex flex-col">
            <FormLabel className="text-base font-semibold">
              Main credits
            </FormLabel>
            {performersFields.map((performer, performerIndex) => (
              <div key={performer.id} className="flex gap-4 items-start">
                <FormField
                  control={control}
                  name={`tracks.${trackIndex}.performers.${performerIndex}.artistId`}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Artist</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-64 justify-between",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? artists?.find(
                                    (artist) => artist.id === field.value
                                  )?.name
                                : "Select artist"}
                              <ChevronsUpDownIcon className="opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-64 p-0">
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
                                      field.onChange(artist.id);
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
                  name={`tracks.${trackIndex}.performers.${performerIndex}.role`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
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

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleRemovePerformer(performerIndex)}
                >
                  <Trash2Icon className="size-4" />
                </Button>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleAddPerformer()}
              className="self-center"
            >
              <PlusIcon className="size-4" />
              Add main credit
            </Button>
          </div>

          <div className="space-y-4 flex flex-col">
            <FormLabel className="text-base font-semibold">
              Other credits
            </FormLabel>

            {otherCreditsFields.map((credit, creditIndex) => (
              <div key={credit.id} className="flex gap-4 items-start">
                <FormField
                  control={control}
                  name={`tracks.${trackIndex}.credits.${creditIndex}.name`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Artist</FormLabel>
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
                    <FormItem className="flex-1">
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

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleRemoveOtherCredit(creditIndex)}
                >
                  <Trash2Icon className="size-4" />
                </Button>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleAddOtherCredit()}
              className="self-center"
            >
              <PlusIcon className="size-4" />
              Add other credit
            </Button>
          </div>

          <FormField
            control={control}
            name={`tracks.${trackIndex}.lyrics`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lyrics</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter track lyrics"
                    disabled={isSubmitting}
                  />
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
