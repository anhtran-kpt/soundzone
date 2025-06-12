import { Skeleton } from "../ui/skeleton";

export default function HeaderSkeleton() {
  return (
    <header className="sticky top-0 z-10 px-12 py-3 flex items-center justify-between transition-colors bg-background">
      <div className="flex items-center gap-4 flex-grow">
        <div className="space-x-2 flex items-center">
          <Skeleton className="w-9 h-9" />
          <Skeleton className="w-9 h-9" />
        </div>
        <Skeleton className="w-md h-8" />
      </div>
      <div className="flex items-center gap-3">
        <Skeleton className="w-9 h-9" />
        <Skeleton className="w-9 h-9" />
        <Skeleton className="w-9 h-9" />
        <Skeleton className="w-9 h-9" />
      </div>
    </header>
  );
}
