import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "milestones", label: "Milestones" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 transition-all duration-300 ${
            scrolled ? "glass py-2.5 mx-4 lg:mx-auto" : "px-6"
          }`}
        >
          <button
            onClick={() => scrollTo("home")}
            className="font-display text-lg font-bold tracking-tight text-ink"
            data-cursor-hover
          >
            DARWIN<span className="text-gradient">.DEV</span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                data-cursor-hover
                className={`relative px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors ${
                  active === item.id ? "text-ink" : "text-mist hover:text-ink"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-3 -bottom-0.5 h-px"
                    style={{ background: "linear-gradient(90deg, var(--color-neon-red), var(--color-neon-pink))" }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={profile.resume}
              download
              data-cursor-hover
              className="rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-mist transition-colors hover:border-neon-pink/60 hover:text-ink"
            >
              Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              data-cursor-hover
              className="glow-pink rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-void transition-transform hover:scale-105"
              style={{ background: "linear-gradient(100deg, var(--color-neon-red), var(--color-neon-pink))" }}
            >
              Let's Talk
            </button>
          </div>

          <button
            className="text-ink lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-void/95 backdrop-blur-lg lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="flex h-full flex-col items-center justify-center gap-6"
            >
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`font-display text-2xl font-semibold uppercase tracking-wide ${
                    active === item.id ? "text-gradient" : "text-ink"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-6 flex flex-col items-center gap-4">
                <a
                  href={profile.resume}
                  download
                  className="rounded-full border border-line px-6 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-mist"
                >
                  Resume
                </a>
                <button
                  onClick={() => scrollTo("contact")}
                  className="rounded-full px-6 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-void"
                  style={{ background: "linear-gradient(100deg, var(--color-neon-red), var(--color-neon-pink))" }}
                >
                  Let's Talk
                </button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
