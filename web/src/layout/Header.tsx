import type { SiteSettingsQueryResult } from "@/lib/sanity/generated/types";
import { SanityImage } from "@/components/SanityImage";
import { SmartLink } from "@/components/SmartLink";
import Link from "next/link";

type Props = {
  settings: SiteSettingsQueryResult;
};

export function Header({ settings }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="shrink-0">
          {settings?.logoWithText?.image ? (
            <div className="relative h-12 w-12">
              <SanityImage
                image={settings.logoWithText.image}
                alt={settings.logoWithText.alt ?? "INTOWN"}
                fill
                sizes="12rem"
                className="object-contain object-left"
              />
            </div>
          ) : (
            <span className="text-xl uppercase tracking-widest font-extralight">
              INTOWN
            </span>
          )}
        </Link>
        {settings?.navLinks && settings.navLinks.length > 0 && (
          <div className="hidden md:flex items-center gap-8">
            {settings.navLinks.map((link) => (
              <SmartLink
                key={link._key}
                linkType={link.linkType}
                href={link.href}
                path={link.path}
                fragment={link.fragment}
                className="text-sm uppercase tracking-widest font-extralight text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </SmartLink>
            ))}
          </div>
        )}
        {settings?.reservationLink?.label && (
          <SmartLink
            linkType={settings.reservationLink.linkType}
            href={settings.reservationLink.href}
            path={settings.reservationLink.path}
            fragment={settings.reservationLink.fragment}
            className="inline-block px-6 py-2 bg-white text-black rounded-full text-sm uppercase tracking-widest font-medium hover:bg-gold transition-colors"
          >
            {settings.reservationLink.label}
          </SmartLink>
        )}
      </nav>
    </header>
  );
}
