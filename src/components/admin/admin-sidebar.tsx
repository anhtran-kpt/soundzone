"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DiscAlbumIcon,
  HeartIcon,
  HistoryIcon,
  LayoutDashboardIcon,
  ListPlusIcon,
  Mic2Icon,
  MusicIcon,
  UsersIcon,
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
import { Icon } from "@/components/shared";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.svg";
import { Button } from "../ui/button";

const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Artists",
    url: "/admin/artists",
    icon: Mic2Icon,
  },
  {
    title: "Albums",
    url: "/admin/albums",
    icon: DiscAlbumIcon,
  },
  {
    title: "Genres",
    url: "/admin/genres",
    icon: MusicIcon,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: UsersIcon,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { state, toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="relative">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleSidebar}
        className="absolute top-1/2 -translate-y-1/2 -right-3 z-10 size-6 rounded-full bg-sidebar border border-border"
      >
        {state === "collapsed" ? (
          <Icon icon={ChevronRightIcon} className="size-4" />
        ) : (
          <Icon icon={ChevronLeftIcon} className="size-4" />
        )}
      </Button>
      <SidebarHeader>
        <Link href="/admin" className="flex flex-col items-center">
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
                      item.url === "/admin"
                        ? pathname === "/admin"
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
