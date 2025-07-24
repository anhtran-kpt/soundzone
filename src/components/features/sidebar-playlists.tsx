"use client";

import { useUserPlaylists } from "@/entities/user/queries";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
} from "../ui/sidebar";
import ErrorMessage from "./error-message";
import Link from "next/link";
import { Title } from "../ui/title";
import Dot from "../ui/dot";
import { CldImage } from "next-cloudinary";
import { FALLBACK_IMAGE } from "@/lib/constants";

export const SidebarPlaylists = ({ userSlug }: { userSlug: string }) => {
  const { data: playlists, isLoading, error } = useUserPlaylists(userSlug);

  if (isLoading) {
    return (
      <SidebarMenu>
        <SidebarMenuSkeleton />
        <SidebarMenuSkeleton />
        <SidebarMenuSkeleton />
      </SidebarMenu>
    );
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <SidebarMenu>
      {playlists?.map((playlist) => (
        <SidebarMenuItem key={playlist.id}>
          <SidebarMenuButton asChild size="lg">
            <Link
              href={`/users/${userSlug}/playlists/${playlist.slug}`}
              className="flex items-center gap-3"
            >
              <div className="relative size-10 shrink-0 rounded-sm overflow-hidden">
                <CldImage
                  src={playlist.coverPublicId ?? FALLBACK_IMAGE!}
                  alt={playlist.title}
                  fill
                  className="size-10 rounded-sm"
                  sizes="40px"
                  priority
                />
              </div>
              <div className="space-y-0.5">
                <Title title={playlist.title} />
                <div className="text-muted-foreground text-xs flex items-center gap-1">
                  Playlist
                  {playlist.user && (
                    <>
                      <Dot />
                      {playlist.user.name}
                    </>
                  )}
                </div>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};
