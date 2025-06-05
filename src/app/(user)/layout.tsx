import { UserHeader, UserSidebar } from "@/components/user";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <UserSidebar />
      <div className="flex-1 flex flex-col">
        <UserHeader />
        <main className="flex-1 overflow-y-scroll p-6">{children}</main>
      </div>
    </div>
  );
}
