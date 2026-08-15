import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "INITIALIZING DARWIN.DEV...",
  "LOADING SYSTEM...",
  "LOADING SKILLS...",
  "LOADING PROJECTS...",
  "CONNECTING...",
  "SYSTEM READY",
];

export default function BootScreen({ onDone }) {
  const [visibleCount, setVisibleCount] = useState(1);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisibleCount(LINES.length);
      setProgress(100);
      const t = setTimeout(() => finish(), 300);
      return () => clearTimeout(t);
    }

    const lineTimer = setInterval(() => {
      setVisibleCount((c) => Math.min(c + 1, LINES.length));
    }, 220);

    const progTimer = setInterval(() => {
      setProgress((p) => Math.min(p + 6, 100));
    }, 90);

    const finishTimer = setTimeout(() => finish(), 1500);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progTimer);
      clearTimeout(finishTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    setExiting(true);
    setTimeout(onDone, 450);
  }

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-void"
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[100px]"
            style={{ background: "radial-gradient(circle, var(--color-neon-red), transparent 70%)" }}
          />

          <div className="relative w-[min(90vw,420px)] font-mono text-sm">
            <div className="mb-4 flex items-center gap-2 text-mist">
              <span className="h-2 w-2 rounded-full bg-neon-red" />
              <span className="h-2 w-2 rounded-full bg-neon-pink" />
              <span className="h-2 w-2 rounded-full bg-mist/40" />
              <span className="ml-2 text-xs tracking-widest">darwin@dev:~</span>
            </div>

            <div className="space-y-1.5">
              {LINES.slice(0, visibleCount).map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={
                    i === LINES.length - 1
                      ? "text-gradient font-semibold"
                      : "text-ink/80"
                  }
                >
                  <span className="text-neon-pink">{">"}</span> {line}
                </motion.p>
              ))}
            </div>

            <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, var(--color-neon-red), var(--color-neon-pink))" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
