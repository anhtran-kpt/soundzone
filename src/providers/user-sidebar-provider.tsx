import { SidebarProvider as ShadcnSidebarProvider } from "@/components/ui/sidebar";
import { UserSidebar } from "@/components/user";

export default function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ShadcnSidebarProvider>
      <UserSidebar />
      {children}
    </ShadcnSidebarProvider>
  );
}
