export interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  badge?: string;
  demoVideo?: string;
  builtWith?: string;
}

export const projects: Project[] = [
  {
    name: "PRetina",
    tagline: "AI-powered code review for frontend teams",
    description:
      "An AI tool that reviews frontend code for Design System violations and accessibility issues, and auto-generates professional PR documentation from git diffs. Built with Next.js 16 App Router, React 19, and Gemini 2.5 Flash via AI SDK with structured Zod output.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Gemini 2.5 Flash", "AI SDK", "Zod", "Monaco Editor", "Vercel"],
    liveUrl: "https://pretina-ai.vercel.app/",
    githubUrl: "https://github.com/Nattapan-T/pretina",
    highlights: [
      "Detects 6 Design System rule violations — hardcoded colors, spacing, typography, border radius, missing semantic tokens, and inconsistent naming (DS001–DS006)",
      "Audits 6 WCAG 2.1 accessibility rules — missing ARIA, broken focus management, color-only indicators, missing alt text, keyboard navigation gaps (A11Y001–A11Y006)",
      "Git diff mode — parses full PR diffs into per-file hunks, runs parallel AI analysis, then merges results into a copyable GitHub Markdown PR summary",
      "Monaco Editor with TypeScript and diff syntax highlighting; collapsible IssueCards with WAI-ARIA tabs and arrow-key navigation",
      "Deployed on Vercel Fluid Compute; rate-limit countdown UI handles Gemini quota gracefully",
    ],
    badge: "Live",
    demoVideo: "/Image/pretina-demo.mp4",
    builtWith: "Built with Claude as AI pair-programmer",
  },
  {
    name: "Portfolio (This Site)",
    tagline: "Developer portfolio — rebuilt from scratch",
    description:
      "Personal portfolio migrated from a 2023 Bootstrap + react-typing-effect project to a fully custom stack. React 18, TypeScript, Tailwind CSS v4, and Framer Motion with full WCAG accessibility support.",
    tech: ["React 18", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vite 8", "pnpm"],
    githubUrl: "https://github.com/Nattapan-T/Resume",
    highlights: [
      "Full WCAG support — semantic HTML (article, section, ol, dl, time), skip-to-content, focus traps, aria-live regions",
      "Custom typing animation hook replacing unmaintained react-typing-effect library",
      "Framer Motion enter animations on every page; inset box-shadow active nav state to avoid layout shift",
      "Data layer separation — all resume content in src/data/ TypeScript files, zero data in UI components",
    ],
  },
];
