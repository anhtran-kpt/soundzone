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
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArtistRole } from "@/app/generated/prisma";
import { useGenres } from "@/lib/queries/genre";
import { useArtists } from "@/lib/queries/artist";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, PlusCircle, Trash2, Plus, X } from "lucide-react";
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
import { uploadAlbumImage, uploadAudio } from "@/lib/queries/upload";
import { CreateAlbumForm, createAlbumSchema } from "@/lib/validations";
import { createAlbumAction } from "@/app/actions/album";
import { toast } from "sonner";

export default function AlbumForm({ artistId }: { artistId: string }) {
  const { data: genres } = useGenres();
  const { data: artists } = useArtists();

  const form = useForm<CreateAlbumForm>({
    resolver: zodResolver(createAlbumSchema),
    defaultValues: {
      title: "",
      description: "",
      releaseDate: undefined,
      coverFile: undefined,
      tracks: [
        {
          title: "",
          lyrics: "",
          duration: undefined,
          audioFile: undefined,
          audioPublicId: undefined,
          isExplicit: false,
          genreIds: [],
          composer: "",
          lyricist: "",
          producer: "",
          artists: [
            {
              artistId: artistId,
              role: ArtistRole.MAIN,
            },
          ],
        },
      ],
    },
  });

  const {
    setValue,
    getValues,
    watch,
    formState,
    control,
    clearErrors,
    handleSubmit,
  } = form;

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "tracks",
  });

  const tracks = watch("tracks");

  useEffect(() => {
    if (tracks.length === 1) {
      setValue("title", tracks[0].title);
    }

    tracks.forEach(async (t, idx) => {
      if (t.audioFile && t.duration === undefined) {
        const url = URL.createObjectURL(t.audioFile);
        const audio = new Audio(url);
        audio.addEventListener("loadedmetadata", () => {
          setValue(`tracks.${idx}.duration`, audio.duration, {
            shouldValidate: true,
          });
          URL.revokeObjectURL(url);
        });
      }

      if (t.audioFile && t.audioPublicId === undefined) {
        const audioPublicId = await uploadAudio(t.audioFile);
        setValue(`tracks.${idx}.audioPublicId`, audioPublicId);
      }
    });
  }, [tracks, setValue]);

  const onSubmit = async (values: CreateAlbumForm) => {
    clearErrors();
    try {
      const coverPublicId = await uploadAlbumImage(values.coverFile);

      const formData = {
        title: values.title,
        description: values.description,
        releaseDate: values.releaseDate,
        coverPublicId: coverPublicId,
        artistId: artistId,
        tracks: values.tracks.map((track) => ({
          title: track.title,
          lyrics: track.lyrics,
          duration: track.duration,
          audioPublicId: track.audioPublicId,
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

  console.log(formState.errors);

  return (
    <div className="max-w-md flex flex-col items-center mx-auto">
      <h2 className="text-2xl font-bold mb-6">New Album</h2>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter album name"
                    autoComplete="album-name"
                    disabled={formState.isSubmitting || tracks.length === 1}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
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

          <FormField
            control={control}
            name="coverFile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      field.onChange(e.target.files?.[0] || null)
                    }
                    placeholder="Upload image"
                    autoComplete="album-cover-image"
                    disabled={formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">
              {tracks.length === 1 ? "Track" : "Tracks"}
            </h3>

            {fields.map((field, index) => (
              <Card key={field.id} className="mb-4">
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">
                      {tracks.length === 1
                        ? "Track Details"
                        : `Track ${index + 1}`}
                    </h4>
                    {tracks.length !== 1 && fields.length > 1 && (
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
                    <FormField
                      control={control}
                      name={`tracks.${index}.title`}
                      render={({ field }) => (
                        <FormItem>
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
                      name={`tracks.${index}.audioFile`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Audio File</FormLabel>
                          <FormControl>
                            <Input
                              type="file"
                              accept="audio/*"
                              onChange={(e) =>
                                field.onChange(e.target.files?.[0] || null)
                              }
                              placeholder="Upload audio file"
                              disabled={formState.isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                          {tracks[index].duration !== undefined && (
                            <p className="mt-2 text-sm">
                              Duration: {tracks[index].duration?.toFixed(2)}s
                            </p>
                          )}
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name={`tracks.${index}.isExplicit`}
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              id={`track-explicit-${index}`}
                              disabled={formState.isSubmitting}
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor={`track-explicit-${index}`}
                            className="text-sm font-normal"
                          >
                            Explicit content
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name={`tracks.${index}.genreIds`}
                      render={() => (
                        <FormItem>
                          <div className="mb-2">
                            <FormLabel className="text-base">Genres</FormLabel>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
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
                                        <SelectItem value={ArtistRole.FEATURED}>
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
                          <Plus className="h-4 w-4 mr-2" />
                          Add Artist
                        </Button>
                      </div>
                    </div>

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
                  audioPublicId: undefined,
                  duration: undefined,
                  audioFile: undefined,
                  genreIds: [],
                  artists: [
                    {
                      artistId: artistId,
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
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Track
            </Button>
          </div>

          <Button
            type="submit"
            disabled={formState.isSubmitting}
            className="w-full mt-8"
          >
            {formState.isSubmitting ? "Creating..." : "Create"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
