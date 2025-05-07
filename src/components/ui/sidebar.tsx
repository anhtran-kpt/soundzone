"use client";

import Link from "next/link";
import {
  AudioLinesIcon,
  BookUserIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Disc3Icon,
  DiscAlbumIcon,
  LayoutDashboardIcon,
  UserRoundIcon,
  UsersRoundIcon,
} from "lucide-react";
import { useState } from "react";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const session = useSession();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className={`flex flex-col ${
        sidebarOpen ? "w-64" : "w-20"
      } bg-primary text-primary-foreground relative transition-all duration-300`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-1/2 -right-3 bg-blue-900 rounded-full size-6 flex justify-center items-center"
      >
        {sidebarOpen ? (
          <ChevronLeftIcon size={16} />
        ) : (
          <ChevronRightIcon size={16} />
        )}
      </button>
      <div className="h-20 py-4 flex items-center justify-center text-2xl font-bold">
        {sidebarOpen ? "SoundZone" : <AudioLinesIcon size={32} />}
      </div>
      <nav className="flex-1 overflow-y-auto px-6">
        <ul>
          <SidebarItem
            icon={<LayoutDashboardIcon size={20} />}
            text="Dashboard"
            active={true}
            expanded={sidebarOpen}
          />
          <SidebarItem
            icon={<Disc3Icon size={20} />}
            text="Songs"
            expanded={sidebarOpen}
          />
          <SidebarItem
            icon={<BookUserIcon size={20} />}
            text="Artists"
            expanded={sidebarOpen}
          />
          <SidebarItem
            icon={<DiscAlbumIcon size={20} />}
            text="Albums"
            expanded={sidebarOpen}
          />
          <SidebarItem
            icon={<UsersRoundIcon size={20} />}
            text="Users"
            expanded={sidebarOpen}
          />
        </ul>
      </nav>
      <div
        className={`${
          sidebarOpen ? "" : "flex justify-center"
        } py-4 px-6 border-t border-primary-foreground`}
      >
        <div className="flex items-center">
          <div className="size-8 border-primary-foreground bg-blue-900 rounded-full flex items-center justify-center">
            <UserRoundIcon size={16} />
          </div>
          {sidebarOpen && (
            <div className="ml-3">
              <div className="text-sm font-medium">
                {session.data?.user.name}
              </div>
              <div className="text-xs text-blue-500">
                {session.data?.user.email}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const SidebarItem = ({ icon, text, active = false, expanded = true }) => {
  return (
    <li className="mb-1">
      <Link
        href="#"
        className={`flex items-center py-3 rounded-lg ${
          active ? "bg-primary" : "hover:bg-primary"
        }`}
      >
        <span className="text-primary-foreground">{icon}</span>
        {expanded && <span className="ml-3">{text}</span>}
      </Link>
    </li>
  );
};
