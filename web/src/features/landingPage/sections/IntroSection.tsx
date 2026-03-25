import type { LandingPageQueryResult, SiteSettingsQueryResult } from "@/lib/sanity/generated/types";
import { PortableText } from "@/components/PortableText";
import { SanityImage } from "@/components/SanityImage";

type Section = Extract<
  NonNullable<NonNullable<LandingPageQueryResult>["sections"]>[number],
  { _type: "introSection" }
>;

type Props = {
  data: Section;
  logoLight?: NonNullable<SiteSettingsQueryResult>["logoLight"];
};

export function IntroSection({ data, logoLight }: Props) {
  return (
    <section id={data.fragment ?? undefined} className="py-24 px-6 max-w-4xl mx-auto text-center">
      {logoLight?.image && (
        <div className="flex justify-center mb-6">
          <SanityImage
            image={logoLight.image}
            alt={logoLight.alt ?? ""}
            width={48}
            height={48}
            className="h-12 w-auto"
          />
        </div>
      )}
      {data.heading && (
        <h2 className="text-3xl font-extralight uppercase tracking-widest text-gold">
          {data.heading}
        </h2>
      )}
      <PortableText value={data.body} className="text-lg text-white/80 leading-relaxed mt-8" />
    </section>
  );
}
