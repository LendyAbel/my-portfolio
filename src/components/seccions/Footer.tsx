import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mb-4 text-gray-400 md:mb-0">
            © 2024 Lendy Sanchez. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/LendyAbel"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/lendy-abel-sánchez-vázquez"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:lendyabel93@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
