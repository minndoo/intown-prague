import type { LandingPageQueryResult } from "@/lib/sanity/generated/types";

type Section = Extract<
  NonNullable<NonNullable<LandingPageQueryResult>["sections"]>[number],
  { _type: "contactSection" }
>;

type Props = { data: Section };

export function ContactSection({ data }: Props) {
  return (
    <section id="kontakt" className="py-24 px-6 max-w-6xl mx-auto">
      {data.heading && (
        <h2 className="text-3xl font-extralight uppercase tracking-widest text-gold text-center mb-16">
          {data.heading}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {data.locations?.map((loc) => (
          <div key={loc._key} className="border border-white/10 p-8">
            {loc.locationName && (
              <h3 className="text-lg uppercase tracking-widest font-medium mb-4">
                {loc.locationName}
              </h3>
            )}
            {loc.address && <p className="text-white/70 mb-2">{loc.address}</p>}
            {loc.phone && (
              <p className="mb-2">
                <a href={`tel:${loc.phone}`} className="text-gold hover:text-white transition-colors">
                  {loc.phone}
                </a>
              </p>
            )}
            {loc.email && (
              <p className="mb-2">
                <a href={`mailto:${loc.email}`} className="text-gold hover:text-white transition-colors">
                  {loc.email}
                </a>
              </p>
            )}
            {loc.openingHours && (
              <p className="text-white/50 text-sm mt-4 whitespace-pre-line">{loc.openingHours}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
