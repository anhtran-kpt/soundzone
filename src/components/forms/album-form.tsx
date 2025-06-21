"use client";

import {
  FormControl,
  FormMessage,
  FormItem,
  FormLabel,
  FormField,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CreditRole } from "@/app/generated/prisma";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, PlusCircle, UploadIcon } from "lucide-react";
import { format } from "date-fns";
import { CreateAlbumForm, createAlbumSchema } from "@/lib/validations";
import { createAlbumAction } from "@/app/actions/album";
import { toast } from "sonner";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { Icon } from "../common";
import { FullArtist } from "@/lib/types";
import { useState } from "react";
import Image from "next/image";
import TrackDetailsForm from "./track-details-form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function AlbumForm({ artist }: { artist: FullArtist }) {
  const [albumBannerPreview, setAlbumBannerPreview] = useState<
    string | undefined
  >(undefined);
  const [albumCoverPreview, setAlbumCoverPreview] = useState<
    string | undefined
  >(undefined);

  const methods = useForm<CreateAlbumForm>({
    resolver: zodResolver(createAlbumSchema),
    defaultValues: {
      title: "",
      description: "",
      releaseDate: new Date(),
      coverPublicId: undefined,
      bannerPublicId: undefined,
      tracks: [
        {
          title: "",
          isExplicit: false,
          lyrics: "",
          audioMeta: {
            duration: undefined,
            publicId: undefined,
          },
          genreIds: [],
          artists: [
            {
              roles: [CreditRole.MAIN_ARTIST],
              id: artist.id,
              name: artist.name,
            },
          ],
        },
      ],
    },
    mode: "onChange",
  });

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = methods;

  const {
    fields: trackFields,
    append: appendTrack,
    remove: removeTrack,
  } = useFieldArray({
    control,
    name: "tracks",
  });

  const handleAddTrack = () => {
    appendTrack({
      title: "",
      isExplicit: false,
      audioMeta: { duration: 0, publicId: "" },
      genreIds: [],
      artists: [
        {
          roles: [CreditRole.MAIN_ARTIST],
          id: artist.id,
          name: artist.name,
        },
      ],
    });
  };

  const handleRemoveTrack = (trackIndex: number) => {
    removeTrack(trackIndex);
  };

  const onFormSubmit = async (values: CreateAlbumForm) => {
    try {
      const formData = {
        title: values.title,
        description: values.description,
        releaseDate: values.releaseDate,
        coverPublicId: values.coverPublicId,
        bannerPublicId: values.bannerPublicId,
        artistId: artist.id,
        tracks: values.tracks.map((track) => ({
          title: track.title,
          lyrics: track.lyrics,
          duration: track.audioMeta.duration,
          audioPublicId: track.audioMeta.publicId,
          isExplicit: track.isExplicit,
          genreIds: track.genreIds,
          artists: track.artists,
        })),
      };

      await createAlbumAction(formData);
    } catch (error: unknown) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Create New Album
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...methods}>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="space-y-4 flex-2/5">
                <FormLabel className="mb-2 text-base font-semibold">
                  Album Details
                </FormLabel>
                <Card>
                  <CardContent className="space-y-4">
                    <div className="flex gap-4">
                      <FormField
                        control={control}
                        name="title"
                        render={({ field }) => (
                          <FormItem className="flex-1">
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
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
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
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Album description</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Enter album description"
                              autoComplete="album-description"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

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
                                    <Icon
                                      icon={UploadIcon}
                                      className="size-4 mr-1"
                                    />
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

                    <FormField
                      control={control}
                      name="bannerPublicId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Album banner</FormLabel>
                          {albumBannerPreview && (
                            <div className="w-full aspect-video relative">
                              <Image
                                src={albumBannerPreview}
                                alt="Album banner preview"
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                          <FormControl>
                            <CldUploadWidget
                              signatureEndpoint="/api/sign-cloudinary-params"
                              options={{
                                folder: "soundzone/albums/banners",
                                resourceType: "image",
                              }}
                              onSuccess={(results, widget) => {
                                const info =
                                  results.info as CloudinaryUploadWidgetInfo;
                                field.onChange(info.public_id);
                                setAlbumBannerPreview(info.secure_url);
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
                                    <Icon
                                      icon={UploadIcon}
                                      className="size-4 mr-1"
                                    />
                                    Upload Banner
                                  </Button>
                                );
                              }}
                            </CldUploadWidget>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="flex-3/5">
                <FormLabel className="mb-2 text-base font-semibold">
                  {trackFields.length === 1
                    ? "Track Details"
                    : "Tracks Details"}
                </FormLabel>
                <div className="space-y-6">
                  {trackFields.map((track, trackIndex) => (
                    <TrackDetailsForm
                      key={track.id}
                      trackIndex={trackIndex}
                      onRemove={() => handleRemoveTrack(trackIndex)}
                      canRemove={trackFields.length > 1}
                    />
                  ))}
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full mt-2"
                  onClick={handleAddTrack}
                >
                  <Icon icon={PlusCircle} className="size-4 mr-1" />
                  Add Track
                </Button>

                <Button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className="w-full mt-8"
                >
                  {isSubmitting ? "Creating new album..." : "Create new album"}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
