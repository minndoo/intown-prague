import type { LandingPageQueryResult } from "@/lib/sanity/generated/types";
import { SanityImage } from "@/components/SanityImage";

type Section = Extract<
  NonNullable<NonNullable<LandingPageQueryResult>["sections"]>[number],
  { _type: "featureGridSection" }
>;

type Props = { data: Section };

export function FeatureGridSection({ data }: Props) {
  return (
    <section id={data.fragment ?? undefined} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        {data.heading && (
          <h2 className="text-3xl font-extralight uppercase tracking-widest text-gold">
            {data.heading}
          </h2>
        )}
        {data.subtitle && (
          <p className="mt-4 text-white/60">{data.subtitle}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.features?.map((feature) => (
          <div key={feature._key} className="text-center">
            {feature.image?.image && (
              <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                <SanityImage
                  image={feature.image.image}
                  alt={feature.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            )}
            {feature.title && (
              <h3 className="text-sm uppercase tracking-widest font-medium mb-2">
                {feature.title}
              </h3>
            )}
            {feature.description && (
              <p className="text-sm text-white/60">{feature.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
