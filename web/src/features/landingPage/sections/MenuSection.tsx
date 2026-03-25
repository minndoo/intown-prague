import type { LandingPageQueryResult } from "@/lib/sanity/generated/types";
import { SanityImage } from "@/components/SanityImage";

type Section = Extract<
  NonNullable<NonNullable<LandingPageQueryResult>["sections"]>[number],
  { _type: "menuSection" }
>;

type Props = { data: Section };

function CategoryBlock({ category }: { category: NonNullable<Section["categories"]>[number] }) {
  return (
    <div>
      {category.title && (
        <div className="mb-6">
          <h3 className="text-sm uppercase tracking-[0.3em] font-medium text-gold/80 text-center">
            {category.title}
          </h3>
          <div className="mt-2 border-t border-gold/30" />
        </div>
      )}
      {category.items?.map((item) => (
        <div key={item._key} className="flex justify-between items-baseline py-2.5">
          <span className="uppercase tracking-wider text-sm">{item.name}</span>
          {item.price != null && (
            <span className="text-gold/80 text-sm font-extralight ml-4 shrink-0 tabular-nums">
              {item.price}Kč
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export function MenuSection({ data }: Props) {
  const hasImage = !!data.image?.image;
  const categories = data.categories ?? [];

  // Split categories into left/right columns when image is present
  const mid = Math.ceil(categories.length / 2);
  const leftCategories = hasImage ? categories.slice(0, mid) : categories;
  const rightCategories = hasImage ? categories.slice(mid) : [];

  return (
    <section id={data.fragment ?? undefined} className="py-24 px-6 max-w-7xl mx-auto">
      {data.heading && (
        <h2 className="text-4xl font-extralight uppercase tracking-widest text-gold text-center mb-16">
          {data.heading}
        </h2>
      )}

      {hasImage ? (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="space-y-10">
            {leftCategories.map((cat) => (
              <CategoryBlock key={cat._key} category={cat} />
            ))}
          </div>

          {/* Center image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-64 xl:w-80 aspect-[3/5] rounded-[50%] overflow-hidden">
              <SanityImage
                image={data.image!.image}
                alt={data.image!.alt}
                fill
                sizes="(max-width: 1024px) 0px, 320px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-10">
            {rightCategories.map((cat) => (
              <CategoryBlock key={cat._key} category={cat} />
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-12">
          {leftCategories.map((cat) => (
            <CategoryBlock key={cat._key} category={cat} />
          ))}
        </div>
      )}
    </section>
  );
}
