import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronDown } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

const CASE_STEPS = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "features", label: "Key Features" },
  { key: "tech", label: "Technology" },
];

export default function ProjectModal({ project, onClose }) {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  useEffect(() => {
    setCaseStudyOpen(false);
  }, [project]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-void/80 px-4 py-10 backdrop-blur-sm sm:items-center"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="glass clip-corner relative w-full max-w-2xl rounded-2xl p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              data-cursor-hover
              className="absolute right-5 top-5 rounded-full border border-line p-2 text-mist transition-colors hover:border-neon-pink/60 hover:text-ink"
            >
              <X size={16} />
            </button>

            <span className="font-mono text-xs tracking-[0.2em] text-neon-pink">
              FEATURED PROJECT {project.index}
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-2 text-sm text-mist sm:text-base">{project.tagline}</p>

            {/* screenshot area placeholder */}
            <div className="mt-6 flex aspect-video items-center justify-center rounded-xl border border-dashed border-line bg-panel">
              <span className="font-mono text-xs uppercase tracking-widest text-mist">
                Screenshot Preview — Add Project Image
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-mist"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-neon-pink/60"
              >
                <GithubIcon size={14} /> GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-void"
                style={{ background: "linear-gradient(100deg, var(--color-neon-red), var(--color-neon-pink))" }}
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            </div>

            <button
              onClick={() => setCaseStudyOpen((o) => !o)}
              data-cursor-hover
              className="mt-8 flex w-full items-center justify-between border-t border-line pt-5 text-left"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink">
                View Full Case Study
              </span>
              <ChevronDown
                size={16}
                className={`text-mist transition-transform ${caseStudyOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {caseStudyOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6 pt-6">
                    <CaseBlock label="Problem" text={project.problem} />
                    <CaseBlock label="Solution" text={project.solution} />

                    <div>
                      <CaseLabel>Key Features</CaseLabel>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {project.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm text-mist"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neon-pink" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <CaseLabel>System Architecture</CaseLabel>
                      <div className="mt-3 rounded-xl border border-dashed border-line bg-panel p-6 text-center">
                        <span className="font-mono text-xs uppercase tracking-widest text-mist">
                          Architecture Diagram — Add Later
                        </span>
                      </div>
                    </div>

                    <div>
                      <CaseLabel>Result</CaseLabel>
                      <p className="mt-2 text-sm leading-relaxed text-mist">
                        Case study outcome to be added — replace with real results, feedback, or
                        learnings once available.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CaseLabel({ children }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neon-pink">
      {children}
    </span>
  );
}

function CaseBlock({ label, text }) {
  return (
    <div>
      <CaseLabel>{label}</CaseLabel>
      <p className="mt-2 text-sm leading-relaxed text-mist">{text}</p>
    </div>
  );
}
