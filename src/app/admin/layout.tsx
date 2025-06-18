"use client";

import { AdminHeader } from "@/components/admin";
import AdminSidebarProvider from "@/providers/admin-sidebar-provider";
import { useRef } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <AdminSidebarProvider>
      <div
        ref={scrollRef}
        className="flex flex-col h-screen w-full overflow-y-auto scroll-smooth"
      >
        <AdminHeader scrollContainerRef={scrollRef} />
        <main className="flex-1 px-12 py-6">{children}</main>
      </div>
    </AdminSidebarProvider>
  );
}
