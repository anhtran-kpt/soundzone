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
import { useGetUserBySlug } from "@/hooks/use-users";
import { useSession } from "next-auth/react";
import { customSlugify } from "@/lib/utils";
import { useCreatePlaylist } from "@/hooks";

export function Sidebar() {
  const { state, toggleSidebar } = useSidebar();
  const { data: sessionData } = useSession();
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useGetUserBySlug(sessionData?.user.slug ?? "");

  const { mutateAsync: createPlaylist } = useCreatePlaylist();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!sessionData || !user) {
    return <div>Please sign in</div>;
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
            onClick={() => createPlaylist()}
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
              {user.playlists.map((playlist) => (
                <SidebarMenuItem key={playlist.id}>
                  <SidebarMenuButton asChild>
                    <Link href={`/playlists/${playlist.slug}`}>
                      <span>{playlist.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
}
