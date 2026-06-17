'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

interface CaseStudy {
  title: string
  category: string
  image: string
  problem: string
  approach: string
  result: string
  metric: { value: string; label: string }
  stack: string[]
  url?: string
}

const featured: CaseStudy[] = [
  {
    title: 'My Doctor Shop',
    category: 'Healthcare E-commerce',
    image: '/projects/mydoctorshop-1.webp',
    problem:
      'Patients needed a trustworthy, simple way to find and buy medical products online — without the friction of a clunky storefront.',
    approach:
      'Designed a clean, conversion-focused storefront on Next.js with a streamlined catalogue, fast search, and a checkout built to remove hesitation.',
    result:
      'A polished, mobile-first shopping experience with near-instant navigation and a UI that builds buyer confidence at every step.',
    metric: { value: '90+', label: 'Lighthouse performance' },
    stack: ['Next.js', 'React', 'Tailwind CSS', 'WooCommerce'],
    url: 'http://mydoctorshop.com/',
  },
  {
    title: 'Inventory Management System',
    category: 'Operations Web App',
    image: '/projects/inventory-1.webp',
    problem:
      'A team was losing hours to manual stock entry and had no real-time visibility into what was actually on the shelves.',
    approach:
      'Built a barcode-driven inventory web app in React with instant scanning, live stock counts, and an interface operators could learn in minutes.',
    result:
      'Manual entry replaced by scan-to-update workflows — fewer errors, faster counts, and stock data the team can finally trust.',
    metric: { value: '⌀ secs', label: 'To log an item via scan' },
    stack: ['React', 'Barcode API', 'Web App', 'State Mgmt'],
    url: 'https://inventory-demo-test.netlify.app/scan',
  },
  {
    title: 'Benders Agency',
    category: 'Corporate Brand Site',
    image: '/projects/bendersagency-1.webp',
    problem:
      'A US agency needed a site that matched the quality of their work and loaded fast enough to keep prospects engaged.',
    approach:
      'Delivered a modern, responsive Next.js site with a strong brand presentation, refined motion, and performance baked in from the start.',
    result:
      'A premium first impression that loads instantly and presents the agency as the high-end studio they are.',
    metric: { value: 'Instant', label: 'Page navigation' },
    stack: ['Next.js', 'UI/UX', 'Marketing', 'Animation'],
    url: 'https://www.bendersagency.com/',
  },
  {
    title: 'MyGovTools',
    category: 'Public Utility Platform',
    image: '/projects/mygovtools-1.webp',
    problem:
      'A public-services tools platform had to be usable by everyone — with clear information architecture and accessibility built in.',
    approach:
      'Engineered an accessible, well-structured React platform prioritising clarity, keyboard navigation, and a logical content hierarchy.',
    result:
      'A dependable, inclusive tools platform that citizens of any ability can navigate with confidence.',
    metric: { value: 'A11y', label: 'Accessibility-first build' },
    stack: ['React', 'Accessibility', 'Public Sector', 'Tools'],
    url: 'https://www.mygovtools.org/',
  },
]

const more = [
  {
    title: 'ERP System — Multi-Site Inventory & POS',
    desc: 'POS, inventory, and user-management modules with real-time data sync across multiple branches.',
    stack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Resource Planner',
    desc: 'Drag-and-drop tool for allocating human and project resources across concurrent projects.',
    stack: ['React', 'Nest.js', 'Context API'],
  },
  {
    title: 'HRMS — HR Management System',
    desc: 'Full-stack employee platform with JWT auth, dashboards, CRUD, and role-based access control.',
    stack: ['React', 'Node.js', 'JWT'],
  },
  {
    title: 'Valorant Agent Hub',
    desc: 'Interactive platform serving structured agent data with API integration and a responsive UI.',
    stack: ['React', 'API', 'Interactive'],
    url: 'https://valorantagenthub.vercel.app/',
  },
]

function PhaseRow({ label, text }: { label: string; text: string }) {
  return (
    <div className="grid grid-cols-[88px_1fr] gap-4 border-t border-line py-4">
      <span className="label pt-0.5 text-accent">{label}</span>
      <p className="text-sm leading-relaxed text-fg-muted">{text}</p>
    </div>
  )
}

function CaseRow({ study, index }: { study: CaseStudy; index: number }) {
  const [loaded, setLoaded] = useState(false)
  const flip = index % 2 === 1

  const media = (
    <div className="relative aspect-[16/11] overflow-hidden rounded-xl bg-surface-3">
      {!loaded && <div className="absolute inset-0 animate-pulse bg-surface-3" />}
      <Image
        src={study.image}
        alt={`${study.title} — ${study.category} web project built by Mudassar Zafar`}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`object-cover object-top transition-all duration-700 group-hover:scale-[1.04] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {study.url && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-accent/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute bottom-4 left-4 inline-flex translate-y-1 items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-accent-ink opacity-0 shadow-btn transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View live site
            <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </>
      )}
    </div>
  )

  return (
    <Reveal className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      {/* Visual */}
      <div className={flip ? 'lg:order-2' : ''}>
        {study.url ? (
          <a
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${study.title}`}
            className="card group relative block overflow-hidden p-2"
          >
            {media}
          </a>
        ) : (
          <div className="card group relative overflow-hidden p-2">{media}</div>
        )}
      </div>

      {/* Narrative */}
      <div className={flip ? 'lg:order-1' : ''}>
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <p className="eyebrow">{study.category}</p>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.07] px-3 py-1">
            <span className="text-xs font-semibold text-accent">{study.metric.value}</span>
            <span className="text-[11px] text-fg-subtle">{study.metric.label}</span>
          </span>
        </div>
        <h3 className="mt-5 heading-lg" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)' }}>
          {study.title}
        </h3>

        <div className="mt-6">
          <PhaseRow label="Problem" text={study.problem} />
          <PhaseRow label="Approach" text={study.approach} />
          <PhaseRow label="Result" text={study.result} />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {study.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line px-3 py-1 text-xs text-fg-subtle transition-colors hover:border-accent/40 hover:text-accent"
            >
              {s}
            </span>
          ))}
        </div>

        {study.url && (
          <a
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Visit live site
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>
    </Reveal>
  )
}

export default function CaseStudies() {
  return (
    <Section id="work" labelledBy="work-heading">
      <SectionHeader
        headingId="work-heading"
        eyebrow="02 — Selected work"
        title={
          <>
            Real problems.{' '}
            <span className="text-accent">Measured results.</span>
          </>
        }
        description="A look at how I think — not just what I ship. Each project below traces the problem, the approach, and the outcome."
      />

      <div className="mt-16 flex flex-col gap-20 md:gap-28">
        {featured.map((study, i) => (
          <CaseRow key={study.title} study={study} index={i} />
        ))}
      </div>

      {/* More work */}
      <Reveal className="mt-28">
        <p className="eyebrow mb-10">Also delivered</p>
        <div className="panel grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {more.map((m) => (
            <div key={m.title} className="group bg-surface p-8 transition-colors duration-300 hover:bg-surface-2">
              <span className="mb-5 block h-[3px] w-7 rounded-full bg-accent/70" aria-hidden />
              <div className="flex items-start justify-between gap-3">
                <h4 className="heading-sm text-[1.15rem] transition-colors group-hover:text-accent">
                  {m.title}
                </h4>
                {m.url && (
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${m.title}`}
                    className="text-fg-subtle transition-colors hover:text-accent"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{m.desc}</p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                {m.stack.map((s) => (
                  <span key={s} className="text-xs text-fg-subtle">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
