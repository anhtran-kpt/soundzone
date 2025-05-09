"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CreateUserDto, createUserSchema, User } from "../schemas";
import { useCreateUser, useUpdateUser } from "../hooks";

type UserFormProps = {
  user?: User;
  mode: "create" | "edit";
};

export function UserForm({ user, mode = "create" }: UserFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createMutation = useCreateUser();
  const updateMutation = useUpdateUser(user?.id || "");

  const form = useForm<CreateUserDto>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: user?.name || "",
      // Add more fields as needed
    },
  });

  const onSubmit = async (values: CreateUserDto) => {
    try {
      setIsSubmitting(true);

      if (mode === "create") {
        await createMutation.mutateAsync(values);
      } else {
        await updateMutation.mutateAsync(values);
      }

      // Navigate back to list on success
      router.push("/users");
      router.refresh();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        {mode === "create" ? "Create New User" : "Edit User"}
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
                  <Input placeholder="User name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Add more form fields here */}

          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? mode === "create"
                  ? "Creating..."
                  : "Updating..."
                : mode === "create"
                ? "Create"
                : "Update"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
