"use client";

import { CldImage } from "next-cloudinary";
import { Skeleton } from "@/components/ui/skeleton";
import { TextSkeleton } from "@/components/ui/text-skeleton";
import SectionHeading from "@/components/ui/section-heading";
import ErrorMessage from "../features/error-message";
import { useAbout } from "@/entities/artist/queries/use-about";

export const ArtistAbout = ({ artistSlug }: { artistSlug: string }) => {
  const { data, status, error } = useAbout(artistSlug);

  if (status === "pending") {
    return <ArtistAboutSkeleton />;
  }

  if (status === "error") {
    return <ErrorMessage error={error} />;
  }

  return (
    <section>
      <SectionHeading heading="About" />
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
          <p className="font-medium">{data.followers} followers</p>
        </div>
        <div className="text-card-foreground">{data.description}</div>
      </div>
    </section>
  );
};

export const ArtistAboutSkeleton = () => {
  return (
    <section>
      <SectionHeading heading="About" />
      <div className="rounded-lg bg-card flex items-center justify-between gap-12 px-12 py-8">
        <div className="flex flex-col items-center shrink-0 gap-4">
          <div className="relative size-56 rounded-full overflow-hidden">
            <Skeleton className="size-56" />
          </div>
          <Skeleton className="w-32 h-4" />
        </div>
        <TextSkeleton lines={5} />
      </div>
    </section>
  );
};
