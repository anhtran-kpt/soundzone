"use client";

import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "lucide-react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
  Button,
} from "@/components/ui";
import Link from "next/link";
import { useUserFollowedArtists, useUserPlaylists } from "@/features/user";
import { useSession } from "next-auth/react";
import { useCreatePlaylist } from "@/features/playlist";

export function Sidebar() {
  const { state, toggleSidebar } = useSidebar();
  const { data: session, status } = useSession();

  const slug = session?.user.slug ?? "";

  const { data: playlists, isLoading: isPlaylistLoading } =
    useUserPlaylists(slug);

  const { data: artists, isLoading: isArtistLoading } =
    useUserFollowedArtists(slug);

  const { mutateAsync: createPlaylist } = useCreatePlaylist();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please login to use the sidebar</div>;
  }

  return (
    <ShadcnSidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="size-6"
            >
              {state === "collapsed" ? (
                <ChevronRightIcon className="size-5" />
              ) : (
                <ChevronLeftIcon className="size-5" />
              )}
            </Button>
            <span className="font-semibold">Your Library</span>
          </div>
          <Button
            type="button"
            variant="outline"
            className="rounded-full"
            onClick={() => createPlaylist(slug)}
          >
            <PlusIcon className="size-4" />
            Create playlist
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {isPlaylistLoading ? (
                <SidebarMenuItem>Loading playlists...</SidebarMenuItem>
              ) : (
                playlists?.map((playlist) => (
                  <SidebarMenuItem key={playlist.id}>
                    <SidebarMenuButton asChild>
                      <Link href={`/playlists/${playlist.slug}`}>
                        {playlist.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              )}
              {isArtistLoading ? (
                <SidebarMenuItem>Loading followed artists...</SidebarMenuItem>
              ) : (
                artists?.map((artist) => (
                  <SidebarMenuItem key={artist.id}>
                    <SidebarMenuButton asChild>
                      <Link href={`/artists/${artist.slug}`}>
                        {artist.name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
}
