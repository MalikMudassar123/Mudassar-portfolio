'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

const faqs = [
  {
    q: 'How much does a project cost?',
    a: 'It depends on scope, but I work to fixed, agreed pricing — not open-ended hourly billing. After a short discovery call I send a clear proposal with the price, timeline, and deliverables so you know exactly what you’re investing before we start.',
  },
  {
    q: 'How long will it take?',
    a: 'A focused marketing site typically takes 1–3 weeks; a full web application runs 4–12 weeks depending on complexity. I’ll give you a realistic timeline in the proposal and keep you updated against it the whole way.',
  },
  {
    q: 'How do we communicate during the project?',
    a: 'However suits you best — Slack, email, or scheduled calls. You’ll get regular demos of working software, not just status reports, so progress is always something you can see and click.',
  },
  {
    q: 'Are you available right now?',
    a: 'I take on a limited number of projects at a time to keep quality high. I’m currently booking select work for Q3 2026 — the fastest way to check fit and availability is to book a discovery call.',
  },
  {
    q: 'What about revisions and changes?',
    a: 'Revisions are part of the process. Each milestone includes review rounds, and because we agree on scope up front, changes are handled transparently — no surprise charges for reasonable iteration.',
  },
  {
    q: 'What happens after launch?',
    a: 'Launch isn’t the end. I offer post-launch support and optimisation, monitor for issues, and hand over clean, documented code so your team can confidently take it forward.',
  },
]

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  const shouldReduce = useReducedMotion()

  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="flex items-baseline gap-4">
          <span className="label pt-1 text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className={`heading-sm text-[1.15rem] transition-colors duration-200 md:text-[1.3rem] ${
              open ? 'text-accent' : 'group-hover:text-accent'
            }`}
          >
            {q}
          </span>
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? 'rotate-45 border-accent bg-accent/10 text-accent'
              : 'border-line text-fg-muted group-hover:border-accent/40 group-hover:text-accent'
          }`}
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={shouldReduce ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={shouldReduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 pl-9 text-sm leading-relaxed text-fg-muted md:text-[15px]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <Section id="faq" labelledBy="faq-heading">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeader
            headingId="faq-heading"
            eyebrow="06 — FAQ"
            title={
              <>
                Questions, answered{' '}
                <span className="text-accent">before you ask.</span>
              </>
            }
            description="Still unsure about something? A 20-minute call will clear it up faster than any page."
          />
          <a href="#contact" className="btn-secondary mt-8 inline-flex">
            Ask me directly
          </a>
        </div>

        <Reveal>
          <div className="border-t border-line">
            {faqs.map((f, i) => (
              <Item key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
