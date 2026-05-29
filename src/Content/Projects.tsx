import { useState } from "react";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import DemoModal from "../Component/ui/DemoModal";

const ExternalIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const PlayIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const Projects = () => {
  const [activeDemo, setActiveDemo] = useState<{
    name: string;
    videoSrc: string;
    liveUrl?: string;
  } | null>(null);

  return (
    <section
      className="min-h-screen px-6 py-12 pt-20 md:pt-12 max-w-3xl mx-auto"
      aria-labelledby="projects-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p
          className="text-amber-500 text-xs uppercase tracking-widest mb-2"
          aria-hidden="true"
        >
          What I've built
        </p>
        <h1
          id="projects-heading"
          className="text-3xl font-bold text-white mb-8"
        >
          Projects
        </h1>

        <ul role="list" className="space-y-8">
          {projects.map((project, i) => (
            <motion.li
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
            >
              <article className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-colors">
                {project.demoVideo && (
                  <button
                    onClick={() =>
                      setActiveDemo({
                        name: project.name,
                        videoSrc: project.demoVideo!,
                        liveUrl: project.liveUrl,
                      })
                    }
                    className="w-full relative group cursor-pointer border-b border-neutral-800 bg-neutral-950 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-500"
                    aria-label={`Watch ${project.name} demo video`}
                  >
                    <video
                      src={project.demoVideo}
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-48 object-cover object-top pointer-events-none"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center shadow-lg">
                        <PlayIcon />
                      </div>
                    </div>
                  </button>
                )}

                <div className="p-6">
                  <header className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center flex-wrap gap-2 mb-1">
                        <h2 className="text-white font-bold text-lg">
                          {project.name}
                        </h2>
                        {project.badge && (
                          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            {project.badge}
                          </span>
                        )}
                        {project.builtWith && (
                          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                            {project.builtWith}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-neutral-400">
                        {project.tagline}
                      </p>
                    </div>
                    <nav
                      aria-label={`${project.name} links`}
                      className="flex gap-2 flex-shrink-0"
                    >
                      {project.demoVideo && (
                        <button
                          onClick={() =>
                            setActiveDemo({
                              name: project.name,
                              videoSrc: project.demoVideo!,
                              liveUrl: project.liveUrl,
                            })
                          }
                          aria-label={`Watch ${project.name} demo`}
                          className="p-2 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border border-amber-500/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                        >
                          <PlayIcon />
                        </button>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.name} source code on GitHub`}
                          className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 border border-neutral-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                        >
                          <GithubIcon />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.name} live site`}
                          className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-amber-400 hover:bg-neutral-700 border border-neutral-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                        >
                          <ExternalIcon />
                        </a>
                      )}
                    </nav>
                  </header>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <ul aria-label="Key highlights" className="space-y-1.5 mb-5">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2 text-sm text-neutral-400"
                      >
                        <span
                          className="text-amber-500 mt-1.5 flex-shrink-0 text-xs"
                          aria-hidden="true"
                        >
                          ▸
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <footer>
                    <ul
                      role="list"
                      aria-label="Technologies used"
                      className="flex flex-wrap gap-2"
                    >
                      {project.tech.map((t) => (
                        <li key={t}>
                          <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-neutral-800 text-neutral-300 border border-neutral-700">
                            {t}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </footer>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {activeDemo && (
        <DemoModal
          open={!!activeDemo}
          onClose={() => setActiveDemo(null)}
          title={activeDemo.name}
          videoSrc={activeDemo.videoSrc}
          liveUrl={activeDemo.liveUrl}
        />
      )}
    </section>
  );
};

export default Projects;
