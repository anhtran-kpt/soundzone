"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchUserFollowedArtists,
  fetchUserInfo,
  fetchUserPlaylists,
  signUpUser,
} from "./user-services";
import { useRouter } from "next/navigation";
import { SignUpInput } from "./user-schemas";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

const keys = {
  all: ["users"] as const,
  info: (userSlug: string) => [...keys.all, userSlug, "info"] as const,
  detail: (userSlug: string) => [...keys.all, userSlug, "detail"] as const,
  playlists: (userSlug: string) =>
    [...keys.detail(userSlug), "playlists"] as const,
  followedArtists: (userSlug: string) =>
    [...keys.detail(userSlug), "followed-artists"] as const,
} as const;

export const useUserInfo = (userSlug: string) => {
  return useQuery({
    queryKey: keys.info(userSlug),
    queryFn: ({ signal }) => fetchUserInfo(userSlug, signal),
    enabled: !!userSlug,
  });
};

export const useUserPlaylists = (userSlug: string) => {
  return useQuery({
    queryKey: keys.playlists(userSlug),
    queryFn: ({ signal }) => fetchUserPlaylists(userSlug, signal),
    enabled: !!userSlug,
  });
};

export const useUserFollowedArtists = (userSlug: string) => {
  return useQuery({
    queryKey: keys.followedArtists(userSlug),
    queryFn: ({ signal }) => fetchUserFollowedArtists(userSlug, signal),
    enabled: !!userSlug,
  });
};

export const useSignUp = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: SignUpInput) => signUpUser(data),
    onSuccess: async (user) => {
      toast.success("Signed up successfully");

      await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      });

      if (user.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/");
      }
      router.refresh();
    },
    onError: (error) => {
      toast.error(`Signed up failed: ${error.message}`);
      console.error("Signed up failed:", error);
    },
  });
};
