"use client";

import {
  ChartNoAxesCombinedIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Disc3Icon,
  DiscAlbumIcon,
  HeartIcon,
  HistoryIcon,
  ListMusicIcon,
  ListPlusIcon,
  Mic2Icon,
} from "lucide-react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
  SidebarSeparator,
  Button,
} from "@/components/ui";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Discover",
    url: "/",
    icon: Disc3Icon,
  },
  {
    title: "Playlists",
    url: "/playlists",
    icon: ListMusicIcon,
  },
  {
    title: "Artists",
    url: "/artists",
    icon: Mic2Icon,
  },
  {
    title: "Albums",
    url: "/albums",
    icon: DiscAlbumIcon,
  },
  {
    title: "Top 100",
    url: "/top100",
    icon: ChartNoAxesCombinedIcon,
  },
];

export function Sidebar() {
  const { state, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <ShadcnSidebar collapsible="icon" className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="absolute top-1/2 -translate-y-1/2 -right-3 z-10 size-6 rounded-full bg-sidebar border border-border"
      >
        {state === "collapsed" ? (
          <ChevronRightIcon className="size-4" />
        ) : (
          <ChevronLeftIcon className="size-4" />
        )}
      </Button>
      <SidebarHeader>
        <Link href="/" className="flex flex-col items-center">
          <Logo className="size-8 fill-current" />
          <span
            className={`text-lg font-medium ${
              state === "collapsed" ? "invisible" : ""
            }`}
          >
            SoundZone
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
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
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/favorites">
                    <HeartIcon className="size-6" />
                    <span>Favorites</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/history">
                    <HistoryIcon className="size-6" />
                    <span>History</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/playlists/create">
                <ListPlusIcon className="size-6" />
                <span>Create playlist</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </ShadcnSidebar>
  );
}
