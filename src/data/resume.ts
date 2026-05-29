export const education = [
  {
    institution: "Suan Dusit University",
    degree: "Bachelor of Business Administration",
    field: "Airline Business Management",
    from: "2016",
    to: "2020",
  },
  {
    institution: "St Mary's College",
    degree: "High School",
    field: "Science - Mathematics",
    from: "2005",
    to: "2016",
  },
];

export const experience = [
  {
    company: "7 Solutions Co., Ltd.",
    role: "Frontend Engineer",
    from: "Jul 2025",
    to: "Present",
    projects: [
      {
        name: "LotteryPlus Platform — Design System & Frontend Architecture",
        bullets: [
          "Owned Design System migration as sole engineer — Next.js + TypeScript codebase, delivered alongside regular feature work",
          "Authored codemod scripts that updated 460+ color-token files and 250+ typography files, turning 4+ weeks of manual refactoring into automated execution; validated with Playwright visual regression tests",
          "Built reusable component library of 22+ component types with Tailwind CSS and established semantic naming conventions that unified UX/UI–Frontend workflows team-wide",
          "Integrated REST APIs with TanStack Query for server-state management across scalable business workflow modules",
          "Implemented unit and integration tests (Jest) inside a CI/CD pipeline; participated in code reviews and contributed to architecture decisions in sprint planning",
        ],
      },
      {
        name: "HR Recruitment Platform — Sole Developer",
        bullets: [
          "Owned platform end-to-end in React.js + Node.js — designed Firestore schema, architected API layer with Firebase Cloud Functions",
          "Engineered Google Sheets API integration that migrated 6,000+ candidate records into Firestore, serving 5–6 recruiters daily",
          "Delivered recruiter KPI dashboards, CRUD-enabled data tables, and a company-branded PDF resume generator",
        ],
      },
      {
        name: "ERP Platform — LMS Module",
        bullets: [
          "Developed frontend modules in React.js for course and learning-space management with TanStack Query",
          "Lifted permission-checking hook into React Context provider to enable centralized role-based access control",
          "Contributed to NestJS backend — 2 REST API endpoints backed by PostgreSQL + Prisma ORM",
        ],
      },
    ],
  },
  {
    company: "AMR Asia Public Co., Ltd.",
    role: "Software Engineer",
    from: "Sep 2023",
    to: "Jul 2025",
    projects: [
      {
        name: "EV Charger Platform — Back Office Admin",
        bullets: [
          "Independently initiated BO admin from scratch with React.js + Redux Toolkit + Ant Design — delivered to production, adopted by internal operations team",
          "Built reusable admin component library (tables, forms, modals, charts, dashboards) accelerating multi-module delivery",
          "Refined Redux Toolkit state with separation strategy that isolated chart-heavy dashboards from high-frequency updates; added Axios interceptors for centralized error handling",
          "Integrated REST APIs for station management, user management, payment flows, and operational reporting",
        ],
      },
      {
        name: "EV Charger Mobile Application — React Native (Expo)",
        bullets: [
          "Led full version migration — identified SDK compatibility gaps, upgraded Android and iOS SDKs end-to-end",
          "Optimized real-time map rendering — diagnosed excessive re-renders and applied React.memo + useMemo to reduce render trees",
          "Proposed and shipped OAuth (Google) sign-in and biometric authentication (Face ID / Fingerprint)",
          "Independently managed end-to-end deployment to Google Play Store and Apple App Store",
        ],
      },
      {
        name: "Maintenance — Solar Cell Billing BO · AS Macharge Marketing Website",
        bullets: [
          "Maintained two production frontend systems in React.js + Tailwind CSS + Ant Design",
          "Developed new features, integrated REST APIs, and delivered UI updates and responsive fixes",
        ],
      },
    ],
  },
];

export const techSkills = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Ant Design"] },
  { category: "Design Systems", items: ["Design Tokens", "Component Architecture", "Figma Handoff", "Semantic Naming", "Codemod Automation"] },
  { category: "State & Data", items: ["Redux Toolkit", "TanStack Query", "Zustand", "React Context"] },
  { category: "Mobile", items: ["React Native", "Expo", "Android Studio", "Xcode"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Express.js", "Firebase Cloud Functions"] },
  { category: "Database", items: ["Firebase Firestore", "PostgreSQL", "Prisma ORM"] },
  { category: "Testing", items: ["Jest", "React Testing Library", "Playwright"] },
  { category: "Tools & AI", items: ["Git", "GitHub", "GitLab", "Figma", "Postman", "Vercel", "Claude (AI pair-programming)"] },
];

export const hardSkills = [
  { name: "TypeScript", image: "/Image/typescript.png" },
  { name: "JavaScript", image: "/Image/js.png" },
  { name: "React", image: "/Image/structure.png" },
  { name: "Python", image: "/Image/python.png" },
  { name: "Java", image: "/Image/java.png" },
  { name: "HTML", image: "/Image/html.png" },
  { name: "CSS", image: "/Image/css-3.png" },
];

export const softSkills = [
  "Strong ownership & end-to-end accountability",
  "Fast learner — self-directed growth",
  "Cross-functional collaboration (FE, BE, PM, UX)",
  "Architecture thinking & scalability mindset",
  "Problem solver under production pressure",
  "Mentoring & knowledge sharing",
];
