import { SidebarProvider as ShadcnSidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/admin/layout";

export default function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ShadcnSidebarProvider>
      <Sidebar />
      {children}
    </ShadcnSidebarProvider>
  );
}
