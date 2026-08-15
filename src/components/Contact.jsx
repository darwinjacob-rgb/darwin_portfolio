import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { profile, socials } from "../data/profile";
import { GithubIcon, LinkedinIcon, InstagramIcon, YoutubeIcon, LeetcodeIcon } from "./BrandIcons";

const SOCIAL_LINKS = [
  { key: "github", label: "GitHub", icon: GithubIcon, href: socials.github },
  { key: "linkedin", label: "LinkedIn", icon: LinkedinIcon, href: socials.linkedin },
  { key: "instagram", label: "Instagram", icon: InstagramIcon, href: socials.instagram },
  { key: "youtube", label: "YouTube", icon: YoutubeIcon, href: socials.youtube },
  { key: "leetcode", label: "LeetCode", icon: LeetcodeIcon, href: socials.leetcode },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend configured yet — this form is visually functional
    // and ready to be wired up to an email/service integration.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Left: big typography + terminal + socials */}
          <div>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Let's Build
              <br />
              <span className="text-gradient">Something.</span>
            </h2>
            <p className="mt-5 max-w-md text-base text-mist sm:text-lg">
              Have an idea, project, or opportunity? Let's turn it into something real.
            </p>

            <div className="glass clip-corner mt-8 max-w-sm rounded-2xl p-5 font-mono text-[13px]">
              <p className="text-mist">
                <span className="text-neon-pink">$</span> connect --with darwin
              </p>
              <p className="mt-2 text-ink/85">
                <span className="text-emerald-400">status:</span> AVAILABLE TO BUILD
              </p>
            </div>

            <a
              href={`mailto:${profile.email}`}
              data-cursor-hover
              className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-ink transition-colors hover:text-neon-pink"
            >
              <Mail size={16} />
              {profile.email}
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-mist transition-colors hover:border-neon-pink/60 hover:text-ink"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
            className="glass clip-corner rounded-2xl p-7 sm:p-8"
          >
            <Field
              label="Name"
              type="text"
              value={form.name}
              onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              required
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              required
            />
            <TextAreaField
              label="Message"
              value={form.message}
              onChange={(v) => setForm((f) => ({ ...f, message: v }))}
              required
            />

            <button
              type="submit"
              data-cursor-hover
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-void transition-transform hover:scale-[1.02]"
              style={{ background: "linear-gradient(100deg, var(--color-neon-red), var(--color-neon-pink))" }}
            >
              <Send size={14} />
              Send Message
            </button>

            {submitted && (
              <p className="mt-4 text-center font-mono text-xs text-mist">
                This form isn't connected to a backend yet — hook it up to an email service to
                start receiving messages.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, value, onChange, required }) {
  return (
    <label className="mb-5 block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-mist">
        {label}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-neon-pink/60"
      />
    </label>
  );
}

function TextAreaField({ label, value, onChange, required }) {
  return (
    <label className="mb-6 block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-mist">
        {label}
      </span>
      <textarea
        rows={4}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-none rounded-xl border border-line bg-panel px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-neon-pink/60"
      />
    </label>
  );
}
