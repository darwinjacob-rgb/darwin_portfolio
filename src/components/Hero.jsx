import { motion } from "framer-motion";
import { ArrowRight, Download, MessageSquare } from "lucide-react";
import { profile } from "../data/profile";

const TERMINAL_LINES = [
  { text: "Full Stack", ok: true },
  { text: "React", ok: true },
  { text: "Node.js", ok: true },
  { text: "UI/UX", ok: true },
  { text: "Modern Web", ok: true },
];

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-28 pb-16 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: typography */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-mist"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-red" />
            {profile.status} · {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-[13vw] font-bold uppercase leading-[0.92] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            {profile.nameParts.first}
            <br />
            <span className="text-gradient">{profile.nameParts.last}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-5 font-mono text-sm uppercase tracking-[0.3em] text-neon-pink"
          >
            {profile.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-6 max-w-xl space-y-3 text-base text-mist sm:text-lg"
          >
            <p>
              I'm a passionate Full Stack Developer who turns ideas into modern, scalable, and
              impactful digital experiences.
            </p>
            <p>
              I love building innovative solutions, exploring new technologies, and transforming
              real-world problems into meaningful products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              data-cursor-hover
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-void transition-transform hover:scale-105"
              style={{ background: "linear-gradient(100deg, var(--color-neon-red), var(--color-neon-pink))" }}
            >
              View Projects
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-neon-pink/60"
            >
              <MessageSquare size={14} />
              Let's Talk
            </button>
            <a
              href={profile.resume}
              download
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-mist transition-colors hover:text-ink"
            >
              <Download size={14} />
              Resume
            </a>
          </motion.div>
        </div>

        {/* Right: terminal / workspace panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            className="absolute -inset-6 -z-10 rounded-full opacity-40 blur-[70px]"
            style={{ background: "radial-gradient(circle, var(--color-neon-pink), transparent 70%)" }}
          />

          <div className="glass glow-crimson clip-corner rounded-2xl p-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-neon-red/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon-pink/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-mist/30" />
              <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-mist">
                workspace.sh
              </span>
            </div>

            <div className="space-y-2 font-mono text-[13px]">
              <p className="text-mist">
                <span className="text-neon-pink">$</span> npm run darwin
              </p>
              {TERMINAL_LINES.map((line, i) => (
                <motion.p
                  key={line.text}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.12, duration: 0.3 }}
                  className="text-ink/85"
                >
                  <span className="text-emerald-400">✓</span> {line.text}
                </motion.p>
              ))}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="text-gradient mt-3 font-semibold"
              >
                SYSTEM ONLINE
              </motion.p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-mist">
                {profile.college}
              </span>
              <span className="flex h-6 items-center gap-1 rounded-full border border-line px-2 font-mono text-[10px] text-mist">
                <span className="h-1.5 w-1.5 rounded-full bg-neon-red animate-pulse" />
                LIVE
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
