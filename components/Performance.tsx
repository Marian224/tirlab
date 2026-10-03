"use client";

import { motion } from "framer-motion";
import { performanceStats } from "@/data/content";

export default function Performance() {
  return (
    <section id="performance" className="relative py-28 md:py-40 bg-graphite-950 border-t border-graphite-800 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1621361365424-06f0e1eb0b52?q=80&w=2200&auto=format&fit=crop"
          alt="Zbliżenie na felgę i oponę"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-950 via-graphite-950/85 to-graphite-950/40" />
      </div>

      <div className="container-edge relative z-10">
        <h2 className="tech-label text-accent mb-6">03 / PERFORMANCE</h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-semibold text-paper text-[11vw] md:text-6xl xl:text-7xl leading-[0.95] max-w-3xl"
        >
          BUILT FOR THE ROAD.
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-px bg-graphite-800 mt-16 md:mt-20">
          {performanceStats.map((stat, i) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-graphite-950/80 backdrop-blur-sm p-8"
            >
              <span className="tech-label text-graphite-500">{stat.number}</span>
              <div className="font-display text-5xl md:text-6xl text-accent mt-4 mb-3">{stat.value}</div>
              <h4 className="font-display text-lg text-paper mb-2">{stat.title}</h4>
              <p className="text-graphite-400 text-sm">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full h-24 opacity-30 pointer-events-none" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="0" stroke="#54595F" strokeWidth="0.5" strokeDasharray="2 8" />
      </svg>
    </section>
  );
}
