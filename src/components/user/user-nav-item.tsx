import Link from "next/link";
import Icon from "../common/icon";
import { LucideIcon } from "lucide-react";

export default function UserNavItem({
  label,
  href,
  icon,
  isActive,
}: {
  label: string;
  href: string;
  icon: LucideIcon;
  isActive?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 rounded-lg px-4 py-2 transition-colors
        ${
          isActive ? "bg-primary text-primary-foreground" : "hover:text-primary"
        }
      `}
    >
      <Icon icon={icon} />
      <span className="font-medium">{label}</span>
    </Link>
  );
}
