import { Code, Palette, Server, Database } from 'lucide-react'
import {
  Navigation,
  Hero,
  AboutMe,
  Skills,
  Projects,
  Contact,
  Footer,
} from './components'

import projects from './data/projects.json'
import skillsData from './data/skills.json'

const iconsMap = {
  Code,
  Server,
  Palette,
  Database,
}

const skills = skillsData.map((skill) => ({
  ...skill,
  icon: iconsMap[skill.icon as keyof typeof iconsMap] || null,
}))

const App = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
