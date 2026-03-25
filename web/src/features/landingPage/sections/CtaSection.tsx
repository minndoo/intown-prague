import type { LandingPageQueryResult, SiteSettingsQueryResult } from "@/lib/sanity/generated/types";
import { SanityImage } from "@/components/SanityImage";
import { CtaButton } from "@/components/CtaButton";

type Section = Extract<
  NonNullable<NonNullable<LandingPageQueryResult>["sections"]>[number],
  { _type: "ctaSection" }
>;

type Props = {
  data: Section;
  logoLight?: NonNullable<SiteSettingsQueryResult>["logoLight"];
};

export function CtaSection({ data, logoLight }: Props) {
  return (
    <section id={data.fragment ?? undefined} className="py-24 px-6 text-center bg-gold/5">
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
      {data.body && (
        <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">{data.body}</p>
      )}
      {data.cta && (
        <div className="mt-10">
          <CtaButton cta={data.cta} />
        </div>
      )}
    </section>
  );
}
