"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const TICKS = 8;

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const unsub = smoothProgress.on("change", (v) => setPercent(Math.round(v * 100)));
    return () => unsub();
  }, [smoothProgress]);

  return (
    <div
      className="fixed left-5 md:left-7 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center"
      aria-hidden="true"
    >
      <span className="tech-label text-graphite-500 mb-3" style={{ fontSize: "0.6rem" }}>
        {String(percent).padStart(3, "0")}
      </span>
      <div className="relative h-52 w-px bg-graphite-600">
        {Array.from({ length: TICKS + 1 }).map((_, i) => (
          <span
            key={i}
            className="absolute left-0 w-2 h-px bg-graphite-600"
            style={{ top: `${(i / TICKS) * 100}%` }}
          />
        ))}
        <motion.div
          className="absolute left-0 top-0 w-px bg-accent"
          style={{ height: "100%", scaleY: smoothProgress, transformOrigin: "top", boxShadow: "0 0 8px 1px rgba(255,61,26,0.6)" }}
        />
        <motion.div
          className="absolute -left-[3px] w-[7px] h-[7px] rounded-full bg-accent"
          style={{ top: smoothProgress, translateY: "-50%" }}
        />
      </div>
      <span className="tech-label text-graphite-500 mt-3" style={{ fontSize: "0.6rem" }}>
        LTL
      </span>
    </div>
  );
}
