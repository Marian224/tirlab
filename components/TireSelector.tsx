"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { carBrands, carModels, tireSizes, seasons } from "@/data/content";

function Select({
  label,
  value,
  options,
  onChange,
  disabled,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  disabled?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="tech-label text-graphite-500">{label}</span>
      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border border-graphite-600 text-paper font-display text-lg px-4 py-3 focus:border-accent outline-none disabled:opacity-40 disabled:cursor-not-allowed appearance-none"
      >
        <option value="" className="bg-graphite-900">
          —
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-graphite-900">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function TireSelector() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [size, setSize] = useState("");
  const [season, setSeason] = useState("");

  const complete = brand && model && size && season;

  return (
    <section className="relative py-28 md:py-36 bg-graphite-950 border-t border-graphite-800">
      <div className="container-edge grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="tech-label text-accent mb-4">02 / CONFIGURATOR</h2>
          <h3 className="font-display text-4xl md:text-5xl text-paper leading-[1.02]">FIND YOUR SETUP</h3>
          <p className="text-graphite-400 mt-5 max-w-sm">
            Wybierz markę, model, rozmiar i sezon — pokażemy rekomendowany setup opon.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <Select
              label="CAR BRAND"
              value={brand}
              options={carBrands}
              onChange={(v) => {
                setBrand(v);
                setModel("");
              }}
            />
            <Select
              label="CAR MODEL"
              value={model}
              options={brand ? carModels[brand] ?? [] : []}
              onChange={setModel}
              disabled={!brand}
            />
            <Select label="TIRE SIZE" value={size} options={tireSizes} onChange={setSize} />
            <Select label="SEASON" value={season} options={seasons} onChange={setSeason} />
          </div>

          <AnimatePresence mode="wait">
            {complete && (
              <motion.div
                key={`${brand}-${model}-${size}-${season}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45 }}
                className="mt-10 border border-graphite-700 p-8 md:p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 h-full w-1 bg-accent" />
                <span className="tech-label text-accent">RECOMMENDED SETUP</span>
                <div className="grid sm:grid-cols-3 gap-6 mt-6">
                  <div>
                    <span className="tech-label text-graphite-500 block mb-1">TIRE SIZE</span>
                    <span className="font-display text-2xl text-paper">{size}</span>
                  </div>
                  <div>
                    <span className="tech-label text-graphite-500 block mb-1">SEASON</span>
                    <span className="font-display text-2xl text-paper">{season}</span>
                  </div>
                  <div>
                    <span className="tech-label text-graphite-500 block mb-1">CATEGORY</span>
                    <span className="font-display text-2xl text-paper">PERFORMANCE</span>
                  </div>
                </div>
                <p className="text-graphite-400 text-sm mt-6 max-w-md">
                  Setup dobrany dla {brand} {model}. Ostateczna specyfikacja potwierdzana jest podczas wizyty w
                  warsztacie.
                </p>
                <a
                  href="#contact"
                  className="tech-label inline-flex items-center gap-3 border border-graphite-600 px-6 py-3 mt-6 text-paper hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  BOOK THIS SETUP →
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
