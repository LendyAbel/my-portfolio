import {motion} from 'framer-motion'
import type { LucideIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface Skill {
    name: string,
    level: number,
    icon: LucideIcon
}

interface SkillsProps {
    skills: Skill[]
}

const Skills: React.FC<SkillsProps> = ({skills}) => {
  return (
    <section id='skills' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Skills & Expertise
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8'></div>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className='bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300'>
                  <CardHeader className='text-center'>
                    <div className='mx-auto mb-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit'>
                      <skill.icon className='text-white' size={24} />
                    </div>
                    <CardTitle className='text-white'>{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='w-full bg-gray-700 rounded-full h-2'>
                      <motion.div
                        className='bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full'
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className='text-gray-300 text-center mt-2'>
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
