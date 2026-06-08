import React from "react";
import { motion } from "framer-motion";

import Introduction from "./components/IntroductionGrid";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";

const App = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* SOFT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10">

        {/* HERO SECTION */}
        <section
          id="home"
          className="
            max-w-7xl mx-auto
            min-h-screen
            flex
            max-lg:flex-col
            items-center
            justify-center
            gap-16
            px-6 lg:px-12
          "
        >

          {/* IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
              bg-white/5
              backdrop-blur-md
              border border-orange-500/20
              rounded-3xl
              p-6
              shadow-xl
              hover:shadow-orange-500/20
              hover:-translate-y-2
              transition-all duration-500
            "
          >
            <div className="flex flex-col items-center gap-6">
              <img
                src="/background.jpg"
                alt="James Nicholas"
                className="
                  h-72 w-72
                  object-cover
                  rounded-2xl
                  border-2 border-orange-500/30
                "
              />

              <div className="text-center">
                <h2 className="text-2xl font-bold uppercase">
                  James Nicholas Chidiebere
                </h2>

                <p className="text-orange-500 font-semibold mt-2">
                  Full Stack Web Developer
                </p>
              </div>
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
              My{" "}
              <span className="text-orange-500">Portfolio</span>
            </h1>

            <p className="text-lg text-gray-300 mt-8 leading-relaxed">
              Welcome to my world of code and creativity. I'm a web developer and entrepreneur who builds modern, responsive, and scalable web applications. From investment platforms and dashboards to sleek business websites, I turn ideas into real-world digital experiences.
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "React",
                "Next.js",
                "Firebase",
                "Tailwind CSS",
                "JavaScript",
                "Node.js",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4 py-2
                    rounded-full
                    bg-orange-600/10
                    border border-orange-500/20
                    text-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="
                  bg-orange-600 hover:bg-orange-500
                  px-8 py-3
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  border border-orange-500
                  hover:bg-orange-600/10
                  px-8 py-3
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </section>

        {/* INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Introduction />
        </motion.div>

        {/* ABOUT */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.div>

        {/* PROJECTS */}
        <motion.div
          id="projects"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Project />
        </motion.div>

        {/* CONTACT */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.div>

        {/* FOOTER */}
        <footer className="border-t border-orange-500/10 py-10 text-center text-gray-400">
          <p>© 2024 James Nicholas Chidiebere.</p>
          <p className="mt-2 text-sm">
            Built with React, Tailwind CSS & Framer Motion.
          </p>
        </footer>

      </div>
    </section>
  );
};

export default App;