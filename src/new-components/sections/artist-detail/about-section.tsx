"use client";

import { CldImage } from "next-cloudinary";
import { Skeleton } from "@/components/ui/skeleton";
import { TextSkeleton } from "@/new-components/ui/text-skeleton";
import { Section } from "@/new-components/ui/section";
import { useArtistInfo } from "@/features/artist/artist-queries";

export const AboutSection = ({ artistSlug }: { artistSlug: string }) => {
  const { data, isLoading } = useArtistInfo(artistSlug);

  if (isLoading || !data) {
    return <AboutSectionSkeleton />;
  }

  return (
    <Section heading="About">
      <div className="rounded-lg bg-card flex items-center justify-between gap-12 px-12 py-8">
        <div className="flex flex-col text-center shrink-0 gap-4">
          <div className="relative size-56 rounded-full overflow-hidden">
            <CldImage
              src={data.imagePublicId}
              alt={data.name}
              fill
              sizes="224px"
              className="object-cover rounded-full border-white border-2"
            />
          </div>
          <p className="font-medium">871.312 monthly listeners</p>
        </div>
        <div className="text-card-foreground">{data.description}</div>
      </div>
    </Section>
  );
};

export const AboutSectionSkeleton = () => {
  return (
    <Section heading="About">
      <div className="rounded-lg bg-card flex items-center justify-between gap-12 px-12 py-8">
        <div className="flex flex-col items-center shrink-0 gap-4">
          <div className="relative size-56 rounded-full overflow-hidden">
            <Skeleton className="size-56" />
          </div>
          <Skeleton className="w-32 h-4" />
        </div>
        <TextSkeleton lines={5} />
      </div>
    </Section>
  );
};
