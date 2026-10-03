"use client";

import { motion } from "framer-motion";

const words = ["NOT", "JUST", "TIRES.", "PRECISION."];
const pillars = ["01 PRECISION", "02 PERFORMANCE", "03 CONTROL"];

export default function BrandStatement() {
  return (
    <section className="relative py-28 md:py-36 border-t border-graphite-800 bg-graphite-950">
      <div className="container-edge grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          <h2 className="font-display font-semibold text-paper text-[11vw] leading-[0.95] lg:text-6xl xl:text-7xl flex flex-wrap gap-x-4">
            {words.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={w === "PRECISION." ? "text-accent" : ""}
              >
                {w}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 text-graphite-400 text-lg max-w-lg font-body"
          >
            Dobór opon, montaż, wyważanie i serwis stworzone z myślą o kierowcach,
            którzy wymagają więcej od swojego samochodu.
          </motion.p>
        </div>

        <div className="lg:col-span-4 flex lg:flex-col justify-between gap-6 lg:pt-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i + 0.2, duration: 0.5 }}
              className="tech-label text-graphite-500 border-t border-graphite-700 pt-3"
            >
              {p}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
