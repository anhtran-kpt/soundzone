"use client";

import {
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { FormItem, FormLabel, FormField, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArtistRole, ReleaseType } from "@/app/generated/prisma";
import { albumFormSchema, Album, AlbumFormDto } from "@/schemas";
import { useCreateAlbum, useGenres, useUpdateAlbum, useArtists } from "@/hooks";
import { useRouter } from "next/navigation";
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
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import AudioUploader from "@/components/audio-uploader";
import uploadQueries from "@/queries/upload";

interface AlbumFormProps {
  artistId: string;
  album?: Album;
  mode: "create" | "edit";
}

export default function AlbumForm({
  artistId,
  album,
  mode = "create",
}: AlbumFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [coverFile, setCoverFile] = useState<File | null>(null);

  const createMutation = useCreateAlbum();
  const updateMutation = useUpdateAlbum(album?.slug || "");
  const { data: genres } = useGenres();
  const { data: artists } = useArtists();

  const form = useForm<AlbumFormDto>({
    resolver: zodResolver(albumFormSchema),
    defaultValues: {
      title: album?.title ?? "",
      description: album?.description ?? "",
      releaseType: album?.releaseType ?? ReleaseType.SINGLE,
      releaseDate: album?.releaseDate ?? undefined,
      coverUrl: album?.coverUrl ?? "",
      isExplicit: album?.isExplicit ?? false,
      genreIds: album?.genres?.map((genre) => genre.genreId) ?? [],
      songs: album?.songs
        ? album.songs.map((song) => ({
            title: song.title,
            lyrics: song.lyrics ?? "",
            duration: song.duration,
            audioUrl: song.audioUrl,
            isExplicit: song.isExplicit ?? false,
            composer: song.composer ?? "",
            lyricist: song.lyricist ?? "",
            producer: song.producer ?? "",
            artists: song.artists.map((artist) => ({
              artistId: artist.artistId,
              role: artist.role,
            })),
          }))
        : [
            {
              title: "",
              lyrics: "",
              duration: 0,
              audioUrl: "",
              isExplicit: false,
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

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "songs",
  });

  const releaseType = form.watch("releaseType");
  const albumTitle = form.watch("title");
  const albumExplicit = form.watch("isExplicit");

  useEffect(() => {
    if (releaseType === ReleaseType.SINGLE) {
      form.setValue("songs.0.title", albumTitle);
      form.setValue("songs.0.isExplicit", albumExplicit);
    }
  }, [releaseType, albumTitle, albumExplicit, form]);

  const onSubmit = async (values: AlbumFormDto) => {
    try {
      setIsSubmitting(true);

      if (coverFile) {
        values.coverUrl = await uploadQueries.uploadImage(
          coverFile,
          "album",
          "cover"
        );
      }

      const albumData = {
        title: values.title,
        description: values.description,
        releaseType: values.releaseType,
        releaseDate: values.releaseDate,
        coverUrl: values.coverUrl || album?.coverUrl,
        isExplicit: values.isExplicit,
        genreIds: values.genreIds,
        artistId: artistId,
        songs: values.songs.map((song, index) => ({
          title: song.title,
          lyrics: song.lyrics,
          duration: song.duration,
          trackNumber: index + 1,
          audioUrl: song.audioUrl,
          isExplicit: song.isExplicit,
          composer: song.composer,
          lyricist: song.lyricist,
          producer: song.producer,
          artists: song.artists.map((artist, index) => ({
            artistId: artist.artistId,
            role: artist.role,
            order: index + 1,
          })),
        })),
      };

      let response = null;

      if (mode === "create") {
        response = await createMutation.mutateAsync(albumData);
      } else {
        response = await updateMutation.mutateAsync(albumData);
      }

      if (response.success) {
        router.push("/admin/albums");
        router.refresh();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const ensureCorrectSongCount = useCallback(() => {
    if (releaseType === ReleaseType.SINGLE && fields.length !== 1) {
      while (fields.length > 0) {
        remove(0);
      }
      append({
        title: "",
        isExplicit: false,
        audioUrl: "",
        duration: 0,
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
      });
    } else if (fields.length === 0) {
      append({
        title: "",
        isExplicit: false,
        audioUrl: "",
        duration: 0,
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
      });
    }
  }, [releaseType, fields, remove, append, artistId]);

  useEffect(() => {
    ensureCorrectSongCount();
  }, [releaseType, fields.length, remove, append, ensureCorrectSongCount]);

  const handleAudioChange = (
    index: number,
    data: { url: string; duration: number }
  ) => {
    form.setValue(`songs.${index}.audioUrl`, data.url);
    form.setValue(`songs.${index}.duration`, Math.floor(data.duration));
  };

  const handleAddArtistToSong = (songIndex: number) => {
    const currentArtists = form.getValues(`songs.${songIndex}.artists`) || [];
    form.setValue(`songs.${songIndex}.artists`, [
      ...currentArtists,
      {
        artistId: "",
        role: ArtistRole.FEATURED,
      },
    ]);
  };

  const handleRemoveArtistFromSong = (
    songIndex: number,
    artistIndex: number
  ) => {
    const currentArtists = form.getValues(`songs.${songIndex}.artists`) || [];
    const newArtists = currentArtists.filter((_, i) => i !== artistIndex);

    form.setValue(`songs.${songIndex}.artists`, newArtists);
  };

  return (
    <div className="max-w-md flex flex-col items-center mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        {mode === "create" ? "Create New Album" : "Edit Album"}
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
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
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
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
            control={form.control}
            name="isExplicit"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-2">
                  <FormLabel>Explicit</FormLabel>
                  <FormDescription>
                    This album contains explicit content.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
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
            control={form.control}
            name="releaseType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value: string) => {
                      field.onChange(value);
                      setTimeout(ensureCorrectSongCount, 0);
                    }}
                    value={field.value}
                    disabled={isSubmitting}
                  >
                    <FormItem>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select album type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(ReleaseType).map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </FormItem>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="genreIds"
            render={() => (
              <FormItem>
                <div className="mb-2">
                  <FormLabel className="text-base">Genres</FormLabel>
                </div>
                {genres?.map((genre) => (
                  <FormField
                    key={genre.id}
                    control={form.control}
                    name="genreIds"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={genre.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(genre.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, genre.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== genre.id
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
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem>
            <FormLabel>Cover Image</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
                placeholder="Upload album cover"
                autoComplete="album-cover"
                disabled={isSubmitting}
              />
            </FormControl>
            <FormMessage />
          </FormItem>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">
              {releaseType === ReleaseType.SINGLE ? "Song" : "Songs"}
            </h3>

            {fields.map((field, index) => (
              <Card key={field.id} className="mb-4">
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">
                      {releaseType === ReleaseType.SINGLE
                        ? "Song Details"
                        : `Song ${index + 1}`}
                    </h4>
                    {releaseType !== ReleaseType.SINGLE &&
                      fields.length > 1 && (
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
                      control={form.control}
                      name={`songs.${index}.title`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter song title"
                              disabled={
                                isSubmitting ||
                                releaseType === ReleaseType.SINGLE
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div>
                      <FormLabel>Audio File</FormLabel>
                      <AudioUploader
                        value={form.watch(`songs.${index}.audioUrl`) || ""}
                        onChange={(data) => handleAudioChange(index, data)}
                        disabled={isSubmitting}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name={`songs.${index}.isExplicit`}
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              id={`song-explicit-${index}`}
                              disabled={
                                isSubmitting ||
                                releaseType === ReleaseType.SINGLE
                              }
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor={`song-explicit-${index}`}
                            className="text-sm font-normal"
                          >
                            Explicit content
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    {/* Artist management section */}
                    <div className="mt-4">
                      <FormLabel>Artists</FormLabel>
                      <div className="space-y-2 mt-2">
                        {form
                          .watch(`songs.${index}.artists`)
                          ?.map((artist, artistIndex) => (
                            <div
                              key={artistIndex}
                              className="flex items-center space-x-2 border p-2 rounded-md"
                            >
                              <FormField
                                control={form.control}
                                name={`songs.${index}.artists.${artistIndex}.artistId`}
                                render={({ field }) => {
                                  const selectedArtist = artists?.find(
                                    (a) => a.id === field.value
                                  );

                                  return (
                                    <FormItem className="flex-1">
                                      <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                        disabled={isSubmitting}
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
                                control={form.control}
                                name={`songs.${index}.artists.${artistIndex}.role`}
                                render={({ field }) => (
                                  <FormItem className="w-32">
                                    <Select
                                      onValueChange={field.onChange}
                                      value={field.value}
                                      disabled={isSubmitting}
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
                                  handleRemoveArtistFromSong(index, artistIndex)
                                }
                                disabled={
                                  form.watch(`songs.${index}.artists`).length <=
                                  1
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
                          onClick={() => handleAddArtistToSong(index)}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Artist
                        </Button>
                      </div>
                    </div>

                    <FormField
                      control={form.control}
                      name={`songs.${index}.lyrics`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Lyrics</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Enter song lyrics"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`songs.${index}.composer`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Composer</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter song composer"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`songs.${index}.lyricist`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Lyricist</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter song lyricist"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`songs.${index}.producer`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Producer</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter song producer"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Hidden field to store audioUrl */}
                    <input
                      type="hidden"
                      {...form.register(`songs.${index}.audioUrl`)}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}

            {(releaseType === ReleaseType.EP ||
              releaseType === ReleaseType.ALBUM) && (
              <Button
                type="button"
                variant="outline"
                className="w-full mt-2"
                onClick={() =>
                  append({
                    title: "",
                    isExplicit: false,
                    audioUrl: "",
                    duration: 0,
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
                Add Song
              </Button>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full mt-8">
            {isSubmitting
              ? mode === "create"
                ? "Creating..."
                : "Updating..."
              : mode === "create"
              ? "Create"
              : "Update"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
