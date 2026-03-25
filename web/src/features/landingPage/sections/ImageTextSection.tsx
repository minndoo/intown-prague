import type { LandingPageQueryResult, SiteSettingsQueryResult } from "@/lib/sanity/generated/types";
import { SanityImage } from "@/components/SanityImage";
import { PortableText } from "@/components/PortableText";

type Section = Extract<
  NonNullable<NonNullable<LandingPageQueryResult>["sections"]>[number],
  { _type: "imageTextSection" }
>;

type Props = {
  data: Section;
  logo?: NonNullable<SiteSettingsQueryResult>["logo"];
};

export function ImageTextSection({ data, logo }: Props) {
  const imageLeft = data.imagePosition !== "right";

  return (
    <section id={data.fragment ?? undefined} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className={imageLeft ? "order-1" : "order-1 md:order-2"}>
          {data.image?.image ? (
            <div className="relative aspect-[4/3] overflow-hidden">
              <SanityImage
                image={data.image.image}
                alt={data.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="aspect-[4/3] bg-white/5" />
          )}
        </div>
        <div className={imageLeft ? "order-2" : "order-2 md:order-1"}>
          {logo?.image && (
            <div className="mb-6">
              <SanityImage
                image={logo.image}
                alt={logo.alt ?? ""}
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </div>
          )}
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
