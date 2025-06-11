import { AdminHeader } from "@/components/admin";
import AdminSidebarProvider from "@/providers/admin-sidebar-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AdminSidebarProvider>
      <main className="flex-1 overflow-y-scroll px-12">
        <AdminHeader />
        {children}
      </main>
    </AdminSidebarProvider>
  );
}
