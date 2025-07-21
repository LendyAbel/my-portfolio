import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
const AboutMe = () => {
  return (
    <section id="about" className="bg-black/20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            About Me
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400"></div>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/image/photo-lendy.png"
              alt="Lendy Sánchez"
              className="mx-auto w-full max-w-md rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Passionate about creating digital experiences
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              With over 5 years of experience in web development, I specialize
              in building scalable applications using React, Vite, and Node.js.
              I'm passionate about clean code, user experience, and staying
              up-to-date with the latest technologies.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/LendyAbel"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/lendy-abel-sánchez-vázquez"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:lendyabel93@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
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
