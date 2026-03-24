import type { SiteSettingsQueryResult } from "@/lib/sanity/generated/types";

type Props = {
  settings: SiteSettingsQueryResult;
};

export function Footer({ settings }: Props) {
  if (!settings) return null;

  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <p className="text-xl uppercase tracking-widest font-extralight text-gold">
              INTOWN
            </p>
            {settings.copyrightText && (
              <p className="text-sm text-white/40 mt-4">{settings.copyrightText}</p>
            )}
          </div>
          {settings.socialLinks && settings.socialLinks.length > 0 && (
            <div>
              <p className="text-sm uppercase tracking-widest text-white/40 mb-4">
                Sledujte nás
              </p>
              <div className="flex gap-6">
                {settings.socialLinks.map((link) => (
                  <a
                    key={link._key}
                    href={link.url ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold hover:text-white transition-colors capitalize"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
