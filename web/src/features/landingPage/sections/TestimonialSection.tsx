import type { LandingPageQueryResult } from "@/lib/sanity/generated/types";

type Section = Extract<
  NonNullable<NonNullable<LandingPageQueryResult>["sections"]>[number],
  { _type: "testimonialSection" }
>;

type Props = { data: Section };

export function TestimonialSection({ data }: Props) {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto text-center">
      {data.heading && (
        <h2 className="text-3xl font-extralight uppercase tracking-widest text-gold mb-16">
          {data.heading}
        </h2>
      )}
      {data.testimonials?.map((t) => (
        <div key={t._key} className="mb-16 last:mb-0">
          <p className="text-gold text-6xl font-serif leading-none mb-4">&ldquo;</p>
          <blockquote className="text-2xl font-extralight leading-relaxed italic">
            {t.quote}
          </blockquote>
          <div className="mt-6">
            {t.author && <p className="text-sm uppercase tracking-widest">{t.author}</p>}
            {t.role && <p className="text-sm text-white/50 mt-1">{t.role}</p>}
          </div>
        </div>
      ))}
    </section>
  );
}
