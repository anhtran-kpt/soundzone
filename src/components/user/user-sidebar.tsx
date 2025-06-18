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
  Sidebar,
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
} from "../ui/sidebar";
import { Icon } from "../common";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import { Button } from "../ui/button";
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

export default function UserSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="relative">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleSidebar}
        className="absolute top-1/2 -translate-y-1/2 -right-3 z-10 size-6 rounded-full"
      >
        {state === "collapsed" ? (
          <Icon icon={ChevronRightIcon} className="size-4" />
        ) : (
          <Icon icon={ChevronLeftIcon} className="size-4" />
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
                      <Icon icon={item.icon} className="size-6" />
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
                    <Icon icon={HeartIcon} className="size-6" />
                    <span>Favorites</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/history">
                    <Icon icon={HistoryIcon} className="size-6" />
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
                <Icon icon={ListPlusIcon} className="size-6" />
                <span>Create playlist</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
