import type { LandingPageQueryResult } from "@/lib/sanity/generated/types";
import { PortableText } from "@/components/PortableText";

type Section = Extract<
  NonNullable<NonNullable<LandingPageQueryResult>["sections"]>[number],
  { _type: "faqSection" }
>;

type Props = { data: Section };

export function FaqSection({ data }: Props) {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      {data.heading && (
        <h2 className="text-3xl font-extralight uppercase tracking-widest text-gold text-center mb-16">
          {data.heading}
        </h2>
      )}
      {data.items?.map((item) => (
        <details key={item._key} className="group">
          <summary className="py-4 border-b border-white/10 cursor-pointer text-lg list-none flex justify-between items-center">
            {item.question}
            <span className="text-gold ml-4 group-open:rotate-45 transition-transform">+</span>
          </summary>
          <PortableText value={item.answer} className="py-4 text-white/70" />
        </details>
      ))}
    </section>
  );
}
