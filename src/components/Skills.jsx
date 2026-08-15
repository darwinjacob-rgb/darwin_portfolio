import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { SectionEyebrow } from "./About";

const ORBIT_CATEGORIES = skillCategories.map((cat, i) => ({
  ...cat,
  angle: (360 / skillCategories.length) * i,
}));

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="relative px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow label="Tech Stack" />

        {/* Ecosystem visualization */}
        <div className="relative mx-auto mt-16 hidden h-[440px] max-w-2xl items-center justify-center md:flex">
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            {ORBIT_CATEGORIES.map((cat) => {
              const rad = (cat.angle * Math.PI) / 180;
              const cx = 50 + 38 * Math.cos(rad);
              const cy = 50 + 38 * Math.sin(rad);
              return (
                <line
                  key={cat.id}
                  x1="50%"
                  y1="50%"
                  x2={`${cx}%`}
                  y2={`${cy}%`}
                  stroke={hovered === cat.id ? "url(#lineGrad)" : "rgba(255,255,255,0.08)"}
                  strokeWidth={hovered === cat.id ? 1.5 : 1}
                />
              );
            })}
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--color-neon-red)" />
                <stop offset="100%" stopColor="var(--color-neon-pink)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="glass glow-pink relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full text-center">
            <span className="font-display text-sm font-bold text-ink">DARWIN</span>
            <span className="text-gradient font-display text-xs font-semibold">.DEV</span>
          </div>

          {ORBIT_CATEGORIES.map((cat) => {
            const rad = (cat.angle * Math.PI) / 180;
            const left = 50 + 38 * Math.cos(rad);
            const top = 50 + 38 * Math.sin(rad);
            return (
              <motion.button
                key={cat.id}
                data-cursor-hover
                onMouseEnter={() => setHovered(cat.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(cat.id)}
                onBlur={() => setHovered(null)}
                whileHover={{ scale: 1.08 }}
                className="glass absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-xl px-4 py-2.5 text-center transition-shadow"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  boxShadow: hovered === cat.id ? "0 0 30px -6px rgba(255,45,85,0.5)" : "none",
                }}
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink">
                  {cat.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Category cards */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-neon-pink">
                {cat.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    data-cursor-hover
                    className="group relative rounded-lg border border-line px-3 py-1.5 font-mono text-xs text-ink/85 transition-all hover:-translate-y-0.5 hover:border-neon-pink/60 hover:text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
