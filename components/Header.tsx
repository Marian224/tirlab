"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { n: "01", label: "SERVICES", href: "#services" },
  { n: "02", label: "TIRES", href: "#tires" },
  { n: "03", label: "PERFORMANCE", href: "#performance" },
  { n: "04", label: "ABOUT", href: "#about" },
  { n: "05", label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-graphite-950/90 backdrop-blur-md border-b border-graphite-700" : "bg-transparent"
        }`}
      >
        <div className="container-edge flex items-center justify-between h-16 md:h-20">
          <a href="#top" className="font-display font-semibold tracking-wide text-sm md:text-base text-paper">
            LESZNO <span className="text-accent">TIRE LAB</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="tech-label text-graphite-400 hover:text-paper transition-colors duration-300 flex items-center gap-2"
              >
                <span className="text-accent">{item.n}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex tech-label items-center gap-2 border border-graphite-600 px-5 py-2.5 text-paper hover:border-accent hover:text-accent transition-colors duration-300"
            >
              BOOK SERVICE
            </a>
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden text-paper p-2"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-graphite-950 flex flex-col justify-center container-edge lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  className="flex items-baseline gap-4 font-display text-4xl text-paper"
                >
                  <span className="tech-label text-accent text-sm">{item.n}</span>
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="tech-label mt-6 inline-flex w-fit items-center gap-2 border border-accent text-accent px-6 py-3"
              >
                BOOK SERVICE
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
