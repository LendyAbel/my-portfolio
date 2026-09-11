const stats = [
  { value: '5+', label: 'Years building products' },
  { value: '20+', label: 'Projects shipped' },
  { value: '4', label: 'Core languages' },
]

const AboutMe = () => {
  return (
    <section id="about" className="border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            About me
          </h2>

          <div>
            <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
              <p>
                I specialize in building scalable web applications with
                React, Vite, and Node.js — with a focus on clean
                architecture, thoughtful interfaces, and code that's easy for
                the next person to pick up.
              </p>
              <p>
                Outside of client work, I explore new tools, contribute to
                open-source projects, and share what I learn with the
                developer community.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-display text-3xl font-semibold text-ink">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-sm text-ink-muted">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
