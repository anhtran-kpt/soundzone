import {
  ChartNoAxesCombinedIcon,
  Disc3Icon,
  DiscAlbumIcon,
  ListMusicIcon,
  ListPlusIcon,
  Mic2Icon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "../ui/sidebar";
import { Icon } from "../common";
import Link from "next/link";
import CustomTrigger from "./custom-trigger";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.svg";

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

export default function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="relative">
      <CustomTrigger />
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
                      pathname === item.url ||
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
