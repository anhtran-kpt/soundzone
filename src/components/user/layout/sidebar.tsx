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
  SidebarMenuSkeleton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { FALLBACK_IMAGE } from "@/lib/constants";
import Dot from "@/components/ui/dot";
import { CardTitle } from "@/components/ui/card-title";
import { useMutation, useQuery } from "@tanstack/react-query";
import { userKeys } from "@/lib/tanstack-query/query-keys";
import fetcher from "@/lib/api/fetcher";
import { endpoints } from "@/lib/api/endpoints";
import { poster } from "@/lib/api/poster";
import { CreatePlaylistReturn } from "@/types/playlist";
import { FollowingArtists, UserPlaylists } from "@/types/user";

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

  const { data: playlists, isLoading: isPlaylistsLoading } = useQuery({
    queryKey: userKeys.playlists(userSlug),
    queryFn: fetcher<UserPlaylists>(endpoints.user.playlists(userSlug)),
    enabled: !!userSlug,
  });

  const { data: followingArtists, isLoading: isArtistsLoading } = useQuery({
    queryKey: userKeys.followingArtists(userSlug),
    queryFn: fetcher<FollowingArtists>(
      endpoints.user.followingArtists(userSlug)
    ),
    enabled: !!userSlug,
  });

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
                {isPlaylistsLoading || !playlists ? (
                  <>
                    <SidebarMenuSkeleton />
                    <SidebarMenuSkeleton />
                    <SidebarMenuSkeleton />
                    <SidebarMenuSkeleton />
                  </>
                ) : (
                  playlists.map((playlist) => (
                    <SidebarMenuItem key={playlist.id}>
                      <SidebarMenuButton asChild size="lg">
                        <Link
                          href={`/playlists/${playlist.slug}`}
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
                            <CardTitle title={playlist.title} />
                            <div className="text-muted-foreground text-xs flex items-center gap-1">
                              Playlist
                              <Dot />
                              {session?.user.name}
                            </div>
                          </div>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))
                )}
                {isArtistsLoading ? (
                  <>
                    <SidebarMenuSkeleton />
                    <SidebarMenuSkeleton />
                    <SidebarMenuSkeleton />
                    <SidebarMenuSkeleton />
                  </>
                ) : (
                  followingArtists?.map((artist) => (
                    <SidebarMenuItem key={artist.id}>
                      <SidebarMenuButton asChild size="lg">
                        <Link
                          href={`/artists/${artist.slug}`}
                          className="flex items-center gap-3"
                        >
                          <div className="relative size-10 shrink-0 rounded-full overflow-hidden">
                            <CldImage
                              src={artist.imagePublicId}
                              alt={artist.name}
                              fill
                              className="size-10 rounded-full"
                              sizes="40px"
                              priority
                            />
                          </div>
                          <div className="space-y-0.5">
                            <CardTitle title={artist.name} />
                            <p className="text-muted-foreground text-xs">
                              Artist
                            </p>
                          </div>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))
                )}
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
