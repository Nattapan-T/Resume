import { motion } from "motion/react";

const infoCards = [
  { label: "Nickname", value: "Fahsai" },
  { label: "Experience", value: "3+ years" },
  { label: "Current Role", value: "Frontend Engineer" },
  { label: "Currently Exploring", value: "RSC · Next.js 16 · AI-assisted engineering" },
  { label: "Personality", value: "ENFJ — The Protagonist" },
  { label: "Languages", value: "Thai · English · Chinese (basic)" },
  { label: "Based in", value: "Bangkok, Thailand" },
];

const About = () => {
  return (
    <section
      className="min-h-screen px-6 py-12 pt-20 md:pt-12 max-w-3xl mx-auto"
      aria-labelledby="about-heading"
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
          Get to know me
        </p>
        <h1 id="about-heading" className="text-3xl font-bold text-white mb-8">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src="/Image/MTXX_MH20230920_120238400.jpg"
            alt="Nattapan Tammawongsa, Frontend Engineer based in Bangkok"
            className="w-40 h-40 rounded-2xl object-cover border border-neutral-700 flex-shrink-0"
          />
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <h2 className="text-xl font-semibold text-white">
              Hi, I'm Fahsai 👋
            </h2>
            <p>
              Frontend Engineer with 3+ years of production experience building
              web and mobile applications using React, Next.js, TypeScript, and
              React Native. I started as a career switcher from the airline
              industry and grew into end-to-end frontend ownership — from Design
              System architecture to mobile app store deployment.
            </p>
            <p>
              Currently at 7 Solutions Co., Ltd., leading Design System
              migration and building scalable component libraries for a Next.js
              platform. I enjoy working across the stack when needed (Node.js,
              NestJS, Firebase) and I'm focused on maintainable, high-quality
              code that teams can build on.
            </p>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {infoCards.map(({ label, value }) => (
            <div
              key={label}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-4"
            >
              <dt className="text-xs text-neutral-500 uppercase tracking-widest mb-1">
                {label}
              </dt>
              <dd className="text-sm text-white font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
};

export default About;
