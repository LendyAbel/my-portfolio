import {motion} from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
const AboutMe = () => {
  return (
    <section id='about' className='py-20 bg-black/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              About Me
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8'></div>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src='/image/photo-lendy.png'
                alt='Lendy Sánchez'
                className='rounded-2xl shadow-2xl mx-auto w-full max-w-md'
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <h3 className='text-2xl md:text-3xl font-bold text-white'>
                Passionate about creating digital experiences
              </h3>
              <p className='text-gray-300 text-lg leading-relaxed'>
                With over 5 years of experience in web development, I specialize
                in building scalable applications using React, Vite, and
                Node.js. I'm passionate about clean code, user experience, and
                staying up-to-date with the latest technologies.
              </p>
              <p className='text-gray-300 text-lg leading-relaxed'>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
              <div className='flex space-x-4'>
                <motion.a
                  href='#'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href='#'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href='#'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default AboutMe
