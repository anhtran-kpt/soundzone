import { useFieldArray, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormMessage,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { PlusIcon, Trash2Icon, UploadIcon } from "lucide-react";
import Icon from "../common/icon";
import { CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { CldUploadWidget } from "next-cloudinary";
import { Explicit } from "../shared";
import { Switch } from "../ui/switch";
import { BadgeCheckbox } from "../ui/badge-checkbox";
import { Textarea } from "../ui/textarea";
import { useGenres } from "@/lib/queries/genre";
import TrackArtistForm from "./track-artist-form";
import { CreditRole } from "@/app/generated/prisma/client";

interface TrackDetailsFormProps {
  trackIndex: number;
  onRemove: () => void;
  canRemove: boolean;
}

export default function TrackDetailsForm({
  trackIndex,
  onRemove,
  canRemove,
}: TrackDetailsFormProps) {
  const { data: genres } = useGenres();
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();

  const {
    fields: artistFields,
    append: appendArtist,
    remove: removeArtist,
  } = useFieldArray({
    control,
    name: `tracks.${trackIndex}.artists`,
  });

  const titleFieldName = `tracks.${trackIndex}.title` as const;
  const audioMetaFieldName = `tracks.${trackIndex}.audioMeta` as const;
  const genreIdsFieldName = `tracks.${trackIndex}.genreIds` as const;
  const isExplicitFieldName = `tracks.${trackIndex}.isExplicit` as const;
  const lyricsFieldName = `tracks.${trackIndex}.lyrics` as const;

  const handleAddArtist = () => {
    appendArtist({
      id: "",
      name: "",
      roles: [CreditRole.MAIN_ARTIST],
    });
  };

  const handleRemoveArtist = (artistIndex: number) => {
    removeArtist(artistIndex);
  };

  return (
    <Card className="mb-4 rounded-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Track #{trackIndex + 1}</CardTitle>
          {canRemove && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onRemove}
            >
              <Icon icon={Trash2Icon} className="size-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex gap-4">
            <FormField
              control={control}
              name={titleFieldName}
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
              name={audioMetaFieldName}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Audio file</FormLabel>
                  <FormControl>
                    <CldUploadWidget
                      signatureEndpoint="/api/sign-cloudinary-params"
                      options={{
                        folder: "soundzone/tracks",
                        resourceType: "video",
                      }}
                      onSuccess={(results, widget) => {
                        const info = results.info as CloudinaryUploadWidgetInfo;
                        field.onChange({
                          duration: info.duration,
                          publicId: info.public_id,
                        });
                        widget.close();
                      }}
                    >
                      {({ open }) => {
                        return (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => open()}
                          >
                            <Icon icon={UploadIcon} className="size-4 mr-1" />
                            Upload Audio
                          </Button>
                        );
                      }}
                    </CldUploadWidget>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={control}
            name={isExplicitFieldName}
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

          <FormField
            control={control}
            name={genreIdsFieldName}
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

          {artistFields.map((artist, artistIndex) => (
            <TrackArtistForm
              key={`${trackIndex}-${artistIndex}`}
              trackIndex={trackIndex}
              artistIndex={artistIndex}
              onRemove={() => handleRemoveArtist(artistIndex)}
              canRemove={artistFields.length > 1}
            />
          ))}

          {/* <FormField
            control={control}
            name={creditsFieldName}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Artists</FormLabel>
                <FormControl>
                  <div className="space-y-2 mt-2">
                    {field.value.map(
                      (
                        credit: {
                          artist: {
                            id: string;
                            name: string;
                          };
                          role: CreditRole;
                        },
                        creditIndex: number
                      ) => (
                        <TrackArtistForm
                          key={`${trackIndex}-${creditIndex}`}
                          trackIndex={trackIndex}
                          creditIndex={creditIndex}
                          onRemove={() => handleRemoveArtist(creditIndex)}
                          canRemove={creditFields.length > 1}
                        />
                      )
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2 w-full"
            onClick={() => handleAddArtist()}
          >
            <Icon icon={PlusIcon} className="h-4 w-4 mr-1" />
            Add Artist
          </Button>

          <FormField
            control={control}
            name={lyricsFieldName}
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
