'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal, RevealGroup } from '@/components/ui/Reveal'

const steps = [
  {
    no: '01',
    title: 'Discovery',
    desc: 'We start with a call to understand your goals, users, and constraints — so we build the right thing, not just a thing.',
  },
  {
    no: '02',
    title: 'Strategy',
    desc: 'I map scope, timeline, and the tech approach into a clear plan you sign off on before a line of code is written.',
  },
  {
    no: '03',
    title: 'Design',
    desc: 'Interfaces and flows are designed for clarity and conversion — reviewed together before development begins.',
  },
  {
    no: '04',
    title: 'Development',
    desc: 'I build in focused increments with regular demos, so you always see progress and can steer along the way.',
  },
  {
    no: '05',
    title: 'Launch',
    desc: 'Tested, optimised, and deployed. I handle the go-live details so the rollout is smooth and stress-free.',
  },
  {
    no: '06',
    title: 'Optimization',
    desc: 'After launch I monitor, refine, and improve — turning real usage data into a product that keeps getting better.',
  },
]

export default function Process() {
  return (
    <Section id="process">
      <SectionHeader
        eyebrow="03 — How we work"
        title={
          <>
            A clear path from{' '}
            <span className="text-fg-muted">first call to launch.</span>
          </>
        }
        description="No black boxes, no surprises. You'll always know exactly what's happening and what comes next."
      />

      <RevealGroup className="panel mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <Reveal key={s.no} as="div">
            <div className="group relative flex h-full flex-col bg-surface p-9 transition-colors duration-300 hover:bg-surface-2">
              <span className="label text-accent">{s.no}</span>
              <h3 className="mt-6 heading-sm">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  )
}
