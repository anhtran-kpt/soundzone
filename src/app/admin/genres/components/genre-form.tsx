"use client";

import { FormControl, FormMessage } from "@/components/ui/form";
import { FormItem, FormLabel, FormField, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { genreSchema } from "@/schemas/genre-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { genreService } from "@/services/client/genre-service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type GenreFormValues = z.infer<typeof genreSchema>;

interface GenreFormProps {
  initialData?: GenreFormValues;
  isEditing?: boolean;
}

export default function GenreForm({
  initialData,
  isEditing = false,
}: GenreFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<GenreFormValues>({
    resolver: zodResolver(genreSchema),
    defaultValues: initialData || {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (data: GenreFormValues) => {
    try {
      setIsLoading(true);
      if (isEditing) {
        // await genreService.updateGenre(data);
        toast.success("Genre updated successfully");
      } else {
        await genreService.createGenre(data);
        toast.success("Genre created successfully");
      }
      router.push("/admin/genres");
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
                  disabled={isLoading}
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
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading
            ? "Processing..."
            : isEditing
            ? "Update Genre"
            : "Create Genre"}
        </Button>
      </form>
    </Form>
  );
}
