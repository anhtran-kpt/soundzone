"use client";

import { FormControl, FormMessage } from "@/components/ui/form";
import { FormItem, FormLabel, FormField, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CreateGenreInput, createGenreSchema } from "@/lib/validations";
import { createGenreAction } from "@/app/actions/genre";
import { toast } from "sonner";

export default function GenreForm() {
  const form = useForm<CreateGenreInput>({
    resolver: zodResolver(createGenreSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: CreateGenreInput) => {
    form.clearErrors();

    try {
      if (mode === "create") {
        await createGenreAction(values);
      } else {
        await updateGenreAction(genre?.id as string, values);
      }
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes("exists")) {
        form.setError("name", { message: error.message });
      }

      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  return (
    <div className="max-w-md flex flex-col items-center mx-auto">
      <h2 className="text-2xl font-bold mb-6">New Genre</h2>
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
                    disabled={form.formState.isSubmitting}
                  />
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
            {form.formState.isSubmitting ? "Creating..." : "Create"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
