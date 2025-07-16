"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const TextSkeleton = ({ lines = 3 }: { lines?: number }) => {
  return (
    <div className="space-y-2 w-full">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={`h-4 w-full`} />
      ))}
    </div>
  );
};
