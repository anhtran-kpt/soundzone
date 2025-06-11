"use client";

import QueryProvider from "./query-provider";
import SessionProvider from "./session-provider";
import SidebarProvider from "./sidebar-provider";
import ThemeProvider from "./theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <QueryProvider>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </QueryProvider>
    </SessionProvider>
  );
}
