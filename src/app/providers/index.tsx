"use client";

import QueryProvider from "./query-provider";
import SessionProvider from "./session-provider";
import ThemeProvider from "./theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <QueryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryProvider>
    </SessionProvider>
  );
}
