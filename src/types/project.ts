export interface ProjectHighlight {
  title: string
  description: string
}

export interface ProjectScreenshot {
  src: string
  alt: string
}

export interface Project {
  slug: string
  title: string
  subtitle?: string
  description: string
  longDescription?: string[]
  image: string
  previewVideo?: string
  previewGif?: string
  screenshots?: ProjectScreenshot[]
  tags: string[]
  github: string
  live: string
  features?: string[]
  highlights?: ProjectHighlight[]
}
