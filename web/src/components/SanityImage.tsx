import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";

type SanityImageSource = {
  asset?: { _id?: string; url?: string | null } | null;
  hotspot?: { x?: number; y?: number } | null;
  crop?: { top?: number; bottom?: number; left?: number; right?: number } | null;
};

type Props = {
  image: SanityImageSource | null | undefined;
  alt?: string | null;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  sizes?: string;
  quality?: number;
};

export function SanityImage({ image, alt, width, height, className, fill, sizes, quality = 75 }: Props) {
  if (!image?.asset) {
    return <div className={`bg-white/5 ${className ?? ""}`} style={fill ? { position: "absolute", inset: 0 } : { width, height }} />;
  }

  const source = {
    asset: image.asset ? { _id: image.asset._id, url: image.asset.url ?? undefined } : undefined,
  };
  const url = urlFor(source).auto("format").quality(quality).url();

  if (fill) {
    return <Image src={url} alt={alt ?? ""} fill sizes={sizes} quality={quality} className={className} />;
  }

  return <Image src={url} alt={alt ?? ""} width={width ?? 800} height={height ?? 600} quality={quality} className={className} />;
}
