import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import TypingText from "../Component/ui/TypingText";

const roles = [
  "Frontend Engineer",
  "React / Next.js Developer",
  "React Native Developer",
  "Full Stack (Node.js / NestJS)",
];


const socialLinks = [
  {
    label: "GitHub profile",
    href: "https://github.com/Nattapan-T",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn profile",
    href: "https://linkedin.com/in/nattapan-tammawongsa-3b6597288",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Send email to Nattapan",
    href: "mailto:fnattapans@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const Home = () => {
  const [liveRole, setLiveRole] = useState(roles[0]);
  const roleIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      roleIndex.current = (roleIndex.current + 1) % roles.length;
      setLiveRole(roles[roleIndex.current]);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 pt-16 md:pt-0"
      aria-labelledby="home-heading"
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {liveRole}
      </p>
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start text-center md:text-left gap-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="/Image/MTXX_MR20230920_143147085.jpg"
              alt="Nattapan Tammawongsa"
              className="w-32 h-32 rounded-full object-cover border-2 border-amber-500/30 shadow-lg shadow-amber-500/10"
            />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-2"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              id="home-heading"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-white mb-3"
            >
              Nattapan
              <span className="text-amber-400"> T.</span>
              <span className="block text-xl md:text-2xl font-normal text-neutral-500 mt-1">
                Fahsai
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-neutral-400 mb-6 h-7"
            >
              <TypingText texts={roles} />
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-neutral-500 max-w-md leading-relaxed"
            >
              3 years building production web & mobile apps with React, Next.js,
              and React Native.
            </motion.p>
          </div>

          <motion.ul
            role="list"
            aria-label="Social and contact links"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 flex-wrap"
          >
            {socialLinks.map(({ label, href, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl bg-neutral-800 text-neutral-400 hover:text-amber-400 hover:bg-neutral-700 border border-neutral-700 hover:border-amber-500/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f] inline-flex"
                >
                  {icon}
                </a>
              </li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="border-t border-neutral-800 pt-6 w-full max-w-md"
          >
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1" aria-hidden="true">Open to</p>
            <p className="text-sm text-neutral-300 font-medium">
              Frontend Engineer · Product Engineer · Design Dev
            </p>
            <p className="text-xs text-neutral-500 mt-1">Bangkok · Hybrid · Remote (Global)</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
