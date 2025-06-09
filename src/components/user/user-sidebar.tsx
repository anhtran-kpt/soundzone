"use client";

import {
  ChartNoAxesCombinedIcon,
  Disc3Icon,
  DiscAlbumIcon,
  LibraryIcon,
  MicVocalIcon,
  PlusIcon,
} from "lucide-react";
import UserNavItem from "./user-nav-item";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Icon from "../common/icon";
import Link from "next/link";
import Logo from "@/assets/logo.svg";

const navItems = [
  {
    label: "Discover",
    href: "/",
    icon: Disc3Icon,
  },
  {
    label: "Library",
    href: "/library",
    icon: LibraryIcon,
  },
  {
    label: "Chart",
    href: "/chart",
    icon: ChartNoAxesCombinedIcon,
  },
  {
    label: "Artists",
    href: "/artists",
    icon: MicVocalIcon,
  },
  {
    label: "Albums",
    href: "/albums",
    icon: DiscAlbumIcon,
  },
];

export default function UserSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-56 flex flex-col bg-secondary px-4">
      <Link href="/" className="flex items-center justify-center pt-4 pb-6">
        <Logo className="fill-current" />
      </Link>
      <div className="flex flex-col gap-2 flex-grow">
        {navItems.map((item) => (
          <UserNavItem
            key={item.label}
            {...item}
            isActive={pathname === item.href}
          />
        ))}
      </div>
      <Separator className="my-4 text-muted-foreground" />
      <Button variant="ghost" className="w-full justify-start gap-2">
        <Icon icon={PlusIcon} />
        <span className="font-medium">Create Playlist</span>
      </Button>
    </div>
  );
}
