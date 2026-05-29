import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Education", to: "/education" },
  { label: "Experience", to: "/experience" },
  { label: "Skills", to: "/skill" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])',
      );
      focusable?.[0]?.focus();
    }
  }, [open]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 ${
      isActive
        ? "bg-amber-500/10 text-amber-400 shadow-[inset_0_0_0_1px_rgba(245,158,11,0.25)]"
        : "text-neutral-400 hover:text-white hover:bg-neutral-800"
    }`;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-black focus:rounded-lg focus:font-semibold focus:text-sm"
      >
        Skip to main content
      </a>

      <aside
        aria-label="Site navigation"
        className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-64 bg-neutral-900 border-r border-neutral-800 z-40 overflow-y-auto"
      >
        <div className="px-6 pt-8 pb-6" aria-hidden="true">
          <p className="text-xs text-neutral-600 uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <div className="flex flex-col gap-0.5">
            <p className="text-base font-bold text-white">
              Nattapan Tammawongsa
            </p>
            <p className="text-sm text-neutral-400">
              <span className="text-amber-400 font-medium">Fahsai</span>
            </p>
          </div>
        </div>

        <div className="mx-4 border-t border-neutral-800" />

        <nav aria-label="Primary navigation" className="flex-1 px-3 py-4">
          <ul role="list" className="flex flex-col gap-1.5">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink to={to} end={to === "/"} className={navLinkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-4 border-t border-neutral-800" />
        <div className="px-6 py-4" aria-hidden="true">
          <p className="text-xs text-neutral-700">© 2026 Nattapan T.</p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header
        className="md:hidden fixed top-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur border-b border-neutral-800 px-4 py-3 flex items-center justify-between"
        role="banner"
      >
        <span aria-hidden="true">
          <span className="font-bold text-white">Nattapan</span>
          <span className="text-amber-400 font-medium ml-1.5 text-sm">
            Fahsai
          </span>
        </span>
        <button
          ref={toggleBtnRef}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <span
            aria-hidden="true"
            className="block w-5 h-0.5 bg-current mb-1"
          />
          <span
            aria-hidden="true"
            className="block w-5 h-0.5 bg-current mb-1"
          />
          <span aria-hidden="true" className="block w-5 h-0.5 bg-current" />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/60 z-40"
              aria-hidden="true"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id="mobile-nav"
              ref={drawerRef}
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="md:hidden fixed left-0 top-0 h-full w-64 bg-neutral-900 z-50 flex flex-col"
            >
              <div
                className="px-6 pt-8 pb-5 border-b border-neutral-800"
                aria-hidden="true"
              >
                <p className="text-base font-bold text-white">
                  Nattapan Tammawongsa
                </p>
                <p className="text-sm text-amber-400 font-medium mt-0.5">
                  Fahsai
                </p>
              </div>
              <ul role="list" className="flex flex-col gap-1.5 px-3 py-4">
                {navLinks.map(({ label, to }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={to === "/"}
                      onClick={() => setOpen(false)}
                      className={navLinkClass}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
