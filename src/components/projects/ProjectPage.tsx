import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'

import Badge from '../ui/badge'
import Button from '../ui/button'
import type { Project } from '../../types/project'
import projects from '../../data/projects.json'

const typedProjects = projects as Project[]

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = typedProjects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [slug])

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-paper px-4 text-center">
        <h1 className="font-display text-3xl font-semibold text-ink">
          Project not found
        </h1>
        <p className="text-ink-muted">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary">
            <ArrowLeft className="mr-2" size={16} />
            Back to portfolio
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-paper">
      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={15} />
            Back to portfolio
          </Link>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-border">
          {project.previewVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              width="960"
              className="w-full object-cover"
            >
              <source src={project.previewVideo} type="video/mp4" />
            </video>
          ) : (
            <img
              src={project.previewGif || project.image || '/placeholder.svg'}
              alt={`${project.title} preview`}
              className="w-full object-cover"
            />
          )}
        </div>

        <header className="mt-8">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="mt-2 text-lg text-ink-muted">{project.subtitle}</p>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                className="border-accent/20 bg-accent-tint text-accent-strong"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Github className="mr-2" size={16} />
                  View code
                </Button>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">
                  <ArrowUpRight className="mr-2" size={16} />
                  Live demo
                </Button>
              </a>
            )}
          </div>
        </header>

        {project.longDescription && project.longDescription.length > 0 ? (
          <section className="mt-12 space-y-4">
            {project.longDescription.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-ink-muted">
                {paragraph}
              </p>
            ))}
          </section>
        ) : (
          <section className="mt-12">
            <p className="leading-relaxed text-ink-muted">
              {project.description}
            </p>
          </section>
        )}

        {project.features && project.features.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Key features
            </h2>
            <ul className="mt-5 space-y-3">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex gap-3 leading-relaxed text-ink-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Technical highlights
            </h2>
            <div className="mt-5 space-y-6">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="border-l-2 border-accent/30 pl-5"
                >
                  <h3 className="font-medium text-ink">{highlight.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-ink-muted">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Screenshots
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {project.screenshots.map((screenshot) => (
                <div
                  key={screenshot.src}
                  className="overflow-hidden rounded-lg border border-border"
                >
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  )
}

export default ProjectPage
