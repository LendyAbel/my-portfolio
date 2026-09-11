import type { LucideIcon } from 'lucide-react'

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
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Skills &amp; expertise
        </h2>

        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <skill.icon className="text-accent" size={18} />
                  <span className="text-ink">{skill.name}</span>
                </div>
                <span className="font-mono text-sm text-ink-muted">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1 w-full rounded-full bg-border">
                <div
                  className="h-1 rounded-full bg-accent"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
