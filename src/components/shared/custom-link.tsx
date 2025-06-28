"use client";

import NextLink, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, forwardRef } from "react";

type CustomLinkProps = LinkProps &
  ComponentPropsWithoutRef<"a"> & {
    className?: string;
  };

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ href, className, children, ...props }, ref) => {
    return (
      <NextLink
        href={href}
        ref={ref}
        className={cn(
          "underline-offset-2 hover:text-primary hover:underline",
          className
        )}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);

CustomLink.displayName = "CustomLink";

export default CustomLink;
