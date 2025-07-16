import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  live: string
}
interface ProjectsProps {
  projects: Project[]
}
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id='projects' className='py-20 bg-black/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Featured Projects
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8'></div>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className='group'
            >
              <Card className='bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/10 transition-all duration-300'>
                <div className='relative overflow-hidden'>
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  <div className='absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <Button size='sm' variant='secondary' className='p-2'>
                      <Github size={16} />
                    </Button>
                    <Button size='sm' variant='secondary' className='p-2'>
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className='text-white'>{project.title}</CardTitle>
                  <CardDescription className='text-gray-300'>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map(tag => (
                      <Badge
                        key={tag}
                        variant='secondary'
                        className='bg-purple-500/20 text-purple-300 border-purple-500/30'
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
