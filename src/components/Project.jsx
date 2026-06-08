import React, { useState } from "react";

const companyProjects = [
  {
    id: 1,
    image: "/bg.jpg",
    title: "Asset Alliance",
  },
  {
    id: 2,
    image: "/bg.jpg",
    title: "Investment Dashboard",
  },
  {
    id: 3,
    image: "/bg.jpg",
    title: "Admin Panel",
  },
  {
    id: 4,
    image: "/bg.jpg",
    title: "Referral System",
  },
  {
    id: 5,
    image: "/bg.jpg",
    title: "User Management",
  },
  {
    id: 6,
    image: "/bg.jpg",
    title: "Analytics Dashboard",
  },
];

const webProjects = [
  {
    id: 1,
    image: "/bg.jpg",
    title: "Portfolio Website",
    link: "https://yourportfolio.com",
  },
  {
    id: 2,
    image: "/bg.jpg",
    title: "E-Commerce Website",
    link: "https://yourecommerce.com",
  },
  {
    id: 3,
    image: "/bg.jpg",
    title: "Restaurant Website",
    link: "https://restaurantdemo.com",
  },
];

const Project = () => {
  const [showElklaus, setShowElklaus] = useState(false);
  const [showWeb, setShowWeb] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black text-white px-6 py-20">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            My <span className="text-orange-500">Projects</span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            A collection of projects I have built, ranging from investment
            platforms and dashboards to modern web applications using React,
            Next.js, Firebase, and Tailwind CSS.
          </p>
        </div>

        {/* ELKLAUSCONNECT SECTION */}
        <section className="mb-20">
          <button
            onClick={() => setShowElklaus(!showElklaus)}
            className="bg-orange-600 hover:bg-orange-500 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-orange-600/30 transition-all duration-300 hover:scale-105"
          >
            {showElklaus
              ? "Hide ELKLAUSCONNECT Projects"
              : "View ELKLAUSCONNECT Projects"}
          </button>

          {showElklaus && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {companyProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white/5 backdrop-blur-md border border-orange-500/20 rounded-2xl overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-orange-500/20"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-5">
                    <h2 className="text-xl font-bold text-white">
                      {project.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* WEB DEVELOPMENT SECTION */}
        <section>
          <button
            onClick={() => setShowWeb(!showWeb)}
            className="bg-orange-600 hover:bg-orange-500 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-orange-600/30 transition-all duration-300 hover:scale-105"
          >
            {showWeb
              ? "Hide Web Development Projects"
              : "View Web Development Projects"}
          </button>

          {showWeb && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {webProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white/5 backdrop-blur-md border border-orange-500/20 rounded-2xl overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-orange-500/20"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-5">
                    <h2 className="text-xl font-bold mb-4 text-white">
                      {project.title}
                    </h2>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-orange-600 hover:bg-orange-500 px-5 py-2 rounded-lg font-medium transition-all duration-300"
                    >
                      Visit Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Project;