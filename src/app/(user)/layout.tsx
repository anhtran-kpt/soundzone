import { UserHeader } from "@/components/user";
import UserSidebarProvider from "@/providers/user-sidebar-provider";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserSidebarProvider>
      <main className="flex-1 overflow-y-scroll px-12">
        <UserHeader />
        {children}
      </main>
    </UserSidebarProvider>
  );
}
