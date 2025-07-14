"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface SectionProps {
  heading: string;
  href?: string;
  children: ReactNode;
}

export const Section = ({ heading, children, href }: SectionProps) => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl select-none mb-4 capitalize">
          {heading}
        </h2>
        {href && (
          <Button asChild type="button" variant="link">
            <Link href={href}>Show all</Link>
          </Button>
        )}
      </div>
      {children}
    </section>
  );
};
