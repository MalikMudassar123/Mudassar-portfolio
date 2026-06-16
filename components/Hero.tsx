'use client'

import { motion, useReducedMotion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stats = [
  { v: '3+', l: 'Years shipping production apps' },
  { v: '20+', l: 'Products delivered' },
  { v: '3', l: 'Countries served' },
  { v: 'Q3 2026', l: 'Currently booking' },
]

export default function Hero() {
  const shouldReduce = useReducedMotion()
  const animate = (i: number) =>
    shouldReduce ? {} : { custom: i, variants: fadeUp, initial: 'hidden', animate: 'show' }

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center pt-28 pb-16 md:pt-32 md:pb-20"
      aria-label="Introduction"
    >
      <div className="container-x">
        {/* Quiet meta line */}
        <motion.div
          {...animate(0)}
          className="flex flex-wrap items-center gap-x-3 gap-y-1 label"
        >
          <span className="text-fg-muted">Senior React &amp; Next.js Engineer</span>
          <span className="text-fg-subtle/60" aria-hidden>
            —
          </span>
          <span>Available Q3 2026</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...animate(1)} className="mt-8 max-w-[18ch] heading-xl text-balance">
          I build web apps that feel fast{' '}
          <span className="italic text-fg-muted">and scale far.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p {...animate(2)} className="lead mt-8 max-w-2xl">
          I&apos;m Mudassar — a senior engineer who helps product teams across Germany,
          the UK, and the US turn ambitious ideas into production interfaces that load
          quickly, convert better, and hold up as they grow.
        </motion.p>

        {/* CTAs */}
        <motion.div {...animate(3)} className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#contact" className="btn-primary group">
            Book a discovery call
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#work" className="btn-secondary">
            View selected work
          </a>
        </motion.div>
      </div>

      {/* Editorial meta strip — replaces imagery with structured information */}
      <motion.div {...animate(4)} className="container-x mt-14 md:mt-20">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-10 sm:grid-cols-4">
          {stats.map(({ v, l }) => (
            <div key={l} className="flex flex-col gap-2.5">
              <dt className="font-serif text-[2rem] font-medium leading-none text-fg tnum md:text-[2.5rem]">
                {v}
              </dt>
              <dd className="max-w-[18ch] text-[13px] leading-relaxed text-fg-subtle">{l}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  )
}
