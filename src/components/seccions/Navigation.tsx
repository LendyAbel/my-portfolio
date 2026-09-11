import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

interface NavigationProps {
  scrollToSection: (sectionId: string) => void
}

const links = ['About', 'Skills', 'Projects', 'Contact']

const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scroll = (id: string) => {
    scrollToSection(id)
    setIsMenuOpen(false)
  }

  return (
    <nav className="border-border bg-paper/85 fixed top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <button
            onClick={() => scroll('hero')}
            className="font-display text-ink text-lg font-semibold tracking-tight"
          >
            Lendy Sánchez
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((item) => (
              <button
                key={item}
                onClick={() => scroll(item.toLowerCase())}
                className="text-ink-muted hover:text-ink text-sm transition-colors duration-200"
              >
                {item}
              </button>
            ))}
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              <button className="bg-accent hover:bg-accent-strong flex cursor-pointer flex-row items-center rounded-full px-4 py-2 text-sm font-medium text-white transition-colors duration-200">
                <Download className="mr-2" size={16} />
                CV
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-ink md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-border bg-paper border-t md:hidden"
        >
          <div className="space-y-4 px-4 py-5">
            {links.map((item) => (
              <button
                key={item}
                onClick={() => scroll(item.toLowerCase())}
                className="text-ink-muted hover:text-ink block w-full text-left text-sm transition-colors duration-200"
              >
                {item}
              </button>
            ))}
            <div className="border-border border-t pt-4">
              <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                <button className="text-accent hover:text-accent-strong flex w-full cursor-pointer flex-row items-center text-left text-sm font-medium transition-colors duration-200">
                  <Download className="mr-2" size={16} />
                  CV
                </button>
              </a>
            </div>
          </div>
         
        </motion.div>
      )}
    </nav>
  )
}

export default Navigation
