import { motion } from "motion/react";
import { experience } from "../data/resume";

const Experience = () => {
  return (
    <section className="min-h-screen px-6 py-12 pt-20 md:pt-12 max-w-3xl mx-auto" aria-labelledby="experience-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-amber-500 text-xs uppercase tracking-widest mb-2">Work history</p>
        <h1 id="experience-heading" className="text-3xl font-bold text-white mb-8">Experience</h1>

        <ol aria-label="Work experience" className="relative pl-6 border-l border-neutral-800 space-y-10">
          {experience.map((exp, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="relative"
            >
              <span className="absolute -left-[1.85rem] top-1.5 w-3 h-3 rounded-full bg-amber-500 border-2 border-[#0f0f0f]" aria-hidden="true" />
              <article>
                <header className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-white font-semibold text-lg">{exp.role}</h2>
                    <p className="text-amber-400 text-sm font-medium">{exp.company}</p>
                  </div>
                  <p className="text-xs text-neutral-500 whitespace-nowrap mt-1">
                    <time>{exp.from}</time> — <time>{exp.to}</time>
                  </p>
                </header>

                <div className="space-y-5">
                  {exp.projects.map((proj, j) => (
                    <section key={j} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors">
                      <h3 className="text-sm font-semibold text-neutral-200 mb-3">{proj.name}</h3>
                      <ul className="space-y-2">
                        {proj.bullets.map((b, k) => (
                          <li key={k} className="flex gap-2 text-sm text-neutral-400 leading-relaxed">
                            <span className="text-amber-500 mt-1.5 flex-shrink-0" aria-hidden="true">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
};

export default Experience;
