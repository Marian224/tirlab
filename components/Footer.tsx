import { Instagram } from "lucide-react";

const links = [
  { label: "SERVICES", href: "#services" },
  { label: "TIRES", href: "#tires" },
  { label: "PERFORMANCE", href: "#performance" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-graphite-950 border-t border-graphite-800 pt-20 pb-10">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-paper">
              LESZNO <span className="text-accent">TIRE LAB</span>
            </h2>
            <p className="tech-label text-graphite-500 mt-3">PERFORMANCE WITHOUT COMPROMISE.</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="tech-label text-graphite-400 hover:text-accent transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="tech-label text-graphite-400 hover:text-accent transition-colors duration-300 flex items-center gap-2"
            >
              <Instagram size={14} /> INSTAGRAM
            </a>
          </nav>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 tech-label text-graphite-600">
          <span>© 2026 LESZNO TIRE LAB</span>
          <span>WEBSITE BY RENFI DIGITAL</span>
        </div>
      </div>
    </footer>
  );
}
