import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const companyProjects = [
  { id: 1, image: "/bg.jpg", title: "Asset Alliance", tag: "Fintech" },
  { id: 2, image: "/bg.jpg", title: "Investment Dashboard", tag: "Dashboard" },
  { id: 3, image: "/bg.jpg", title: "Admin Panel", tag: "Internal Tool" },
  { id: 4, image: "/bg.jpg", title: "Referral System", tag: "Marketing" },
  { id: 5, image: "/bg.jpg", title: "User Management", tag: "Security" },
  { id: 6, image: "/bg.jpg", title: "Analytics Dashboard", tag: "Data Analysis" },
];

const webProjects = [
  { id: 1, image: "/bg.jpg", title: "Portfolio Website", link: "https://yourportfolio.com", tag: "Creative" },
  { id: 2, image: "/bg.jpg", title: "E-Commerce Website", link: "https://yourecommerce.com", tag: "E-Com" },
  { id: 3, image: "/bg.jpg", title: "Restaurant Website", link: "https://restaurantdemo.com", tag: "Business" },
];

// Motion Animation Configs
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const Project = () => {
  const [activeTab, setActiveTab] = useState("elklaus"); // Options: "elklaus" or "web"

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black text-white px-6 py-24">
      
      {/* Dynamic Background Glow Rings */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            My Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Projects</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            A curated gallery of engineering layouts I have shipped, ranging from full-scale financial 
            dashboards to ultra-fast, user-centric web platforms leveraging React, Firebase, and Tailwind CSS.
          </motion.p>
        </div>

        {/* Beautiful Glassmorphism Tab Switcher Container */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-zinc-900/80 backdrop-blur-md p-1.5 rounded-2xl border border-zinc-800 shadow-2xl">
            <button
              onClick={() => setActiveTab("elklaus")}
              className={`relative px-6 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === "elklaus" ? "text-white bg-orange-600 shadow-lg shadow-orange-600/20" : "text-gray-400 hover:text-white"
              }`}
            >
              ELKLAUSCONNECT Projects
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`relative px-6 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === "web" ? "text-white bg-orange-600 shadow-lg shadow-orange-600/20" : "text-gray-400 hover:text-white"
              }`}
            >
              Web Development
            </button>
          </div>
        </div>

        {/* Dynamic Project Panels Grid */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "elklaus" && (
              <motion.div
                key="elklaus-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {companyProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group bg-zinc-900/40 backdrop-blur-md border border-zinc-800 hover:border-orange-500/30 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                      <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-orange-400 text-xs px-3 py-1 rounded-full border border-orange-500/20 font-medium">
                        {project.tag}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "web" && (
              <motion.div
                key="web-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {webProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group bg-zinc-900/40 backdrop-blur-md border border-zinc-800 hover:border-orange-500/30 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                      <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-orange-400 text-xs px-3 py-1 rounded-full border border-orange-500/20 font-medium">
                        {project.tag}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col justify-between h-40">
                      <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-zinc-800 hover:bg-orange-600 text-white text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-600/10"
                      >
                        Launch Application
                        <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Project;