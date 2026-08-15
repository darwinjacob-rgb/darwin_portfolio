import { motion } from "framer-motion";
import { Code2, Layers, Palette, Sparkles, Wrench } from "lucide-react";
import { services } from "../data/profile";
import { SectionEyebrow } from "./About";

const ICONS = {
  fullstack: Code2,
  "web-experiences": Layers,
  uiux: Palette,
  "ai-apps": Sparkles,
  "real-world": Wrench,
};

export default function Services() {
  return (
    <section className="relative px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow label="What I Build" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICONS[service.id] ?? Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1"
              >
                <div
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-40"
                  style={{ background: "radial-gradient(circle, var(--color-neon-pink), transparent 70%)" }}
                />
                <Icon className="text-neon-pink" size={22} strokeWidth={1.6} />
                <h3 className="mt-5 font-display text-base font-semibold uppercase tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
