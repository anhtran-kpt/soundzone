"use client";

import QueryClientProvider from "./query-client-provider";
import SessionProvider from "./session-provider";
import ThemeProvider from "./theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <QueryClientProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
