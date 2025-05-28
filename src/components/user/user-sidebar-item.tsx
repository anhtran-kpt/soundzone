import { cn } from "@/lib/utils";

export default function UserSidebarItem({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="size-6">{icon}</div>
      <span>{label}</span>
    </div>
  );
}
