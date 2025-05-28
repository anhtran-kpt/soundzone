import {
  ChartNoAxesCombinedIcon,
  Disc3Icon,
  DiscAlbumIcon,
  LibraryIcon,
  MicVocalIcon,
} from "lucide-react";
import UserSidebarItem from "./user-sidebar-item";

const navItems = [
  {
    label: "Discover",
    href: "/",
    icon: <Disc3Icon />,
  },
  {
    label: "Library",
    href: "/library",
    icon: <LibraryIcon />,
  },
  {
    label: "Chart",
    href: "/chart",
    icon: <ChartNoAxesCombinedIcon />,
  },
  {
    label: "Artists",
    href: "/artists",
    icon: <MicVocalIcon />,
  },
  {
    label: "Albums",
    href: "/albums",
    icon: <DiscAlbumIcon />,
  },
];

export default function UserSidebar() {
  return (
    <div className="w-56 flex flex-col bg-secondary">
      <div></div>
      <div>
        {navItems.map((item) => (
          <UserSidebarItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}
