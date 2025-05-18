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
import { Album, ReleaseType } from "@/app/generated/prisma";
import { CreateAlbumDto, createAlbumSchema } from "@/schemas";
import { useCreateAlbum, useGenres, useUpdateAlbum } from "@/hooks";
import { useRouter } from "next/navigation";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, PlusCircle, Trash2 } from "lucide-react";
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
import { AudioUpload } from "@/components/audio-upload";

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

  const createMutation = useCreateAlbum();
  const updateMutation = useUpdateAlbum(album?.slug || "");
  const { data: genres } = useGenres();

  const form = useForm<CreateAlbumDto>({
    resolver: zodResolver(createAlbumSchema),
    defaultValues: {
      title: album?.title || "",
      description: album?.description || "",
      coverUrl: album?.coverUrl || "",
      releaseDate: album?.releaseDate || new Date(),
      releaseType: album?.releaseType || ReleaseType.ALBUM,
      artistId: artistId,
      // @ts-expect-error - The Album type doesn't properly include genres relation
      genreIds: album?.genres ? album.genres.map((genre) => genre.genreId) : [],
      isExplicit: album?.isExplicit || false,
      songs: [
        {
          title: "",
          trackNumber: 1,
          isExplicit: false,
          audioUrl: "",
          albumId: "", // Temporary - will be set after album creation
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "songs",
  });

  const releaseType = form.watch("releaseType");

  // Handler for audio upload changes
  const handleAudioChange = (
    index: number,
    data: { url: string; duration: string }
  ) => {
    // Set the audioUrl field
    form.setValue(`songs.${index}.audioUrl`, data.url);

    // Manually handle the duration since it's not part of the schema
    const songDuration = document.getElementById(
      `song-duration-${index}`
    ) as HTMLInputElement;
    if (songDuration) {
      songDuration.value = data.duration;
    }
  };

  const onSubmit = async (values: CreateAlbumDto) => {
    try {
      setIsSubmitting(true);
      let response = null;

      const albumData: CreateAlbumDto = {
        title: values.title,
        description: values.description,
        coverUrl: values.coverUrl,
        releaseDate: values.releaseDate,
        releaseType: values.releaseType,
        artistId: values.artistId,
        genreIds: values.genreIds,
        isExplicit: values.isExplicit,
        songs: values.songs.map((song) => ({
          ...song,
          albumId: song.albumId || artistId, // Use artistId as a fallback
        })),
      };

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
        trackNumber: 1,
        isExplicit: false,
        audioUrl: "",
        albumId: "", // Will be set after album creation
      });
    } else if (fields.length === 0) {
      append({
        title: "",
        trackNumber: 1,
        isExplicit: false,
        audioUrl: "",
        albumId: "", // Will be set after album creation
      });
    }
  }, [releaseType, fields, remove, append]);

  useEffect(() => {
    ensureCorrectSongCount();
  }, [releaseType, fields.length, remove, append, ensureCorrectSongCount]);

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
                      selected={field.value}
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
                      // Call ensureCorrectSongCount when releaseType changes
                      setTimeout(ensureCorrectSongCount, 0);
                    }}
                    defaultValue={field.value}
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

          <FormField
            control={form.control}
            name="coverUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover Image</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter album cover url"
                    autoComplete="album-cover-url"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Songs Section */}
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
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Audio Upload Section */}
                    <div>
                      <FormLabel>Audio File</FormLabel>
                      <AudioUpload
                        value={form.watch(`songs.${index}.audioUrl`) || ""}
                        onChange={(data) => handleAudioChange(index, data)}
                        disabled={isSubmitting}
                      />
                      <FormDescription className="mt-1 text-xs">
                        Upload your audio file to automatically get the URL and
                        duration
                      </FormDescription>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Duration Field - not in schema but useful for display */}
                      <div className="space-y-2">
                        <FormLabel>Duration</FormLabel>
                        <Input
                          id={`song-duration-${index}`}
                          placeholder="e.g. 3:45"
                          disabled={isSubmitting}
                          defaultValue=""
                        />
                        <p className="text-xs text-muted-foreground">
                          Auto-filled on upload
                        </p>
                      </div>

                      <FormField
                        control={form.control}
                        name={`songs.${index}.trackNumber`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Track #</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                {...field}
                                onChange={(e) =>
                                  field.onChange(parseInt(e.target.value))
                                }
                                value={field.value}
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
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

                    {/* Hidden field for audioUrl - handled by the AudioUpload component */}
                    <input
                      type="hidden"
                      {...form.register(`songs.${index}.audioUrl`)}
                    />

                    {/* Hidden field for albumId - will be set on submit */}
                    <input
                      type="hidden"
                      {...form.register(`songs.${index}.albumId`)}
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
                    trackNumber: fields.length + 1,
                    isExplicit: false,
                    audioUrl: "",
                    albumId: "", // Will be set after album creation
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
