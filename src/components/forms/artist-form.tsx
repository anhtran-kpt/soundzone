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
import { uploadArtistImage } from "@/lib/queries/upload";
import { FullArtist } from "@/lib/types";
import { updateArtistAction } from "@/app/actions/artist";
import { createArtistAction } from "@/app/actions/artist";
import { toast } from "sonner";
import { customSlugify } from "@/lib/helpers";

interface ArtistFormProps {
  artist?: FullArtist;
  mode: "create" | "edit";
}

export default function ArtistForm({
  artist,
  mode = "create",
}: ArtistFormProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const form = useForm<CreateArtistInput>({
    resolver: zodResolver(createArtistSchema),
    defaultValues: {
      name: artist?.name ?? "",
      description: artist?.description ?? "",
      imagePublicId: artist?.imagePublicId ?? "",
      nationality: artist?.nationality ?? "",
    },
  });

  const onSubmit = async (values: CreateArtistInput) => {
    form.clearErrors();
    try {
      if (imageFile) {
        values.imagePublicId = await uploadArtistImage(
          imageFile,
          customSlugify(values.name)
        );
      }

      if (mode === "create") {
        await createArtistAction(values);
      } else {
        await updateArtistAction(artist?.id as string, values);
      }
    } catch (error: unknown) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  return (
    <div className="max-w-md flex flex-col items-center mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        {mode === "create" ? "New Artist" : "Edit Artist"}
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
                    disabled={form.formState.isSubmitting}
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
                    disabled={form.formState.isSubmitting}
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
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
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
                disabled={form.formState.isSubmitting}
              />
            </FormControl>
            <FormMessage />
          </FormItem>

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full"
          >
            {form.formState.isSubmitting
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
