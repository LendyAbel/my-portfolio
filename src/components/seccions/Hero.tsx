import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

import Button from '../ui/button'

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

const stack = ['React', 'TypeScript', 'Node.js', 'Vite']

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="mb-5 font-mono text-sm text-accent">
            Full stack developer
          </p>

          <h1 className="max-w-xl font-display text-5xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl">
            End-to-end development, always designed around the people who use it.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
            Experience turning product ideas into fast, reliable web
            applications — from the database schema to the last pixel.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              variant="primary"
              onClick={() => scrollToSection('projects')}
            >
              View my work
            </Button>
            <Button onClick={() => scrollToSection('contact')}>
              Get in touch
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6">
            {stack.map((tech) => (
              <span key={tech} className="font-mono text-xs text-ink-muted">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="overflow-hidden rounded-full  border-border bg-surface">
            <img
              src="/image/photo-lendy.webp"
              alt="Lendy Sánchez"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-lg border border-border"
          />
        </motion.div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ink-muted transition-colors hover:text-ink sm:block"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  )
}

export default Hero
