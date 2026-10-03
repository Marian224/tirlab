"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-36 md:py-56 bg-graphite-950 border-t border-graphite-800 overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2400&auto=format&fit=crop"
          alt="Samochód sportowy na drodze o zmierzchu"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/70 to-graphite-950/40" />
      </div>

      <div className="container-edge relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold text-paper text-[12vw] md:text-6xl xl:text-7xl leading-[0.95]"
        >
          READY FOR <span className="text-accent">BETTER CONTROL?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#contact"
            className="tech-label inline-flex items-center gap-3 bg-accent text-graphite-950 px-8 py-4 hover:bg-accent-glow transition-colors duration-300"
          >
            BOOK YOUR SERVICE →
          </a>
          <a
            href="#contact"
            className="tech-label inline-flex items-center gap-3 border border-graphite-600 px-8 py-4 text-paper hover:border-paper transition-colors duration-300"
          >
            CONTACT US
          </a>
        </motion.div>
      </div>
    </section>
  );
}
