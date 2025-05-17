"use client";

import { FormControl, FormMessage } from "@/components/ui/form";
import { FormItem, FormLabel, FormField, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Artist } from "@/app/generated/prisma";
import { CreateArtistDto, createArtistSchema } from "@/schemas";
import { useCreateArtist, useUpdateArtist } from "@/hooks";
import { useRouter } from "next/navigation";
import { Calendar } from "@/components/ui/calendar";
import { PopoverContent } from "@/components/ui/popover";
import { Popover } from "@/components/ui/popover";
import { PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

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

  const createMutation = useCreateArtist();
  const updateMutation = useUpdateArtist(artist?.slug || "");

  const form = useForm<CreateArtistDto>({
    resolver: zodResolver(createArtistSchema),
    defaultValues: {
      name: artist?.name || "",
      bio: artist?.bio || "",
      avatarUrl: artist?.avatarUrl || "",
      bannerUrl: artist?.bannerUrl || "",
      dateOfBirth: artist?.dateOfBirth || new Date(),
      nationality: artist?.nationality || "",
    },
  });

  const onSubmit = async (values: CreateArtistDto) => {
    try {
      setIsSubmitting(true);
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
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter artist bio"
                    autoComplete="artist-bio"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of Birth</FormLabel>
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
            name="avatarUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Avatar</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter artist avatar url"
                    autoComplete="artist-avatar"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bannerUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Banner</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter artist banner url"
                    autoComplete="artist-banner"
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
