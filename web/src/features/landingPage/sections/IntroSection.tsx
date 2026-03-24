import type { LandingPageQueryResult } from "@/lib/sanity/generated/types";
import { PortableText } from "@/components/PortableText";

type Section = Extract<
  NonNullable<NonNullable<LandingPageQueryResult>["sections"]>[number],
  { _type: "introSection" }
>;

type Props = { data: Section };

export function IntroSection({ data }: Props) {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto text-center">
      {data.heading && (
        <h2 className="text-3xl font-extralight uppercase tracking-widest text-gold">
          {data.heading}
        </h2>
      )}
      <PortableText value={data.body} className="text-lg text-white/80 leading-relaxed mt-8" />
    </section>
  );
}
