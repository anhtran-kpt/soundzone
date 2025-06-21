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
import { FullArtist } from "@/lib/types";
import { updateArtistAction } from "@/app/actions/artist";
import { createArtistAction } from "@/app/actions/artist";
import { toast } from "sonner";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import Image from "next/image";
import { UploadIcon } from "lucide-react";
import { Icon } from "@/components/common";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";

interface ArtistFormProps {
  artist?: FullArtist;
  mode: "create" | "edit";
}

export default function ArtistForm({
  artist,
  mode = "create",
}: ArtistFormProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);

  const form = useForm<CreateArtistInput>({
    resolver: zodResolver(createArtistSchema),
    defaultValues: {
      name: artist?.name ?? "",
      description: artist?.description ?? "",
      nationality: artist?.nationality ?? "",
      imagePublicId: artist?.imagePublicId ?? "",
      bannerPublicId: artist?.bannerPublicId ?? "",
    },
  });

  const onSubmit = async (values: CreateArtistInput) => {
    form.clearErrors();
    try {
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
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-center">
          {mode === "create" ? "New Artist" : "Edit Artist"}
        </CardTitle>
      </CardHeader>
      <CardContent>
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

            <FormField
              control={form.control}
              name="imagePublicId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Artist image</FormLabel>
                  {imagePreview && (
                    <div className="flex justify-center items-center">
                      <div className="relative rounded-lg overflow-hidden size-48 aspect-square">
                        <Image
                          src={imagePreview}
                          alt="Artist image preview"
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
                        folder: "soundzone/artists/images",
                        resourceType: "image",
                      }}
                      onSuccess={(results, widget) => {
                        const info = results.info as CloudinaryUploadWidgetInfo;
                        field.onChange(info.public_id);
                        setImagePreview(info.secure_url);
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
                            Upload Image
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
              control={form.control}
              name="bannerPublicId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Artist banner</FormLabel>
                  {bannerPreview && (
                    <div className="flex justify-center items-center">
                      <div className="relative rounded-lg overflow-hidden size-48 aspect-square">
                        <Image
                          src={bannerPreview}
                          alt="Artist banner preview"
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
                        folder: "soundzone/artists/banners",
                        resourceType: "image",
                      }}
                      onSuccess={(results, widget) => {
                        const info = results.info as CloudinaryUploadWidgetInfo;
                        field.onChange(info.public_id);
                        setBannerPreview(info.secure_url);
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
      </CardContent>
    </Card>
  );
}
