"use client";

import { HeaderSkeleton } from "@/components/shared";
import { UserHeader } from "@/components/user";
import UserSidebarProvider from "@/providers/user-sidebar-provider";
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
    <UserSidebarProvider>
      <div
        ref={scrollRef}
        className="flex flex-col h-screen w-full overflow-y-auto scroll-smooth"
      >
        {isRefReady ? (
          <UserHeader scrollContainerRef={scrollRef} />
        ) : (
          <HeaderSkeleton />
        )}
        <main className="flex-1 px-12 py-6">{children}</main>
      </div>
    </UserSidebarProvider>
  );
}
