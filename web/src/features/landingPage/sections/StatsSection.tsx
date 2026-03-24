import type { LandingPageQueryResult } from "@/lib/sanity/generated/types";

type Section = Extract<
  NonNullable<NonNullable<LandingPageQueryResult>["sections"]>[number],
  { _type: "statsSection" }
>;

type Props = { data: Section };

export function StatsSection({ data }: Props) {
  return (
    <section className="py-24 px-6 bg-gold/10">
      {data.heading && (
        <h2 className="text-3xl font-extralight uppercase tracking-widest text-gold text-center mb-16">
          {data.heading}
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
        {data.stats?.map((stat) => (
          <div key={stat._key}>
            <p className="text-5xl font-extralight text-gold">{stat.value}</p>
            <p className="text-sm uppercase tracking-widest text-white/60 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
