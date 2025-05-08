import {
  BookUserIcon,
  Disc3Icon,
  DiscAlbumIcon,
  LayoutDashboardIcon,
  MusicIcon,
  UsersRoundIcon,
} from "lucide-react";

export type NavigationItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
  children?: NavigationItem[];
};

export const navigationItems: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: <LayoutDashboardIcon size={20} />,
  },
  {
    title: "Songs",
    href: "/admin/songs",
    icon: <Disc3Icon size={20} />,
  },
  {
    title: "Artists",
    href: "/admin/artists",
    icon: <BookUserIcon size={20} />,
  },
  {
    title: "Albums",
    href: "/admin/albums",
    icon: <DiscAlbumIcon size={20} />,
  },
  {
    title: "Genres",
    href: "/admin/genres",
    icon: <MusicIcon size={20} />,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: <UsersRoundIcon size={20} />,
  },
];
