import { FileText } from "lucide-react";
import { profile, socials } from "../data/profile";
import { GithubIcon, LinkedinIcon, InstagramIcon, YoutubeIcon, LeetcodeIcon } from "./BrandIcons";

const LINKS = [
  { key: "github", label: "GitHub", icon: GithubIcon, href: socials.github },
  { key: "linkedin", label: "LinkedIn", icon: LinkedinIcon, href: socials.linkedin },
  { key: "instagram", label: "Instagram", icon: InstagramIcon, href: socials.instagram },
  { key: "youtube", label: "YouTube", icon: YoutubeIcon, href: socials.youtube },
  { key: "leetcode", label: "LeetCode", icon: LeetcodeIcon, href: socials.leetcode },
  { key: "resume", label: "Resume", icon: FileText, href: profile.resume },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line px-6 py-16 lg:px-12">
      <div
        className="absolute bottom-0 left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(ellipse, var(--color-crimson), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="font-display text-[13vw] font-bold uppercase leading-none tracking-tight text-ink sm:text-6xl lg:text-7xl">
          DARWIN <span className="text-gradient">JACOB.N</span>
        </h2>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-mist">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-red" />
            {profile.status} · {profile.location.toUpperCase()}
          </p>

          <div className="flex flex-wrap gap-2">
            {LINKS.map((l) => (
              <a
                key={l.key}
                href={l.href}
                target={l.key === "resume" ? undefined : "_blank"}
                rel="noreferrer"
                download={l.key === "resume" ? true : undefined}
                data-cursor-hover
                aria-label={l.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-mist transition-colors hover:border-neon-pink/60 hover:text-ink"
              >
                <l.icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 font-mono text-xs text-mist/70">
          © 2026 {profile.name.toUpperCase()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
