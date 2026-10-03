"use client";

import { motion } from "framer-motion";
import { galleryImages } from "@/data/content";

export default function Gallery() {
  return (
    <section className="relative py-28 md:py-36 bg-graphite-900 border-t border-graphite-800">
      <div className="container-edge">
        <h2 className="tech-label text-accent mb-14 md:mb-20">06 / WORKSHOP</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className={`relative overflow-hidden group ${img.span} ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-graphite-950/10 group-hover:bg-graphite-950/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
