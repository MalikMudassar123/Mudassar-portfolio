'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal, RevealGroup } from '@/components/ui/Reveal'

const iconProps = {
  className: 'h-5 w-5',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const services = [
  {
    no: '01',
    title: 'Product web apps that scale',
    outcome:
      'Dashboards, internal tools, and SaaS interfaces that stay fast and maintainable as your data, users, and team grow.',
    points: ['React & Next.js architecture', 'Reusable component systems', 'Role-based access & auth flows'],
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="9" rx="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" />
        <rect x="14" y="12" width="7" height="9" rx="1.5" />
        <rect x="3" y="16" width="7" height="5" rx="1.5" />
      </svg>
    ),
  },
  {
    no: '02',
    title: 'Marketing sites that convert',
    outcome:
      'High-performance, SEO-ready websites engineered to load instantly and turn visitors into qualified leads.',
    points: ['Core Web Vitals tuned', 'SEO & structured data', 'Conversion-focused UX'],
    icon: (
      <svg {...iconProps}>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M17 7h4v4" />
      </svg>
    ),
  },
  {
    no: '03',
    title: 'Full-stack feature delivery',
    outcome:
      'End-to-end features — from REST APIs and database modeling to the polished UI — shipped without hand-offs.',
    points: ['Node.js / Nest.js APIs', 'MongoDB & PostgreSQL', 'Real-time data sync'],
    icon: (
      <svg {...iconProps}>
        <path d="M12 2 2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    no: '04',
    title: 'Rescue & performance audits',
    outcome:
      'Inherited a slow or fragile codebase? I diagnose the bottlenecks and ship measurable improvements fast.',
    points: ['Performance profiling', 'Refactoring legacy React', 'Bug & stability triage'],
    icon: (
      <svg {...iconProps}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <Section id="services" labelledBy="services-heading">
      <SectionHeader
        headingId="services-heading"
        eyebrow="01 — What I do"
        title={
          <>
            I don&apos;t sell hours.{' '}
            <span className="text-accent">I deliver outcomes.</span>
          </>
        }
        description="Every engagement is scoped around a business result — faster load times, higher conversion, less maintenance, more shipped. Here's where I create the most value."
      />

      <RevealGroup className="mt-16 grid gap-5 md:grid-cols-2 md:gap-6">
        {services.map((s) => (
          <Reveal key={s.no} as="div">
            <article className="card group relative flex h-full flex-col overflow-hidden p-8 md:p-9">
              {/* soft purple wash on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
                  {s.icon}
                </span>
                <span className="font-serif text-[2.25rem] font-medium leading-none text-fg/[0.08]">
                  {s.no}
                </span>
              </div>

              <h3 className="relative mt-6 heading-sm">{s.title}</h3>
              <p className="relative mt-3 text-[15px] leading-relaxed text-fg-muted">
                {s.outcome}
              </p>

              <ul className="relative mt-auto space-y-3 border-t border-line pt-6">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[13px] text-fg-muted">
                    <svg className="h-4 w-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
