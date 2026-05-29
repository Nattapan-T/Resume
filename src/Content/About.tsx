import { motion } from "motion/react";

const infoCards = [
  {
    label: "What I enjoy",
    value: "Constantly learning and figuring things out",
  },
  { label: "Recently focused on", value: "Design Systems & DX improvements" },
  { label: "Background", value: "Airline industry → Software engineering" },
  { label: "Mindset", value: "Curious, adaptable, product-oriented" },
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
            className="w-40 h-40 rounded-2xl object-cover border border-neutral-700 shrink-0"
          />
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <h2 className="text-xl font-semibold text-white">
              Hi, I'm Fahsai 👋
            </h2>
            <p>
              Frontend Engineer with 3 years of production experience building
              web and mobile applications using React, Next.js, TypeScript, and
              React Native. I transitioned from the airline industry into
              software engineering and grew into owning frontend systems
              end-to-end — from Design System architecture and scalable
              component libraries to mobile app deployment on both iOS and
              Android.
            </p>
            <p>
              Most recently at 7 Solutions Co., Ltd., I worked across frontend
              architecture, Design System migration, and internal product
              development for large-scale Next.js platforms. My experience
              includes building reusable UI systems, improving developer
              workflows through automation and codemods, integrating REST APIs,
              and contributing across the stack with Node.js, NestJS, Firebase,
              and PostgreSQL when needed.
            </p>
            <p>
              Previously at AMR Asia, I helped build and maintain EV charging
              platforms across both web and mobile, including Back Office
              systems, real-time dashboards, analytics tools, and React Native
              applications released to the App Store and Google Play.
            </p>
            <p>
              I enjoy building maintainable frontend architecture, scalable UI
              systems, and product-focused experiences that teams can
              confidently build on over time.
            </p>
          </div>
        </div>

        {/* Info cards */}
        <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
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

        <div className="mt-8 border border-neutral-800 bg-neutral-900/50 rounded-2xl p-6">
          <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4">
            What drives me
          </p>
          <blockquote className="text-neutral-300 leading-relaxed space-y-4">
            <p>
              "I think one thing about me is that I learn very quickly when I'm
              genuinely interested in a problem."
            </p>
            {/* <p>"A lot of the Design System work I did came from exploring solutions independently — especially around migration, tooling, and reusable components."</p> */}
            <p>
              "I really enjoy building systems that improve consistency and
              developer experience, and I'd love to continue growing in that
              direction."
            </p>
          </blockquote>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
