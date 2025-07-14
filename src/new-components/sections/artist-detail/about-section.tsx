import { CldImage } from "next-cloudinary";
import { Skeleton } from "@/components/ui/skeleton";
import { TextSkeleton } from "@/new-components/ui/text-skeleton";
import { Section } from "@/new-components/ui/section";

interface AboutSectionProps {
  imagePublicId: string;
  name: string;
  description?: string;
}

export const AboutSection = ({
  imagePublicId,
  name,
  description,
}: AboutSectionProps) => {
  return (
    <Section heading="About">
      <div className="rounded-lg bg-card flex items-center justify-between gap-12 px-12 py-8">
        <div className="flex flex-col text-center shrink-0 gap-4">
          <div className="relative size-56 rounded-full overflow-hidden">
            <CldImage
              src={imagePublicId}
              alt={name}
              fill
              sizes="224px"
              className="object-cover rounded-full border-white border-2"
            />
          </div>
          <p className="font-medium">871.312 monthly listeners</p>
        </div>
        <div className="text-card-foreground">{description}</div>
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
