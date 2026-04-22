import React from "react";
import  {motion}  from "framer-motion";
import Introduction from "./components/IntroductionGrid";
import About from "./components/AboutGrid";

const App = () => {
  return (
  <section className="bg-[url('./bg.jpg')] bg-cover bg-center w-screen">
    <div className="text-white m-8 flex max-lg:flex-col items-center justify-center gap-14 pt-14"> 
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="gap-6 flex flex-col items-center rounded-lg shadow-2xl p-2 shadow-cyan-100/50 order-1"
        >
        <img
          src="/background.jpg"
          alt="my photo"
          className=" rounded-lg lg:h-60 h-48 hover:scale-105 transition duration-500"
        />

        <div>
          <h1 className="text-2xl uppercase font-bold">
            James Nicholas Chidiebere
          </h1>
          <p className="font-medium pt-2 uppercase">Web Developer</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col gap-4 max-w-lg px-5"
        >
        <h1 className="text-6xl md:text-8xl font-black">
          My Portfolio
        </h1>

        <p className="text-lg">
          Welcome to my world of code and creativity. I’m a web developer 
          and T-shirt brand owner who loves turning ideas into functional
            websites and meaningful designs. Take a look around and see what 
            I’ve been building.      
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-cyan-700 px-6 py-2 rounded-lg font-semibold"
          >
          View Projects
        </motion.button>
      </motion.div>

    </div>
    <Introduction />
    <About />
  </section>
  );
};

export default App;