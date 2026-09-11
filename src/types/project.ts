export interface ProjectHighlight {
  title: string
  description: string
}

export interface Project {
  slug: string
  title: string
  subtitle?: string
  description: string
  longDescription?: string[]
  image: string
  tags: string[]
  github: string
  live: string
  features?: string[]
  highlights?: ProjectHighlight[]
}
