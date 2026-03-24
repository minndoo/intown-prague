import type { LandingPageQueryResult } from "@/lib/sanity/generated/types";
import { SanityImage } from "@/components/SanityImage";

type Section = Extract<
  NonNullable<NonNullable<LandingPageQueryResult>["sections"]>[number],
  { _type: "gallerySection" }
>;

type Props = { data: Section };

export function GallerySection({ data }: Props) {
  return (
    <section className="py-24 px-6">
      {data.heading && (
        <h2 className="text-3xl font-extralight uppercase tracking-widest text-gold text-center mb-16">
          {data.heading}
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {data.images?.map((item) => (
          <div key={item._key} className="relative aspect-square overflow-hidden">
            {item.image ? (
              <SanityImage image={item.image} alt={item.alt} fill className="object-cover" />
            ) : (
              <div className="w-full h-full bg-white/5" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
