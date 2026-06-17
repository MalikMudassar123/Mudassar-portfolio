'use client'

import { Section } from '@/components/ui/Section'
import { Reveal, RevealGroup } from '@/components/ui/Reveal'

const experience = [
  {
    company: 'Aryze Tech',
    region: 'Germany',
    role: 'Full Stack Developer',
    period: 'Apr 2024 — Present',
    note: 'Real-time, performance-focused React apps; drag-and-drop resource tools; APIs with Nest.js, Node & MongoDB.',
  },
  {
    company: 'Tech9et',
    region: 'United Kingdom',
    role: 'Full Stack Developer',
    period: 'Oct 2023 — Apr 2024',
    note: 'Product-level solutions in React & Next.js, optimised for performance and SEO with distributed teams.',
  },
  {
    company: 'Maxenius Solution',
    region: 'Pakistan',
    role: 'React / Next.js Developer',
    period: 'Jan 2023 — Oct 2023',
    note: 'Complex frontends, custom Node/Express APIs, auth flows and state management in a full MERN environment.',
  },
  {
    company: 'Optimum Tech',
    region: 'Pakistan',
    role: 'Full Stack Developer Intern',
    period: 'Aug 2022 — Dec 2022',
    note: 'Built responsive React UI components and integrated REST APIs while mastering frontend–backend connectivity.',
  },
]

const stack = {
  Frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Redux', 'Vite'],
  'Styling & UI': ['Tailwind CSS', 'Material UI', 'Chakra UI', 'Framer Motion'],
  Backend: ['Node.js', 'Nest.js', 'Express', 'REST APIs'],
  Data: ['MongoDB', 'PostgreSQL', 'SQL'],
  'Tools & AI': ['Git', 'Figma', 'Postman', 'Cursor', 'Claude Code'],
}

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Bio */}
        <Reveal>
          <span className="eyebrow">04 — About</span>
          <h2 className="heading-lg mt-6">
            Engineering is a craft.
            <br />
            <span className="italic text-accent">I treat it like one.</span>
          </h2>
          <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-fg-muted">
            <p>
              I&apos;m Mudassar Zafar, a senior React &amp; Next.js engineer with 3+
              years building production web applications. I specialise in modern
              JavaScript — React, Next.js, and clean component architecture — and
              I&apos;m equally comfortable supporting the backend with Node.js,
              Nest.js, and MongoDB.
            </p>
            <p>
              I care about the details most people never notice but everyone feels:
              load times, smooth interactions, code that the next developer can
              actually read. That&apos;s what separates a site that works from a
              product that lasts.
            </p>
            <p>
              I hold a BS in Computer Science (GCUF, 2024) and work daily with modern
              AI-assisted tooling to ship higher-quality work, faster.
            </p>
          </div>

          {/* Tech stack */}
          <div className="mt-10 space-y-5">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group} className="grid grid-cols-[120px_1fr] gap-4 border-t border-line pt-4">
                <span className="label">{group}</span>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {items.map((s) => (
                    <span key={s} className="text-sm text-fg">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Experience timeline */}
        <div>
          <Reveal>
            <span className="eyebrow mb-8 block">Experience</span>
          </Reveal>
          <RevealGroup className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" aria-hidden />
            <div className="flex flex-col gap-9">
              {experience.map((e) => (
                <Reveal key={e.company} as="div">
                  <div className="relative pl-10">
                    <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="heading-sm text-[1.15rem]">{e.role}</h3>
                      <span className="label text-fg-subtle">{e.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-accent">
                      {e.company}{' '}
                      <span className="text-fg-subtle">· {e.region}</span>
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-fg-muted">{e.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </RevealGroup>
        </div>
      </div>
    </Section>
  )
}
