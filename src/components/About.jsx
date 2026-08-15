import { motion } from "framer-motion";
import { profile, interests } from "../data/profile";

const PROFILE_FIELDS = [
  { label: "Role", value: profile.title },
  { label: "Education", value: profile.degree },
  { label: "Year", value: profile.year },
  { label: "Graduation", value: profile.graduation },
  { label: "Location", value: profile.location },
  { label: "Status", value: "Building" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow label="About Me" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl leading-relaxed text-ink/90 sm:text-2xl">
              <span className="font-display font-semibold">Darwin Jacob.N</span> is a 2nd-year
              B.E. Computer Science and Engineering student at{" "}
              <span className="text-gradient font-medium">SIMATS Engineering</span> in Chennai.
            </p>

            <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
              He is focused on full stack development, web development, UI/UX, and building
              real-world projects — with a constant curiosity for exploring new technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {interests.map((interest, i) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-wider text-mist"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass clip-corner rounded-2xl p-6"
          >
            <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
                developer_profile.json
              </span>
              <span className="h-2 w-2 rounded-full bg-neon-red animate-pulse" />
            </div>

            <dl className="space-y-4">
              {PROFILE_FIELDS.map((field, i) => (
                <motion.div
                  key={field.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-center justify-between gap-4 border-b border-line/60 pb-3 last:border-none last:pb-0"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-mist">
                    {field.label}
                  </dt>
                  <dd className="text-right font-display text-sm font-medium text-ink">
                    {field.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionEyebrow({ label, align = "left" }) {
  return (
    <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
      <span className="h-px w-8 bg-gradient-to-r from-neon-red to-neon-pink" />
      <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
        {label}
      </h2>
    </div>
  );
}
