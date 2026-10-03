"use client";

import { motion } from "framer-motion";
import { tireShowcase } from "@/data/content";

const images = [
  "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1400&auto=format&fit=crop",
];

export default function ProductShowcase() {
  return (
    <section id="tires" className="relative py-28 md:py-36 bg-graphite-900 border-t border-graphite-800">
      <div className="container-edge">
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <h2 className="tech-label text-accent">04 / SELECTED PERFORMANCE</h2>
          <span className="hidden md:block tech-label text-graphite-500">DEMO SPEC — NOT FOR SALE</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tireShowcase.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group border border-graphite-700 hover:border-graphite-500 transition-colors duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={images[i]}
                  alt={t.name}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/90 via-transparent to-transparent" />
                <span className="tech-label absolute top-4 left-4 text-paper bg-graphite-950/70 px-2 py-1">
                  {t.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-paper mb-1">{t.name}</h3>
                <span className="tech-label text-accent">{t.size}</span>
                <p className="text-graphite-400 text-sm mt-3 mb-5">{t.description}</p>
                <a
                  href="#contact"
                  className="tech-label inline-flex items-center gap-2 text-graphite-300 hover:text-accent transition-colors duration-300"
                >
                  ENQUIRE →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
