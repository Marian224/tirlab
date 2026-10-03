"use client";

import { motion } from "framer-motion";
import { whyUs } from "@/data/content";

export default function WhyUs() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-graphite-950 border-t border-graphite-800">
      <div className="container-edge">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <h2 className="tech-label text-accent mb-6">05 / ABOUT</h2>
            <h3 className="font-display text-5xl md:text-6xl text-paper leading-[0.95]">
              WHY <br /> TIRE LAB
            </h3>
            <p className="text-graphite-400 mt-6 max-w-xs">
              Powstaliśmy z jednego założenia: opona to jedyny punkt kontaktu auta z drogą.
              Traktujemy ją odpowiednio poważnie.
            </p>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-14 lg:pt-2">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`relative ${i % 2 === 1 ? "sm:mt-14" : ""}`}
              >
                <span className="tech-label text-graphite-600 absolute -top-6 right-0">{`0${i + 1}`}</span>
                <div className="hairline mb-5" />
                <h4 className="font-display text-2xl text-paper mb-3">{item.title}</h4>
                <p className="text-graphite-400 text-sm max-w-xs">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
