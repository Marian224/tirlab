"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/content";

export default function Process() {
  return (
    <section className="relative py-28 md:py-36 bg-graphite-950 border-t border-graphite-800">
      <div className="container-edge">
        <h2 className="tech-label text-accent mb-14 md:mb-20">07 / HOW IT WORKS</h2>

        <div className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-graphite-700" />
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-px bg-graphite-700" />

          <div className="grid md:grid-cols-4 gap-10 md:gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative pl-14 md:pl-0"
              >
                <div className="absolute left-0 top-0 md:relative md:mb-6 w-3 h-3 rounded-full bg-accent md:mx-0" />
                <span className="tech-label text-graphite-500 block mb-2">{step.number}</span>
                <h3 className="font-display text-2xl text-paper mb-2">{step.title}</h3>
                <p className="text-graphite-400 text-sm max-w-[14rem]">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
