import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Lendy Sánchez. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/LendyAbel"
              className="text-ink-muted transition-colors hover:text-ink"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/lendy-abel-sánchez-vázquez"
              className="text-ink-muted transition-colors hover:text-ink"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:lendyabel93@gmail.com"
              className="text-ink-muted transition-colors hover:text-ink"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
