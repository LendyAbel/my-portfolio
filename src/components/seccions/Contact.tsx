import { Mail } from 'lucide-react'

import Button from '../ui/button'

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Let's work together
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
          I'm always interested in new opportunities and exciting projects.
          Reach out and let's talk about what you're building.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="mailto:lendyabel93@gmail.com">
            <Button variant="primary">
              <Mail className="mr-2" size={18} />
              Send a message
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
