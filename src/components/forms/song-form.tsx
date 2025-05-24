"use client";

import {
  FormControl,
  FormDescription,
  FormMessage,
  FormItem,
  FormLabel,
  FormField,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Song } from "@/app/generated/prisma";
import { CreateSongDto, createSongSchema } from "@/schemas";
import { useCreateSong, useUpdateSong } from "@/services/queries/song";
import { useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Switch } from "@/components/ui/switch";
import { useAlbums } from "@/services/queries/album";

interface SongFormProps {
  song?: Song;
  mode: "create" | "edit";
}

export default function SongForm({ song, mode = "create" }: SongFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createMutation = useCreateSong();
  const updateMutation = useUpdateSong(song?.slug || "");
  const { data: albums } = useAlbums();

  const form = useForm<CreateSongDto>({
    resolver: zodResolver(createSongSchema),
    defaultValues: {
      title: song?.title || "",
      lyrics: song?.lyrics || "",
      isExplicit: song?.isExplicit || false,
      audioUrl: song?.audioUrl || "",
      albumId: song?.albumId || "",
      trackNumber: song?.trackNumber || 1,
    },
  });

  const onSubmit = async (values: CreateSongDto) => {
    try {
      setIsSubmitting(true);
      let response = null;

      if (mode === "create") {
        response = await createMutation.mutateAsync(values);
      } else {
        response = await updateMutation.mutateAsync(values);
      }

      if (response.success) {
        router.push("/admin/songs");
        router.refresh();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md flex flex-col items-center mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        {mode === "create" ? "Create New Song" : "Edit Song"}
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
                    placeholder="Enter song title"
                    autoComplete="song-title"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lyrics"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lyrics</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter song lyrics"
                    autoComplete="song-lyrics"
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
                    This song contains explicit content.
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
            name="albumId"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Album</FormLabel>
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
                          ? albums?.find((album) => album.id === field.value)
                              ?.title
                          : "Select album"}
                        <ChevronsUpDownIcon className="opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search album..."
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>No album found.</CommandEmpty>
                        <CommandGroup>
                          {albums?.map((album) => (
                            <CommandItem
                              value={album.title}
                              key={album.id}
                              onSelect={() => {
                                form.setValue("albumId", album.id);
                              }}
                            >
                              {album.title}
                              <CheckIcon
                                className={cn(
                                  "ml-auto",
                                  album.id === form.getValues("albumId")
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
            control={form.control}
            name="audioUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Audio URL</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter song audio url"
                    autoComplete="song-audio-url"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isSubmitting} className="w-full">
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
