import { getQueryClient } from "@/lib/get-query-client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const NavLink = ({ href, children, className }: NavLinkProps) => {
  const queryClient = getQueryClient();
  let timer: NodeJS.Timeout | null = null;

  const handleMouseEnter = () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      queryClient.prefetchQuery({
        queryKey: ["page-data", href],
        queryFn: () => fetchPageData(href),
      });
    }, 100);
  };
  return (
    <Link
      href={href}
      onMouseEnter={handleMouseEnter}
      prefetch={true}
      className={cn(
        "text-xs hover:text-primary hover:underline underline-offset-3 truncate font-medium",
        className
      )}
    >
      {children}
    </Link>
  );
};
