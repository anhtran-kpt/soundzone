import { getQueryClient } from "@/lib/tanstack-query/get-query-client";
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

  const handleMouseEnter = () => {
    queryClient.prefetchQuery({
      queryKey: ["page-data", href],
      queryFn: () => fetchPageData(href),
    });
  };
  return (
    <Link
      href={href}
      onMouseEnter={handleMouseEnter}
      className={cn(
        "text-xs hover:text-primary hover:underline underline-offset-3 truncate",
        className
      )}
    >
      {children}
    </Link>
  );
};
