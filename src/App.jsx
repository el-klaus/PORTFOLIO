import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Introduction from "./components/IntroductionGrid";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Artificial premium loader counter
  useEffect(() => {
    if (progress < 100) {
      const timeout = setTimeout(() => {
        setProgress((prev) => Math.min(prev + Math.floor(Math.random() * 15) + 5, 100));
      }, 120);
      return () => clearTimeout(timeout);
    } else {
      const doneTimeout = setTimeout(() => setLoading(false), 600);
      return () => clearTimeout(doneTimeout);
    }
  }, [progress]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      {/* 1. CYBERPUNK PRELOADER TERMINAL */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-mono select-none"
          >
            <div className="w-64 space-y-4">
              <div className="flex justify-between text-[11px] uppercase tracking-[0.2em] text-orange-500/70">
                <span className="animate-pulse">Init Pipeline...</span>
                <span>{progress}%</span>
              </div>
              <div className="h-0.5 w-full bg-neutral-900 overflow-hidden relative border border-neutral-900 rounded-full">
                <motion.div 
                  className="h-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.6)]" 
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-[9px] text-neutral-600 uppercase tracking-widest text-center">
                System Core v2.06 • Active
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN APPLICATION LANDSCAPE */}
      <section className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-orange-500/30 selection:text-orange-200">
        
        {/* INTERACTIVE AMBIENT LAYER */}
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] max-w-200 bg-orange-500/5 rounded-full blur-[160px] mix-blend-screen pointer-events-none animate-pulse duration-[8s]" />
        <div className="absolute top-[40vh] right-0 w-[40vw] h-[40vw] max-w-150 bg-amber-600/5 rounded-full blur-[140px] mix-blend-screen pointer-events-none" />

        {/* FINE GRID LINING MATRIX */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

        <div className="relative z-10">

          {/* HERO SECTION */}
          <section
            id="home"
            className="max-w-7xl mx-auto min-h-screen flex max-lg:flex-col items-center justify-center gap-16 lg:gap-24 px-6 lg:px-12 pt-24 pb-20"
          >
            {/* PORTRAIT CORE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={!loading ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative group order-2 max-lg:order-1 shrink-0"
            >
              {/* Outer Glow Halo Ring */}
              <div className="absolute -inset-1 bg-linear-to-tr from-orange-600 to-amber-500 rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-40 group-hover:scale-105 transition duration-700" />
              
              <div className="relative bg-neutral-950 border border-neutral-800/80 rounded-[2.2rem] p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex flex-col items-center gap-6">
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-800">
                    <img
                      src="/klausphoto.png"
                      alt="James Nicholas"
                      className="h-72 w-72 object-cover grayscale group-hover:grayscale-0 transition duration-700 scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="text-center space-y-1">
                    <h2 className="text-xl font-bold tracking-tight text-neutral-200">
                      James Nicholas Chidiebere
                    </h2>
                    <p className="text-xs font-mono tracking-widest text-orange-500 uppercase font-semibold">
                      Full Stack Web Developer
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* TYPOGRAPHY MATRIX */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={!loading ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="max-w-2xl text-left max-lg:text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono text-[11px] tracking-widest uppercase rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping" />
                Available for worldwide contracts
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                My <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-orange-400 to-amber-500 drop-shadow-[0_2px_20px_rgba(249,115,22,0.2)]">Portfolio</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-400 mt-8 leading-relaxed font-normal">
                Welcome to my digital environment. I design and launch modern, responsive architectures. From enterprise financial nodes and sleek data dash panels to smooth business landing footprints, I convert complex logic into fluid human-centric experiences.
              </p>

              {/* PILL STACK LABELS */}
              <div className="flex flex-wrap gap-2 mt-8 max-lg:justify-center">
                {["React", "Next.js", "Firebase", "Tailwind CSS", "JavaScript", "Node.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-white hover:border-orange-500/30 font-mono text-xs transition duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* SYSTEM ROUTERS */}
              <div className="flex flex-wrap gap-4 mt-10 max-lg:justify-center">
                <a 
                  href="#projects" 
                  className="bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-950/40 px-8 py-3.5 rounded-xl font-medium text-sm tracking-wide transition transform active:scale-95 duration-200"
                >
                  View Systems
                </a>
                <a 
                  href="#contact" 
                  className="border border-neutral-800 hover:border-neutral-700 bg-neutral-900/40 text-neutral-300 hover:text-white px-8 py-3.5 rounded-xl font-medium text-sm tracking-wide transition transform active:scale-95 duration-200"
                >
                  Contact Gateway
                </a>
              </div>
            </motion.div>
          </section>

          {/* SCROLL CONTAINER PIPELINES */}
          {[
            { id: "introduction", component: <Introduction /> },
            { id: "about", component: <About /> },
            { id: "projects", component: <Project /> },
            { id: "contact", component: <Contact /> }
          ].map(({ id, component }) => (
            <motion.div
              key={id}
              id={id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInUpVariants}
            >
              {component}
            </motion.div>
          ))}

          {/* APPLICATION TERMINAL FOOTER */}
          <footer className="border-t border-neutral-900 bg-black/40 backdrop-blur-md py-12 text-center text-neutral-500 text-xs font-mono relative">
            <p>© {new Date().getFullYear()} James Nicholas Chidiebere.</p>
            <p className="mt-1.5 text-neutral-600 tracking-wide text-[11px]">
              Engineered using React, Tailwind Utility Layers & Framer Core Architecture.
            </p>
          </footer>

        </div>
      </section>
    </>
  );
};

export default App;