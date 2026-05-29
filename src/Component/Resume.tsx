import { useEffect } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Content/Home";
import About from "../Content/About";
import Education from "../Content/Education";
import Experience from "../Content/Experience";
import Skills from "../Content/Skills";
import Contact from "../Content/Contact";
import Projects from "../Content/Projects";

function Resume() {
  // Respect prefers-reduced-motion — add class to root for CSS fallback
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = (reduced: boolean) => {
      document.documentElement.classList.toggle("motion-reduce", reduced);
    };
    apply(mq.matches);
    mq.addEventListener("change", (e) => apply(e.matches));
    return () => mq.removeEventListener("change", (e) => apply(e.matches));
  }, []);

  return (
    <Router>
      <div className="flex min-h-screen bg-[#0f0f0f] text-neutral-200">
        <Navbar />
        <main id="main-content" className="flex-1 md:ml-64" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default Resume;
