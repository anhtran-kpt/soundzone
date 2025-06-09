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
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CreateArtistInput, createArtistSchema } from "@/lib/validations";
import { useCreateArtist, useUpdateArtist } from "@/services/queries/artist";
import { useGenres } from "@/services/queries/genre";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import uploadQueries from "@/services/queries/upload";
import { Artist } from "@/types/database";

interface ArtistFormProps {
  artist?: Artist;
  mode: "create" | "edit";
}

export default function ArtistForm({
  artist,
  mode = "create",
}: ArtistFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [bannerFile, setBannerFile] = useState<File | null>(null);

  const createMutation = useCreateArtist();
  const updateMutation = useUpdateArtist(artist?.slug || "");
  const { data: genres } = useGenres();

  const form = useForm<CreateArtistInput>({
    resolver: zodResolver(createArtistSchema),
    defaultValues: {
      name: artist?.name ?? "",
      description: artist?.description ?? "",
      imageUrl: artist?.imageUrl ?? "",
      bannerUrl: artist?.bannerUrl ?? "",
      nationality: artist?.nationality ?? "",
      genreIds: artist?.genres.map((genre) => genre.genreId) ?? [],
    },
  });

  const onSubmit = async (values: CreateArtistInput) => {
    try {
      setIsSubmitting(true);

      if (imageFile) {
        values.imageUrl = await uploadQueries.uploadImage(
          imageFile,
          "artist",
          "image"
        );
      }
      if (bannerFile) {
        values.bannerUrl = await uploadQueries.uploadImage(
          bannerFile,
          "artist",
          "banner"
        );
      }

      let response = null;

      if (mode === "create") {
        response = await createMutation.mutateAsync(values);
      } else {
        response = await updateMutation.mutateAsync(values);
      }

      if (response.success) {
        router.push("/admin/artists");
        router.refresh();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md flex flex-col items-center mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        {mode === "create" ? "Create New Artist" : "Edit Artist"}
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter artist name"
                    autoComplete="artist-name"
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
                    placeholder="Enter artist description"
                    autoComplete="artist-description"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nationality</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter artist nationality"
                    autoComplete="artist-nationality"
                    disabled={isSubmitting}
                  />
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
                  <FormLabel className="">Genres</FormLabel>
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
            <FormLabel>Image</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                placeholder="Upload artist image"
                autoComplete="artist-image"
                disabled={isSubmitting}
              />
            </FormControl>
            <FormMessage />
          </FormItem>

          <FormItem>
            <FormLabel>Banner</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setBannerFile(e.target.files?.[0] || null)}
                placeholder="Upload artist banner"
                autoComplete="artist-banner"
                disabled={isSubmitting}
              />
            </FormControl>
            <FormMessage />
          </FormItem>

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
