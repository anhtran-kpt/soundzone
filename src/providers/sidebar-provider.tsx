import { SidebarProvider as ShadcnSidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/user/app-sidebar";

export default function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ShadcnSidebarProvider>
      <AppSidebar />
      <main className="flex-1 overflow-y-scroll">{children}</main>
    </ShadcnSidebarProvider>
  );
}
