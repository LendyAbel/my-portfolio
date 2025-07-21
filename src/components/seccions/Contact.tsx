import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

import Button from '../ui/button'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Let's Work Together
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400"></div>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-300">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>

          <motion.div
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="mailto:lendyabel93@gmail.com">
              <Button variant="main-colored">
                <Mail className="mr-2" size={20} />
                Send Message
              </Button>
            </a>
            <a href="/CV.pdf" download target="_blank" rel="noopener noreferrer">
              <Button className="border-white/20 text-white hover:bg-white/10">
                Download Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
