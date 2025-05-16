"use client";

import { FormControl, FormMessage } from "@/components/ui/form";
import { FormItem, FormLabel, FormField, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Song } from "@/app/generated/prisma";
import { CreateSongDto, createSongSchema } from "@/schemas";
import { useArtists, useCreateSong, useUpdateSong } from "@/hooks";
import { useRouter } from "next/navigation";
import { Calendar } from "@/components/ui/calendar";
import { PopoverContent } from "@/components/ui/popover";
import { Popover } from "@/components/ui/popover";
import { PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

interface SongFormProps {
  song?: Song;
  mode: "create" | "edit";
}

export default function SongForm({ song, mode = "create" }: SongFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createMutation = useCreateSong();
  const updateMutation = useUpdateSong(song?.slug || "");
  const { data: artists } = useArtists();

  const form = useForm<CreateSongDto>({
    resolver: zodResolver(createSongSchema),
    defaultValues: {
      title: song?.title || "",
      lyrics: song?.lyrics || "",
      releaseDate: song?.releaseDate || new Date(),
      isExplicit: song?.isExplicit || false,
      audioUrl: song?.audioUrl || "",
      artistId: song?.artistId || "",
      albumId: song?.albumId || "",
      genres: song?.genres || [],
      composers: song?.composers || [],
      producers: song?.producers || [],
      lyricists: song?.lyricists || [],
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
                    placeholder="Enter Song title"
                    autoComplete="Song-title"
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
                    autoComplete="Song-lyrics"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
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
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    // defaultValue={field.value}
                    disabled={isSubmitting}
                  >
                    <FormItem>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Song type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(SongType).map((type) => (
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
            name="artistId"
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
                                form.setValue("artistId", artist.id);
                              }}
                            >
                              {artist.name}
                              <CheckIcon
                                className={cn(
                                  "ml-auto",
                                  artist.id === form.getValues("artistId")
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
            name="coverImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover Image</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter Song cover image"
                    autoComplete="Song-cover-image"
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
