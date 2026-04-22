import React from 'react'
import { motion } from 'framer-motion'

const About = () => {

  // container for stagger effect
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <main className='py-32 text-white border-b-2 border-gray-700'>

      {/* IMAGES */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='flex w-screen max-lg:flex-col'
      >
        {[1,2,3].map((i) => (
          <motion.img
            key={i}
            variants={item}
            src="/background.jpg"
            alt="about"
            className='lg:w-1/3 p-3 rounded-md hover:scale-105 transition duration-500'
          />
        ))}
      </motion.div>

      {/* TEXT SECTION */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='flex gap-10 max-lg:flex-col mt-20 lg:p-16 p-8 w-screen'
      >

        {/* ABOUT */}
        <motion.div variants={item} className='lg:w-1/3 flex flex-col gap-4'>
          <h2 className='font-bold text-4xl'>ABOUT ME</h2>
          <p>
            I'm a web developer and an entrepreneur with a passion for building both digital
            and physical products. I specialize in creating responsive, user-friendly web applications,
            focusing on clean design and smooth user experiences.
          </p>
          <p>
            Beyond coding, I run my clothing brand where I bring ideas to life through design and branding.
            Managing a brand has strengthened my skills in creativity, problem-solving, and understanding what 
            people actually connect with — not just what looks good.
            I enjoy turning concepts into reality, whether it's developing a website or launching a new clothing design.
          </p>
        </motion.div>

        {/* VISION */}
        <motion.div variants={item} className='lg:w-1/3 flex flex-col gap-4'>
          <h3 className='font-bold uppercase text-lg'>My Vision</h3>
          <p>
            My vision is to merge technology and creativity to build experiences people
            connect with — online and in real life. Through web development and design,
            I strive to create products that tell stories, inspire confidence, and leave a lasting impression.
          </p>
        </motion.div>

        {/* MISSION */}
        <motion.div variants={item} className='lg:w-1/3 flex flex-col gap-4'>
          <h3 className='font-bold uppercase text-lg'>My Mission</h3>
          <p>
            To combine technology and creativity to solve problems, tell stories, and build products that
            positively impact the world. Whether through web applications or design,
            I aim to create experiences that are both functional and expressive.
          </p>
        </motion.div>

      </motion.div>
    </main>
  )
}

export default About