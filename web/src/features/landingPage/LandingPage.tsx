import type { LandingPageQueryResult } from "@/lib/sanity/generated/types";
import { HeroSection } from "./sections/HeroSection";
import { SectionRenderer } from "./sections/SectionRenderer";

type Props = {
  data: NonNullable<LandingPageQueryResult>;
};

export function LandingPage({ data }: Props) {
  return (
    <>
      {data.heroSection && <HeroSection data={data.heroSection} />}
      {data.sections?.map((section) => (
        <SectionRenderer key={section._key} section={section} />
      ))}
    </>
  );
}
