import { motion } from "motion/react";
import { education } from "../data/resume";

const Education = () => {
  return (
    <section className="min-h-screen px-6 py-12 pt-20 md:pt-12 max-w-3xl mx-auto" aria-labelledby="education-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-amber-500 text-xs uppercase tracking-widest mb-2">Background</p>
        <h1 id="education-heading" className="text-3xl font-bold text-white mb-8">Education</h1>

        <ol aria-label="Education history" className="relative pl-6 border-l border-neutral-800 space-y-8">
          {education.map((edu, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="relative"
            >
              <span className="absolute -left-[1.85rem] top-1.5 w-3 h-3 rounded-full bg-amber-500 border-2 border-[#0f0f0f]" aria-hidden="true" />
              <article className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-white font-semibold">{edu.institution}</h2>
                  <p className="text-xs text-neutral-500 whitespace-nowrap">
                    <time>{edu.from}</time> — <time>{edu.to}</time>
                  </p>
                </div>
                <p className="text-amber-400 text-sm font-medium">{edu.field}</p>
                <p className="text-neutral-500 text-xs mt-1">{edu.degree}</p>
              </article>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
};

export default Education;
