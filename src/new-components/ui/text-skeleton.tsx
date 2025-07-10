import { Skeleton } from "@/components/ui/skeleton";

export const TextSkeleton = ({ lines = 3 }: { lines?: number }) => {
  return (
    <div className="space-y-2 w-full">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={`h-4 ${getLineWidth(i, lines)}`} />
      ))}
    </div>
  );
};

function getLineWidth(index: number, total: number) {
  if (index !== total - 1) return "w-full";

  const randomWidths = ["w-[90%]", "w-[85%]", "w-[80%]", "w-[70%]", "w-[60%]"];
  const randomIndex = Math.floor(Math.random() * randomWidths.length);
  return randomWidths[randomIndex];
}
