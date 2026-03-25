import type { LandingPageQueryResult, SiteSettingsQueryResult } from "@/lib/sanity/generated/types";
import { HeroSection } from "./sections/HeroSection";
import { SectionRenderer } from "./sections/SectionRenderer";

type Props = {
  data: NonNullable<LandingPageQueryResult>;
  settings: SiteSettingsQueryResult;
};

export function LandingPage({ data, settings }: Props) {
  return (
    <>
      {data.heroSection && <HeroSection data={data.heroSection} />}
      {data.sections?.map((section) => (
        <SectionRenderer key={section._key} section={section} logo={settings?.logo} logoLight={settings?.logoLight} />
      ))}
    </>
  );
}
