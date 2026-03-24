import type { LandingPageQueryResult } from "@/lib/sanity/generated/types";
import { SanityImage } from "@/components/SanityImage";
import { PortableText } from "@/components/PortableText";

type Section = Extract<
  NonNullable<NonNullable<LandingPageQueryResult>["sections"]>[number],
  { _type: "imageTextSection" }
>;

type Props = { data: Section };

export function ImageTextSection({ data }: Props) {
  const imageLeft = data.imagePosition !== "right";

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className={imageLeft ? "order-1" : "order-1 md:order-2"}>
          {data.image?.image ? (
            <div className="relative aspect-[4/3] overflow-hidden">
              <SanityImage
                image={data.image.image}
                alt={data.image.alt}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="aspect-[4/3] bg-white/5" />
          )}
        </div>
        <div className={imageLeft ? "order-2" : "order-2 md:order-1"}>
          {data.heading && (
            <h2 className="text-3xl font-extralight uppercase tracking-widest text-gold mb-8">
              {data.heading}
            </h2>
          )}
          <PortableText value={data.body} className="text-white/80 leading-relaxed" />
        </div>
      </div>
    </section>
  );
}
