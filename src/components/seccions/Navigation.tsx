import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  scrollToSection: (sectionId: string) => void,
}

const Navigation: React.FC<NavigationProps> = ({scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scroll = (id:string) =>{
    scrollToSection(id)
    setIsMenuOpen(false)
  }

  return (
    <nav className='fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='text-2xl font-bold text-white'
          >
            Lendy Sánchez
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
            {['About', 'Skills', 'Projects', 'Contact'].map(item => (
              <motion.button
                key={item}
                onClick={() => scroll(item.toLowerCase())}
                className='text-gray-300 hover:text-white transition-colors duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-white'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='md:hidden bg-black/30 backdrop-blur-md'
        >
          <div className='px-4 py-4 space-y-4'>
            {['About', 'Skills', 'Projects', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => scroll(item.toLowerCase())}
                className='block text-gray-300 hover:text-white transition-colors duration-300 w-full text-left'
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navigation
