"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-graphite-900 border-t border-graphite-800">
      <div className="container-edge">
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <h2 className="tech-label text-accent">01 / SERVICES</h2>
          <span className="hidden md:block tech-label text-graphite-500">LESZNO / TIRE LAB</span>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-graphite-800">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative bg-graphite-900 p-8 md:p-10 min-h-[280px] flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/[0.06] group-hover:to-transparent transition-all duration-500" />
              <div className="absolute -right-6 -bottom-8 font-display text-[9rem] leading-none text-graphite-800 group-hover:text-graphite-700 transition-colors duration-500 select-none">
                {s.number}
              </div>

              <div className="relative z-10 flex items-start justify-between">
                <span className="tech-label text-graphite-500">{s.number}</span>
                <ArrowUpRight
                  size={20}
                  className="text-graphite-500 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </div>

              <div className="relative z-10">
                <h3 className="font-display text-2xl md:text-3xl text-paper mb-3">{s.title}</h3>
                <p className="text-graphite-400 text-sm max-w-xs">{s.short}</p>
                <p className="text-graphite-500 text-sm max-w-xs mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 overflow-hidden transition-all duration-500">
                  {s.long}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
