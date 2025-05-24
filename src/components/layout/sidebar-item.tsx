import Link from "next/link";
import { NavigationItem } from "@/components/layout/navigation";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  item: NavigationItem;
  expanded: boolean;
}

const SidebarItem = ({ item, expanded = true }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <li className="mb-1">
      <Link
        href={item.href}
        className={`flex items-center py-3 rounded-lg ${
          isActive ? "bg-primary" : "hover:bg-primary"
        }`}
      >
        <span className="text-primary-foreground">{item.icon}</span>
        {expanded && <span className="ml-3">{item.title}</span>}
      </Link>
    </li>
  );
};

export default SidebarItem;
