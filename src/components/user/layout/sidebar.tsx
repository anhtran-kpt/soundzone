"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Disc3Icon,
  PlusIcon,
  TrendingUpIcon,
} from "lucide-react";
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
  SidebarSeparator,
  SidebarMenuSkeleton,
} from "@/components/ui";
import Link from "next/link";
import { useUserFollowedArtists, useUserPlaylists } from "@/features/user";
import { useSession } from "next-auth/react";
import { useCreatePlaylist } from "@/features/playlist";
import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { FALLBACK_IMAGE } from "@/lib/constants";
import Dot from "@/components/shared/ui/dot";
import { Title } from "@/new-components/ui/title";

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
      <SidebarContent>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {isPlaylistLoading ? (
                <>
                  <SidebarMenuSkeleton />
                  <SidebarMenuSkeleton />
                  <SidebarMenuSkeleton />
                  <SidebarMenuSkeleton />
                </>
              ) : (
                playlists?.map((playlist) => (
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
                          <Title title={playlist.title} />
                          <div className="text-muted-foreground text-xs flex items-center gap-1">
                            Playlist
                            <Dot />
                            {playlist.user?.name}
                          </div>
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              )}
              {isArtistLoading ? (
                <>
                  <SidebarMenuSkeleton />
                  <SidebarMenuSkeleton />
                  <SidebarMenuSkeleton />
                  <SidebarMenuSkeleton />
                </>
              ) : (
                artists?.map((artist) => (
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
                          <Title title={artist.name} />
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
    </ShadcnSidebar>
  );
}
