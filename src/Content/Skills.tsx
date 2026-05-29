import { motion } from "motion/react";
import { techSkills, softSkills } from "../data/resume";

const Skills = () => {
  return (
    <section
      className="min-h-screen px-6 py-12 pt-20 md:pt-12 max-w-3xl mx-auto"
      aria-labelledby="skills-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-amber-500 text-xs uppercase tracking-widest mb-2">
          What I work with
        </p>
        <h1 id="skills-heading" className="text-3xl font-bold text-white mb-8">
          Skills
        </h1>

        <div className="space-y-10">
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Tech Stack
            </h2>
            <div className="space-y-4">
              {techSkills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.2 }}
                  className="bg-neutral-900 border border-neutral-800 rounded-xl p-4"
                >
                  <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs font-medium rounded-lg bg-neutral-800 text-neutral-300 border border-neutral-700 hover:border-amber-500/40 hover:text-amber-300 transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Soft Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.5 }}
                  className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  <span className="text-sm text-neutral-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
