"use client";

import { FormControl, FormMessage } from "@/components/ui/form";
import { FormItem, FormLabel, FormField, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { Genre } from "@/app/generated/prisma";
import { CreateGenreDto, createGenreSchema } from "@/features/genre/schemas";
import { useCreateGenre, useUpdateGenre } from "@/features/genre/hooks";
import { useRouter } from "next/navigation";

interface GenreFormProps {
  genre?: Genre;
  mode: "create" | "edit";
}

export default function GenreForm({ genre, mode = "create" }: GenreFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createMutation = useCreateGenre();
  const updateMutation = useUpdateGenre(genre?.slug || "");

  const form = useForm<CreateGenreDto>({
    resolver: zodResolver(createGenreSchema),
    defaultValues: {
      name: genre?.name || "",
      description: genre?.description || "",
    },
  });

  const onSubmit = async (values: CreateGenreDto) => {
    try {
      setIsSubmitting(true);
      let response = null;

      if (mode === "create") {
        response = await createMutation.mutateAsync(values);
      } else {
        response = await updateMutation.mutateAsync(values);
      }

      if (response.success) {
        router.push("/admin/genres");
        router.refresh();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        {mode === "create" ? "Create New Genre" : "Edit Genre"}
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
                    placeholder="Enter genre name"
                    autoComplete="genre-name"
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
                    placeholder="Enter genre description"
                    autoComplete="genre-description"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isSubmitting}>
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
