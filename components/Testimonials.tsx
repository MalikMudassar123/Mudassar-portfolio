'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal, RevealGroup } from '@/components/ui/Reveal'

/**
 * Add real, verifiable testimonials here as they come in (e.g. pulled from
 * LinkedIn recommendations). When this array is non-empty, the quote cards
 * render automatically. Left empty so nothing fabricated ever ships.
 */
const testimonials: { quote: string; name: string; role: string }[] = []

const commitments = [
  {
    title: 'Clear communication',
    desc: 'Regular demos and honest updates. You’re never left wondering where your project stands.',
  },
  {
    title: 'Ownership, not tickets',
    desc: 'I take responsibility for outcomes — flagging risks early and solving problems, not just closing tasks.',
  },
  {
    title: 'Built to last',
    desc: 'Clean, documented, modular code your team can extend long after the engagement ends.',
  },
  {
    title: 'On time, in scope',
    desc: 'Realistic timelines agreed up front, then met. No moving goalposts, no surprise invoices.',
  },
]

export default function Testimonials() {
  return (
    <Section id="trust">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeader
            eyebrow="05 — Working together"
            title={
              <>
                The reason teams{' '}
                <span className="text-fg-muted">keep me on speed dial.</span>
              </>
            }
            description="Talent gets you in the door. How it feels to actually work with someone is what earns the next project — and the referral after that."
          />
          <a
            href="https://linkedin.com/in/mudassar-mern-842584250"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Read recommendations on LinkedIn
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>

        {testimonials.length > 0 ? (
          <RevealGroup className="flex flex-col gap-5">
            {testimonials.map((t) => (
              <Reveal key={t.name} as="div">
                <figure className="card p-8">
                  <blockquote className="font-serif text-xl font-normal italic leading-relaxed text-fg">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-medium text-fg">{t.name}</span>
                    <span className="text-fg-subtle"> · {t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </RevealGroup>
        ) : (
          <RevealGroup className="panel grid gap-px self-start overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {commitments.map((c) => (
              <Reveal key={c.title} as="div">
                <div className="h-full bg-surface p-8">
                  <span className="block h-px w-8 bg-accent/70" />
                  <h3 className="mt-5 heading-sm text-[1.15rem]">{c.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        )}
      </div>
    </Section>
  )
}
