"use client";

import { Disc3Icon, PlusIcon, TrendingUpIcon } from "lucide-react";
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
  SidebarSeparator,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { endpoints } from "@/lib/api/endpoints";
import { poster } from "@/lib/api/poster";
import { SidebarPlaylists } from "@/components/features/sidebar-playlists";
import { SidebarFollowingArtists } from "@/components/features/sidebar-following-artists";

const items = [
  {
    title: "Discover",
    url: "/",
    icon: Disc3Icon,
  },
  {
    title: "Trending",
    url: "/trending",
    icon: TrendingUpIcon,
  },
];

export function Sidebar() {
  const { state, toggleSidebar } = useSidebar();
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const userSlug = session?.user.slug ?? "";

  const { mutateAsync: createPlaylist } = useMutation({
    mutationFn: poster<void, CreatePlaylistReturn>(endpoints.playlist.create()),
    onSuccess(data) {
      router.push(
        endpoints.user.playlistDetail({ userSlug, playlistSlug: data.slug })
      );
    },
  });

  return (
    <ShadcnSidebar collapsible="icon">
      <SidebarHeader></SidebarHeader>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={
                    item.url === "/"
                      ? pathname === "/"
                      : pathname === item.url ||
                        pathname.startsWith(`${item.url}/`)
                  }
                >
                  <Link href={item.url}>
                    <item.icon className="size-6" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarSeparator />
      {status === "unauthenticated" ? (
        <div className="h-full flex items-center justify-center">
          <Link href="/sign-in">Login now</Link>
        </div>
      ) : (
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarPlaylists userSlug={userSlug} />
                <SidebarFollowingArtists userSlug={userSlug} />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      )}
      <SidebarFooter>
        <Button
          type="button"
          onClick={() => createPlaylist()}
          size="sm"
          variant="outline"
        >
          <PlusIcon className="size-4" />
          Create playlist
        </Button>
      </SidebarFooter>
    </ShadcnSidebar>
  );
}
