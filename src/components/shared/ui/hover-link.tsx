import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HoverLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export const HoverLink = ({ href, className, children }: HoverLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-xs hover:text-primary hover:underline underline-offset-3 truncate",
        className
      )}
    >
      {children}
    </Link>
  );
};
