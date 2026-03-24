type Props = {
  cta: {
    label?: string | null;
    linkType?: "internal" | "external" | null;
    href?: string | null;
    anchor?: string | null;
  } | null | undefined;
};

export function CtaButton({ cta }: Props) {
  if (!cta?.label) return null;

  const href = cta.linkType === "internal" ? `#${cta.anchor ?? ""}` : cta.href ?? "#";

  return (
    <a
      href={href}
      className="inline-block px-8 py-3 bg-white text-black rounded-full text-sm uppercase tracking-widest font-medium hover:bg-gold hover:text-black transition-colors"
    >
      {cta.label}
    </a>
  );
}
