"use client";

import { UserHeader } from "@/components/user";
import UserSidebarProvider from "@/providers/user-sidebar-provider";
import { useRef } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <UserSidebarProvider>
      <div
        ref={scrollRef}
        className="flex flex-col h-screen w-full overflow-y-auto scroll-smooth"
      >
        <UserHeader scrollContainerRef={scrollRef} />
        <main className="flex-1 px-12 py-6">{children}</main>
      </div>
    </UserSidebarProvider>
  );
}
