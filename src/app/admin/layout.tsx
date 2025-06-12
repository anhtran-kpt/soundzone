"use client";

import { AdminHeader } from "@/components/admin";
import { HeaderSkeleton } from "@/components/shared";
import AdminSidebarProvider from "@/providers/admin-sidebar-provider";
import { useRef, useState, useLayoutEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isRefReady, setIsRefReady] = useState(false);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      setIsRefReady(true);
    }
  }, []);

  return (
    <AdminSidebarProvider>
      <div
        ref={scrollRef}
        className="flex flex-col h-screen w-full overflow-y-auto scroll-smooth"
      >
        {isRefReady ? (
          <AdminHeader scrollContainerRef={scrollRef} />
        ) : (
          <HeaderSkeleton />
        )}
        <main className="flex-1 px-12 py-6">{children}</main>
      </div>
    </AdminSidebarProvider>
  );
}
