import type { LandingPageQueryResult } from "@/lib/sanity/generated/types";
import { CtaButton } from "@/components/CtaButton";

type Section = Extract<
  NonNullable<NonNullable<LandingPageQueryResult>["sections"]>[number],
  { _type: "ctaSection" }
>;

type Props = { data: Section };

export function CtaSection({ data }: Props) {
  return (
    <section className="py-24 px-6 text-center bg-gold/5">
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
