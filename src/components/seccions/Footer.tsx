import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
const Footer = () => {
  return (
    <footer className='py-8 bg-black/40 border-t border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 mb-4 md:mb-0'>
              © 2024 Lendy Sanchez. All rights reserved.
            </p>
            <div className='flex space-x-6'>
              <motion.a
                href='#'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='text-gray-400 hover:text-white transition-colors'
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href='#'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='text-gray-400 hover:text-white transition-colors'
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href='#'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='text-gray-400 hover:text-white transition-colors'
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
