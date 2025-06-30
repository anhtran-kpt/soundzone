"use client";

import {
  FormControl,
  FormMessage,
  FormItem,
  FormLabel,
  FormField,
  Form,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { ArtistRole, ReleaseType } from "@/app/generated/prisma";
import { cn } from "@/lib/utils";
import { CalendarIcon, UploadIcon } from "lucide-react";
import { format } from "date-fns";
import { CreateAlbumForm, createAlbumSchema } from "@/schemas";
import { createAlbumAction } from "@/app/actions/album";
import { toast } from "sonner";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { Artist } from "@/types";
import { useState } from "react";
import Image from "next/image";
import { TrackField } from "./track-field";

export function AlbumForm({ artist }: { artist: Artist }) {
  const [albumCoverPreview, setAlbumCoverPreview] = useState<
    string | undefined
  >(undefined);

  const [tracks, setTracks] = useState<
    {
      audioPublicId: string;
      duration: number;
    }[]
  >([]);

  const methods = useForm<CreateAlbumForm>({
    resolver: zodResolver(createAlbumSchema),
    defaultValues: {
      title: "",
      releaseDate: new Date(),
      releaseType: ReleaseType.SINGLE,
      coverPublicId: undefined,
      tracks: [
        {
          title: "",
          isExplicit: false,
          lyrics: "",
          genreIds: [],
          performers: [
            {
              artistId: artist.id,
              role: ArtistRole.MAIN_ARTIST,
            },
          ],
          credits: [
            {
              roles: [],
              name: "",
            },
          ],
        },
      ],
    },
    mode: "onBlur",
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { fields: trackFields } = useFieldArray({
    control,
    name: "tracks",
  });

  const onFormSubmit = async (values: CreateAlbumForm) => {
    try {
      const formData = {
        title: values.title,
        releaseDate: values.releaseDate,
        releaseType: values.releaseType,
        coverPublicId: values.coverPublicId,
        artistId: artist.id,
        tracks: values.tracks.map((track, index) => ({
          title: track.title,
          lyrics: track.lyrics,
          duration: tracks[index].duration,
          audioPublicId: tracks[index].audioPublicId,
          isExplicit: track.isExplicit,
          genreIds: track.genreIds,
          performers: track.performers,
          credits: track.credits,
        })),
      };

      await createAlbumAction(formData);
    } catch (error: unknown) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  console.log(methods.formState.errors);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          New Album
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...methods}>
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="flex flex-col items-center"
          >
            <div className="flex flex-col gap-6">
              <div className="flex gap-6 items-start">
                <FormField
                  control={control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="min-w-xs">
                      <FormLabel>Album title</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter album title"
                          autoComplete="album-title"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="releaseType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Album Type</FormLabel>
                      <FormControl className="h-8">
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-2"
                        >
                          <FormItem className="flex items-center gap-3">
                            <FormControl>
                              <RadioGroupItem value="SINGLE" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Single
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center gap-3">
                            <FormControl>
                              <RadioGroupItem value="ALBUM" />
                            </FormControl>
                            <FormLabel className="font-normal">Album</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center gap-3">
                            <FormControl>
                              <RadioGroupItem value="EP" />
                            </FormControl>
                            <FormLabel className="font-normal">EP</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="releaseDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Release date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            fromDate={new Date(1900, 0, 1)}
                            toDate={new Date()}
                            captionLayout="dropdown"
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={control}
                name="coverPublicId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Album cover</FormLabel>
                    {albumCoverPreview && (
                      <div className="flex justify-center items-center">
                        <div className="relative rounded-lg overflow-hidden size-48 aspect-square">
                          <Image
                            src={albumCoverPreview}
                            alt="Album cover preview"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300 group-hover:brightness-75"
                          />
                        </div>
                      </div>
                    )}
                    <FormControl>
                      <CldUploadWidget
                        signatureEndpoint="/api/sign-cloudinary-params"
                        options={{
                          folder: "soundzone/albums/covers",
                          resourceType: "image",
                        }}
                        onSuccess={(results, widget) => {
                          const info =
                            results.info as CloudinaryUploadWidgetInfo;
                          field.onChange(info.public_id);
                          setAlbumCoverPreview(info.secure_url);
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
                              <UploadIcon className="size-6 mr-1" />
                              Upload Cover
                            </Button>
                          );
                        }}
                      </CldUploadWidget>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <CldUploadWidget
                signatureEndpoint="/api/sign-cloudinary-params"
                options={{
                  folder: "soundzone/tracks",
                  resourceType: "video",
                }}
                onSuccess={(result) => {
                  const info = result.info as CloudinaryUploadWidgetInfo;

                  setTracks((prev) => [
                    ...prev,
                    {
                      audioPublicId: info.public_id as string,
                      duration: info.duration as number,
                    },
                  ]);
                }}
              >
                {({ open }) => (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => open()}
                  >
                    <UploadIcon className="size-4 mr-1" />
                    Upload audios
                  </Button>
                )}
              </CldUploadWidget>

              <FormLabel className="mb-2 text-base font-semibold">
                {trackFields.length === 1 ? "Track Details" : "Tracks Details"}
              </FormLabel>
              <div className="space-y-6">
                {tracks.map((track, trackIndex) => (
                  <TrackField
                    key={trackIndex}
                    trackIndex={trackIndex}
                    track={track}
                  />
                ))}
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting} className="mt-8">
              {isSubmitting ? "Creating new album..." : "Create new album"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
