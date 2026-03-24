import type { LandingPageQueryResult } from "@/lib/sanity/generated/types";

type Section = Extract<
  NonNullable<NonNullable<LandingPageQueryResult>["sections"]>[number],
  { _type: "menuSection" }
>;

type Props = { data: Section };

export function MenuSection({ data }: Props) {
  return (
    <section id="menu" className="py-24 px-6 max-w-4xl mx-auto">
      {data.heading && (
        <h2 className="text-3xl font-extralight uppercase tracking-widest text-gold text-center mb-16">
          {data.heading}
        </h2>
      )}
      {data.categories?.map((category) => (
        <div key={category._key} className="mb-12 last:mb-0">
          {category.title && (
            <h3 className="text-lg uppercase tracking-widest font-medium mb-6 text-gold/80">
              {category.title}
            </h3>
          )}
          {category.items?.map((item) => (
            <div key={item._key} className="flex justify-between items-baseline py-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span>{item.name}</span>
                {item.badge && (
                  <span className="text-xs px-2 py-0.5 bg-gold/20 text-gold rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              {item.price != null && (
                <span className="text-gold font-extralight ml-4 shrink-0">
                  {item.price} Kč
                </span>
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
