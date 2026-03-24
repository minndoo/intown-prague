const navLinks = [
  { label: "O nás", anchor: "o-nas" },
  { label: "Menu", anchor: "menu" },
  { label: "Zážitky", anchor: "zazitky" },
  { label: "Kontakt", anchor: "kontakt" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl uppercase tracking-widest font-extralight">
          INTOWN
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.anchor}
              href={`#${link.anchor}`}
              className="text-sm uppercase tracking-widest font-extralight text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#rezervace"
          className="inline-block px-6 py-2 bg-white text-black rounded-full text-sm uppercase tracking-widest font-medium hover:bg-gold transition-colors"
        >
          Rezervace
        </a>
      </nav>
    </header>
  );
}
