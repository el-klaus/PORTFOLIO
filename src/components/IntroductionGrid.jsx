import React from 'react'
import { motion } from 'framer-motion'

const Introduction = () => {

  return (
    <main className='grid lg:grid-cols-2 justify-between text-white pt-30 px-10 border-t-2 border-gray-700 gap-8 py-8 lg:m-20 '>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='space-y-7  space-x-4'
      >

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='font-bold lg:text-6xl text-4xl text-orange-500 inline-block border-b-4 border-orange-500/20 uppercase'
        >
          Introduction
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          I'm a web developer with a creative edge and the founder of ELKLAUSCONNET, a brand driven
          by design and identity. I enjoy building clean and responsive websites and crafting visuals that tell stories —
          whether it's through code or design. For me, it's about creating experiences that people remember.
          I am passionate about turning ideas into functional and visually compelling websites.
        </motion.p>

        {/* Bottom sections */}
        <div className='flex max-lg:flex-col gap-10'>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='space-y-4'
          >
            <h3 className='font-bold text-2xl'>WEB DEVELOPER</h3>
            <p>
              Frontend and Fullstack Web Developer who builds modern, responsive, and scalable web applications.
              I work with HTML, CSS, Tailwind CSS, JavaScript, Node.js, Vite, and Next.js, and I integrate databases to create
              complete end-to-end solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className='space-y-4'
          >
            <h3 className='font-bold text-2xl'>ELKLAUSCONNET</h3>
            <p>
              Our brand was created from a passion for design and self-expression. We turn ideas into wearable art through
              unique T-shirt designs that speak personality, confidence, and creativity. Every collection tells a story.
            </p>
          </motion.div>

        </div>

      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className='overflow-hidden rounded-xl'
      >
        <img
          src="/first.jpg"
          alt="introduction"
          className='lg:h-full  rounded-xl hover:scale-105 transition duration-500 '
        />
      </motion.div>

    </main>
  )
}

export default Introduction