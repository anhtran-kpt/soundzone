import { SidebarProvider as ShadcnSidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/user/layout";

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
