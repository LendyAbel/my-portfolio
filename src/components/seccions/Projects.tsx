import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, Github } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import Badge from '../ui/badge'
import type { Project } from '../../types/project'

interface ProjectsProps {
  projects: Project[]
}
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Featured projects
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="flex h-full flex-col overflow-hidden border-border bg-paper transition-colors duration-200 hover:border-ink/30"
            >
              <Link to={`/projects/${project.slug}`} className="overflow-hidden border-b border-border">
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className="h-44 w-full object-cover transition-transform duration-200 hover:scale-105"
                />
              </Link>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-ink">
                  <Link to={`/projects/${project.slug}`} className="transition-colors hover:text-accent">
                    {project.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-2 h-10 text-ink-muted">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="border-accent/20 bg-accent-tint text-accent-strong"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-5 border-t border-border pt-4">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    <ArrowRight size={15} />
                    Details
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={15} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight size={15} />
                      Live site
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
