import { SidebarProvider as ShadcnSidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin";

export default function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ShadcnSidebarProvider>
      <AdminSidebar />
      {children}
    </ShadcnSidebarProvider>
  );
}
