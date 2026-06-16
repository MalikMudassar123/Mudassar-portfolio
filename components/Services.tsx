'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal, RevealGroup } from '@/components/ui/Reveal'

const services = [
  {
    no: '01',
    title: 'Product web apps that scale',
    outcome:
      'Dashboards, internal tools, and SaaS interfaces that stay fast and maintainable as your data, users, and team grow.',
    points: ['React & Next.js architecture', 'Reusable component systems', 'Role-based access & auth flows'],
  },
  {
    no: '02',
    title: 'Marketing sites that convert',
    outcome:
      'High-performance, SEO-ready websites engineered to load instantly and turn visitors into qualified leads.',
    points: ['Core Web Vitals tuned', 'SEO & structured data', 'Conversion-focused UX'],
  },
  {
    no: '03',
    title: 'Full-stack feature delivery',
    outcome:
      'End-to-end features — from REST APIs and database modeling to the polished UI — shipped without hand-offs.',
    points: ['Node.js / Nest.js APIs', 'MongoDB & PostgreSQL', 'Real-time data sync'],
  },
  {
    no: '04',
    title: 'Rescue & performance audits',
    outcome:
      'Inherited a slow or fragile codebase? I diagnose the bottlenecks and ship measurable improvements fast.',
    points: ['Performance profiling', 'Refactoring legacy React', 'Bug & stability triage'],
  },
]

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="01 — What I do"
        title={
          <>
            I don&apos;t sell hours.{' '}
            <span className="text-fg-muted">I deliver outcomes.</span>
          </>
        }
        description="Every engagement is scoped around a business result — faster load times, higher conversion, less maintenance, more shipped. Here's where I create the most value."
      />

      <RevealGroup className="panel mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
        {services.map((s) => (
          <Reveal key={s.no} as="div">
            <article className="group flex h-full flex-col bg-surface p-9 transition-colors duration-300 hover:bg-surface-2 md:p-11">
              <div className="flex items-center gap-4">
                <span className="label text-accent">{s.no}</span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <h3 className="mt-7 heading-sm">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">
                {s.outcome}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-line px-3 py-1 text-xs text-fg-subtle"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  )
}
