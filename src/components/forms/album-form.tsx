"use client";

import {
  FormControl,
  FormMessage,
  FormItem,
  FormLabel,
  FormField,
  Form,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArtistRole } from "@/app/generated/prisma";
import { useGenres } from "@/lib/queries/genre";
import { useArtists } from "@/lib/queries/artist";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  CalendarIcon,
  PlusCircle,
  Trash2,
  Plus,
  X,
  UploadIcon,
} from "lucide-react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { CreateAlbumForm, createAlbumSchema } from "@/lib/validations";
import { createAlbumAction } from "@/app/actions/album";
import { toast } from "sonner";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { Icon } from "../common";
import { FullArtist } from "@/lib/types";
import { Explicit } from "../shared";
import { useState } from "react";
import Image from "next/image";

export default function AlbumForm({ artist }: { artist: FullArtist }) {
  const { data: genres } = useGenres();
  const { data: artists } = useArtists();
  const [albumBannerPreview, setAlbumBannerPreview] = useState<
    string | undefined
  >(undefined);
  const [albumCoverPreview, setAlbumCoverPreview] = useState<
    string | undefined
  >(undefined);

  const form = useForm<CreateAlbumForm>({
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
          lyrics: "",
          audioMeta: {
            duration: undefined,
            publicId: undefined,
          },
          isExplicit: false,
          genreIds: [],
          composer: "",
          lyricist: "",
          producer: "",
          artists: [
            {
              artistId: artist.id,
              role: ArtistRole.MAIN,
            },
          ],
        },
      ],
    },
  });

  const { setValue, getValues, formState, control, clearErrors, handleSubmit } =
    form;

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "tracks",
  });

  const onSubmit = async (values: CreateAlbumForm) => {
    clearErrors();
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
          composer: track.composer,
          lyricist: track.lyricist,
          producer: track.producer,
          artists: track.artists.map((artist) => ({
            artistId: artist.artistId,
            role: artist.role,
          })),
        })),
      };

      await createAlbumAction(formData);
    } catch (error: unknown) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  const handleAddArtistToTrack = (trackIndex: number) => {
    const currentArtists = getValues(`tracks.${trackIndex}.artists`) || [];
    setValue(`tracks.${trackIndex}.artists`, [
      ...currentArtists,
      {
        artistId: "",
        role: ArtistRole.FEATURED,
      },
    ]);
  };

  const handleRemoveArtistFromTrack = (
    trackIndex: number,
    artistIndex: number
  ) => {
    const currentArtists = getValues(`tracks.${trackIndex}.artists`) || [];
    const newArtists = currentArtists.filter((_, i) => i !== artistIndex);

    setValue(`tracks.${trackIndex}.artists`, newArtists);
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">
        New Album For <span className="text-primary">{artist.name}</span>
      </h2>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="flex gap-4">
                <FormField
                  control={control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Album Title</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter album title"
                          autoComplete="album-title"
                          disabled={formState.isSubmitting}
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
                      <FormLabel>Release Date</FormLabel>
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
                            selected={field.value || undefined}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
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
                    <FormLabel>Album Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter album description"
                        autoComplete="album-description"
                        disabled={formState.isSubmitting}
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
                    <FormLabel>Album Cover</FormLabel>
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
                              <Icon icon={UploadIcon} className="size-4 mr-1" />
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
                    <FormLabel>Album Banner</FormLabel>
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
                              <Icon icon={UploadIcon} className="size-4 mr-1" />
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
            </div>
            <div className="">
              <FormLabel className="mb-2">
                {fields.length === 1 ? "Track Details" : "Tracks Details"}
              </FormLabel>
              {fields.map((field, index) => (
                <Card key={field.id} className="mb-4 rounded-lg">
                  <CardContent className="">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-base mb-2">{`Track ${
                        index + 1
                      }`}</h4>
                      {fields.length !== 1 && fields.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => remove(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <FormField
                          control={control}
                          name={`tracks.${index}.title`}
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormLabel>Title</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Enter track title"
                                  disabled={formState.isSubmitting}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={control}
                          name={`tracks.${index}.audioMeta`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Audio File</FormLabel>
                              <FormControl>
                                <CldUploadWidget
                                  signatureEndpoint="/api/sign-cloudinary-params"
                                  options={{
                                    folder: "soundzone/tracks",
                                    resourceType: "video",
                                  }}
                                  onSuccess={(results, widget) => {
                                    const info =
                                      results.info as CloudinaryUploadWidgetInfo;
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
                                        <Icon
                                          icon={UploadIcon}
                                          className="size-4 mr-1"
                                        />
                                        Upload Track Audio
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
                        name={`tracks.${index}.isExplicit`}
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
                                disabled={formState.isSubmitting}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={control}
                        name={`tracks.${index}.genreIds`}
                        render={() => (
                          <FormItem>
                            <FormLabel>Genres</FormLabel>
                            <div className="grid grid-cols-3 gap-2">
                              {genres?.map((genre) => (
                                <FormField
                                  key={genre.id}
                                  control={control}
                                  name={`tracks.${index}.genreIds`}
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={genre.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(
                                              genre.id
                                            )}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([
                                                    ...field.value,
                                                    genre.id,
                                                  ])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) =>
                                                        value !== genre.id
                                                    )
                                                  );
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal">
                                          {genre.name}
                                        </FormLabel>
                                      </FormItem>
                                    );
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="mt-4">
                        <FormLabel>Artists</FormLabel>
                        <div className="space-y-2 mt-2">
                          {form
                            .watch(`tracks.${index}.artists`)
                            ?.map((artist, artistIndex) => (
                              <div
                                key={artistIndex}
                                className="flex items-center space-x-2 border p-2 rounded-md"
                              >
                                <FormField
                                  control={control}
                                  name={`tracks.${index}.artists.${artistIndex}.artistId`}
                                  render={({ field }) => {
                                    const selectedArtist = artists?.find(
                                      (a) => a.id === field.value
                                    );

                                    return (
                                      <FormItem className="flex-1">
                                        <Select
                                          value={field.value}
                                          onValueChange={field.onChange}
                                          disabled={formState.isSubmitting}
                                        >
                                          <FormControl>
                                            <SelectTrigger>
                                              <SelectValue placeholder="Select artist">
                                                {selectedArtist
                                                  ? selectedArtist.name
                                                  : "Select artist"}
                                              </SelectValue>
                                            </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                            {artists?.map((artist) => (
                                              <SelectItem
                                                key={artist.id}
                                                value={artist.id}
                                              >
                                                {artist.name}
                                              </SelectItem>
                                            ))}
                                          </SelectContent>
                                        </Select>
                                      </FormItem>
                                    );
                                  }}
                                />

                                <FormField
                                  control={control}
                                  name={`tracks.${index}.artists.${artistIndex}.role`}
                                  render={({ field }) => (
                                    <FormItem className="w-32">
                                      <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        disabled={formState.isSubmitting}
                                      >
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Role" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value={ArtistRole.MAIN}>
                                            Main
                                          </SelectItem>
                                          <SelectItem
                                            value={ArtistRole.FEATURED}
                                          >
                                            Featured
                                          </SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </FormItem>
                                  )}
                                />

                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={() =>
                                    handleRemoveArtistFromTrack(
                                      index,
                                      artistIndex
                                    )
                                  }
                                  disabled={
                                    form.watch(`tracks.${index}.artists`)
                                      .length <= 1
                                  }
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}

                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="mt-2 w-full"
                            onClick={() => handleAddArtistToTrack(index)}
                          >
                            <Plus className="h-4 w-4 mr-1" />
                            Add Artist
                          </Button>
                        </div>
                      </div>

                      <FormField
                        control={control}
                        name={`tracks.${index}.composer`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Composer</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Enter track composer"
                                disabled={formState.isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={control}
                        name={`tracks.${index}.lyricist`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Lyricist</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Enter track lyricist"
                                disabled={formState.isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={control}
                        name={`tracks.${index}.producer`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Producer</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Enter track producer"
                                disabled={formState.isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={control}
                        name={`tracks.${index}.lyrics`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Lyrics</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Enter track lyrics"
                                disabled={formState.isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button
                type="button"
                variant="outline"
                className="w-full mt-2"
                onClick={() =>
                  append({
                    title: "",
                    isExplicit: false,
                    audioMeta: {
                      duration: 0,
                      publicId: "",
                    },
                    genreIds: [],
                    artists: [
                      {
                        artistId: artist.id,
                        role: ArtistRole.MAIN,
                      },
                    ],
                    lyrics: "",
                    composer: "",
                    lyricist: "",
                    producer: "",
                  })
                }
              >
                <PlusCircle className="h-4 w-4 mr-1" />
                Add Track
              </Button>

              <Button
                type="submit"
                disabled={formState.isSubmitting}
                className="w-full mt-8"
              >
                {formState.isSubmitting ? "Creating album..." : "Create album"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
    // <div className="max-w-md flex flex-col items-center mx-auto">
    //   <h2 className="text-2xl font-bold mb-6">New Album</h2>
    //   <Form {...form}>
    //     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

    //     </form>
    //   </Form>
    // </div>
  );
}
