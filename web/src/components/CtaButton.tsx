import { SmartLink } from "./SmartLink";

type Props = {
  cta: {
    label?: string | null;
    linkType?: "internal" | "external" | null;
    href?: string | null;
    path?: string | null;
    fragment?: string | null;
  } | null | undefined;
};

export function CtaButton({ cta }: Props) {
  if (!cta?.label) return null;

  return (
    <SmartLink
      linkType={cta.linkType}
      href={cta.href}
      path={cta.path}
      fragment={cta.fragment}
      className="inline-block px-8 py-3 bg-white text-black rounded-full text-sm uppercase tracking-widest font-medium hover:bg-gold hover:text-black transition-colors"
    >
      {cta.label}
    </SmartLink>
  );
}
