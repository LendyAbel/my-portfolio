import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface Skill {
  name: string
  level: number
  icon: LucideIcon
}

interface SkillsProps {
  skills: Skill[]
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Skills & Expertise
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-fit rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3">
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-white">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-2 w-full rounded-full bg-gray-700">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <p className="mt-2 text-center text-gray-300">
                    {skill.level}%
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
