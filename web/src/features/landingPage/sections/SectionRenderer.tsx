import type { LandingPageQueryResult, SiteSettingsQueryResult } from "@/lib/sanity/generated/types";
import { IntroSection } from "./IntroSection";
import { FeatureGridSection } from "./FeatureGridSection";
import { ImageTextSection } from "./ImageTextSection";
import { StatsSection } from "./StatsSection";
import { GallerySection } from "./GallerySection";
import { TestimonialSection } from "./TestimonialSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";
import { ContactSection } from "./ContactSection";
import { MenuSection } from "./MenuSection";

type Section = NonNullable<NonNullable<LandingPageQueryResult>["sections"]>[number];

type Logo = NonNullable<SiteSettingsQueryResult>["logo"];
type LogoLight = NonNullable<SiteSettingsQueryResult>["logoLight"];

type Props = {
  section: Section;
  logo?: Logo;
  logoLight?: LogoLight;
};

export function SectionRenderer({ section, logo, logoLight }: Props) {
  switch (section._type) {
    case "introSection":
      return <IntroSection data={section} logoLight={logoLight} />;
    case "featureGridSection":
      return <FeatureGridSection data={section} />;
    case "imageTextSection":
      return <ImageTextSection data={section} logo={logo} />;
    case "statsSection":
      return <StatsSection data={section} />;
    case "gallerySection":
      return <GallerySection data={section} />;
    case "testimonialSection":
      return <TestimonialSection data={section} />;
    case "faqSection":
      return <FaqSection data={section} />;
    case "ctaSection":
      return <CtaSection data={section} logoLight={logoLight} />;
    case "contactSection":
      return <ContactSection data={section} />;
    case "menuSection":
      return <MenuSection data={section} />;
    default:
      return null;
  }
}
