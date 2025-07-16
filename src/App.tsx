import { Code, Palette, Smartphone, Server } from 'lucide-react'

import Navigation from './components/seccions/Navigation'
import Hero from './components/seccions/Hero'
import AboutMe from './components/seccions/AboutMe'
import Skills from './components/seccions/Skills'
import Projects from './components/seccions/Projects'
import Contact from './components/seccions/Contact'
import Footer from './components/seccions/Footer'

const skills = [
  { name: 'React', level: 95, icon: Code },
  { name: 'Vite', level: 90, icon: Server },
  { name: 'TypeScript', level: 85, icon: Code },
  { name: 'Node.js', level: 80, icon: Server },
  { name: 'UI/UX Design', level: 75, icon: Palette },
  { name: 'Mobile Dev', level: 70, icon: Smartphone },
]

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    tags: ['Vite', 'Socket.io', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive portfolio website with modern animations',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    github: '#',
    live: '#',
  },
]

const App = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <Navigation scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <AboutMe />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
