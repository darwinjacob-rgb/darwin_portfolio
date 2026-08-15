import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects, moreProjects } from "../data/projects";
import { SectionEyebrow } from "./About";
import ProjectModal from "./ProjectModal";
import { GithubIcon } from "./BrandIcons";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="relative px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow label="Featured Work" />

        <div className="mt-14 space-y-6">
          {featuredProjects.map((project, i) => (
            <motion.button
              key={project.id}
              onClick={() => setActiveProject(project)}
              data-cursor-hover
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="glass group relative block w-full overflow-hidden rounded-2xl p-7 text-left transition-all hover:-translate-y-1 sm:p-9"
            >
              <div
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ background: "radial-gradient(circle, var(--color-neon-red), transparent 70%)" }}
              />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="font-mono text-xs tracking-[0.2em] text-neon-pink">
                    FEATURED PROJECT {project.index}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">
                    {project.tagline}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-mist"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink">
                  <span className="flex items-center gap-2 rounded-full border border-line px-4 py-2.5 transition-colors group-hover:border-neon-pink/60">
                    View Details
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Secondary projects */}
        <div className="mt-20">
          <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-mist">More Projects</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass rounded-2xl p-5"
              >
                <h4 className="font-display text-base font-semibold text-ink">{project.name}</h4>
                <p className="mt-1.5 text-sm text-mist">{project.tagline}</p>
                {project.tech.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-mist"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-5 flex items-center gap-3 text-mist">
                  <GithubIcon size={15} />
                  <span className="truncate font-mono text-[11px]">{project.github}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
