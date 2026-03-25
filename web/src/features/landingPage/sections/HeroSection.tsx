import type { LandingPageQueryResult } from "@/lib/sanity/generated/types";
import { SanityImage } from "@/components/SanityImage";

type Props = {
  data: NonNullable<NonNullable<LandingPageQueryResult>["heroSection"]>;
};

export function HeroSection({ data }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center">
      {data.backgroundImage?.image ? (
        <>
          <SanityImage
            image={data.backgroundImage.image}
            alt={data.backgroundImage.alt}
            fill
            sizes="100vw"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-black" />
      )}
      <div className="relative z-10 px-6 max-w-4xl">
        {data.tagline && (
          <h1 className="text-5xl md:text-7xl font-extralight uppercase tracking-widest">
            {data.tagline}
          </h1>
        )}
        {data.subtitle && (
          <p className="mt-6 text-lg md:text-xl text-white/70 font-extralight">
            {data.subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
