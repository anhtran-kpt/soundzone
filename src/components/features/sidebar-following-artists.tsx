"use client";

import { useFollowingArtists } from "@/entities/user/queries";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
} from "../ui/sidebar";
import ErrorMessage from "./error-message";
import Link from "next/link";
import { CardTitle } from "../ui/card-title";
import { ArtistImage } from "./artist-image";

export const SidebarFollowingArtists = ({ userSlug }: { userSlug: string }) => {
  const { data: artists, isLoading, error } = useFollowingArtists(userSlug);

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
      {artists?.map((artist) => (
        <SidebarMenuItem key={artist.id}>
          <SidebarMenuButton asChild size="lg">
            <Link
              href={`/artists/${artist.slug}`}
              className="flex items-center gap-3"
            >
              <ArtistImage
                imagePublicId={artist.imagePublicId}
                name={artist.name}
                size="small"
              />
              <div className="space-y-0.5">
                <CardTitle title={artist.name} />
                <p className="text-muted-foreground text-xs">Artist</p>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};
