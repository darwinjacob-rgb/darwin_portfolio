import { motion } from "framer-motion";
import { Award, Trophy, Users, Wrench, Zap, ExternalLink } from "lucide-react";
import { milestones, certification } from "../data/experience";
import { SectionEyebrow } from "./About";

const ICONS = {
  hackathons: Trophy,
  workshops: Wrench,
  events: Zap,
  leadership: Users,
  nptel: Award,
};

export default function Milestones() {
  return (
    <section id="milestones" className="relative px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow label="Milestones" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((m, i) => {
            const Icon = ICONS[m.id] ?? Award;
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass flex items-center gap-4 rounded-2xl p-5"
              >
                <div className="glow-crimson flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line">
                  <Icon size={18} className="text-neon-pink" strokeWidth={1.6} />
                </div>
                <span className="font-display text-sm font-medium text-ink">{m.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Certification card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="glass clip-corner mt-8 flex flex-col gap-6 rounded-2xl p-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
              style={{ background: "linear-gradient(135deg, var(--color-neon-red), var(--color-magenta))" }}
            >
              <Award size={24} className="text-void" />
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neon-pink">
                Certification
              </span>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                {certification.title}
              </h3>
              <p className="text-sm text-mist">{certification.issuer}</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 font-mono text-xs text-mist sm:text-right">
            <span>Credential ID: {certification.credentialId}</span>
            <a
              href={certification.link}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="mt-2 inline-flex items-center gap-1.5 self-start rounded-full border border-line px-4 py-2 uppercase tracking-wider text-ink transition-colors hover:border-neon-pink/60 sm:self-end"
            >
              View Certificate <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
