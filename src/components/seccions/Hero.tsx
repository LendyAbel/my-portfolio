import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden'>
      <motion.div style={{ y }} className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20' />
      </motion.div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className='text-5xl md:text-7xl font-bold text-white mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full Stack
            <motion.span
              className='block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Developer
            </motion.span>
          </motion.h1>

          <motion.p
            className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I create beautiful, responsive web applications with modern
            technologies and exceptional user experiences.
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size='lg'
              onClick={() => scrollToSection('projects')}
              className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3'
            >
              View My Work
            </Button>
            <Button
              variant='outline'
              size='lg'
              onClick={() => scrollToSection('contact')}
              className='border-white/20 text-white hover:bg-white/10 px-8 py-3 bg-transparent'
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className='text-white/60' size={32} />
      </motion.div>
    </section>
  )
}

export default Hero
