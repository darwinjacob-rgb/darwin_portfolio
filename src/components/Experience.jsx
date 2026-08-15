import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experienceTimeline } from "../data/experience";
import { SectionEyebrow } from "./About";

export default function Experience() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="experience" className="relative px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionEyebrow label="Experience & Journey" />

        <div className="relative mt-14 space-y-4">
          <div className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-neon-red via-neon-pink to-magenta/40 sm:block" />

          {experienceTimeline.map((item, i) => {
            const open = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative sm:pl-10"
              >
                <span className="absolute left-0 top-6 hidden h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-neon-pink ring-4 ring-void sm:block" />

                <button
                  onClick={() => setOpenId(open ? null : item.id)}
                  data-cursor-hover
                  className="glass w-full rounded-2xl p-5 text-left transition-colors hover:border-neon-pink/40 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs tracking-[0.2em] text-neon-pink">
                        {item.year} · {item.category.toUpperCase()}
                      </span>
                      <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">
                        {item.title}
                      </h3>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-mist transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </div>

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-mist">
                          {item.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
