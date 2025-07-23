"use client";

import { Header } from "@/components/user/layout";
import { useCurrentTrack } from "@/hooks";
import { cn } from "@/lib/utils";
import UserSidebarProvider from "@/providers/user-sidebar-provider";
import { useRef } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const currentTrack = useCurrentTrack();

  return (
    <UserSidebarProvider>
      <div
        className={cn(
          "flex flex-col h-screen w-full relative",
          currentTrack && "pb-21"
        )}
      >
        <Header scrollContainerRef={scrollRef} />
        <main
          ref={scrollRef}
          className="flex-col flex-1 px-12 py-6 overflow-x-hidden overflow-y-auto scroll-smooth space-y-8"
        >
          {children}
        </main>
      </div>
    </UserSidebarProvider>
  );
}
