"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-graphite-950">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=2400&auto=format&fit=crop"
          alt="Zbliżenie na oponę sportową w ciemnym studiu"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/60 to-graphite-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/80 via-transparent to-graphite-950/40" />
      </motion.div>

      <div className="grain absolute inset-0 mix-blend-overlay" />

      <motion.div style={{ opacity: textOpacity }} className="relative z-10 h-full container-edge flex flex-col justify-between pt-24 pb-10 md:pt-28 md:pb-14">
        <div className="flex items-start justify-between">
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="tech-label text-graphite-400 max-w-[10rem] leading-relaxed"
          >
            LESZNO / POLAND
            <br />
            AUTOMOTIVE PERFORMANCE LAB
          </motion.p>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-display text-6xl md:text-8xl text-graphite-700 leading-none select-none"
          >
            01
          </motion.span>
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-paper leading-[0.95] text-[13vw] md:text-[8vw] lg:text-[6.4vw] tracking-tight"
          >
            PERFORMANCE
            <br />
            STARTS FROM <span className="text-accent">THE ROAD.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <p className="text-graphite-400 text-base md:text-lg max-w-md font-body">
              Precyzyjny serwis opon dla kierowców, którzy oczekują więcej od swojego samochodu.
            </p>
            <a
              href="#contact"
              className="tech-label inline-flex items-center gap-3 border border-graphite-600 px-6 py-3 w-fit text-paper hover:border-accent hover:text-accent transition-colors duration-300"
            >
              BOOK SERVICE →
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-graphite-500"
      >
        <span className="tech-label">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>

      <svg className="absolute inset-0 z-0 pointer-events-none opacity-20" width="100%" height="100%">
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#54595F" strokeWidth="0.5" strokeDasharray="1 6" />
      </svg>
    </section>
  );
}
