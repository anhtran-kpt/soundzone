"use client";

import { AdminHeader } from "@/components/admin";
import { useCurrentTrack } from "@/hooks";
import { cn } from "@/lib/utils";
import AdminSidebarProvider from "@/providers/admin-sidebar-provider";
import { useRef } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentTrack = useCurrentTrack();

  return (
    <AdminSidebarProvider>
      <div
        ref={scrollRef}
        className={cn(
          "flex flex-col h-screen w-full overflow-y-auto scroll-smooth",
          currentTrack && "pb-21"
        )}
      >
        <AdminHeader scrollContainerRef={scrollRef} />
        <main className="flex-1 px-12 py-6 flex-col">{children}</main>
      </div>
    </AdminSidebarProvider>
  );
}
