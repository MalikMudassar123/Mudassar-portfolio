'use client'

import { motion, useReducedMotion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.06 + i * 0.07, ease: [0.22, 1, 0.36, 1] },
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
      className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20"
      aria-label="Introduction"
    >
      {/* Ambient premium background — faded dot-grid, layered glow & fine grain */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Dot grid, masked to fade out toward the edges */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(30,27,42,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(58% 50% at 50% 36%, #000 0%, transparent 72%)',
            WebkitMaskImage:
              'radial-gradient(58% 50% at 50% 36%, #000 0%, transparent 72%)',
          }}
        />
        {/* Primary purple→pink glow */}
        <div
          className="absolute left-1/2 top-[-6%] h-[480px] w-[960px] max-w-[130vw] -translate-x-1/2 rounded-full opacity-70 blur-[120px]"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, rgba(110,86,207,0.24), rgba(214,64,159,0.13) 55%, transparent 78%)',
          }}
        />
        {/* Secondary pink bloom */}
        <div
          className="absolute left-1/2 top-[36%] h-[340px] w-[560px] -translate-x-1/2 rounded-full opacity-50 blur-[130px]"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, rgba(214,64,159,0.11), transparent 75%)',
          }}
        />
        {/* Drifting light-purple patches — slow, opposite paths */}
        <div
          style={{
            position: 'absolute',
            left: '5%',
            top: '18%',
            width: 320,
            height: 320,
            borderRadius: '9999px',
            background: '#a78bfa',
            opacity: 0.55,
            filter: 'blur(80px)',
            animation: 'driftA 18s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '5%',
            top: '10%',
            width: 360,
            height: 360,
            borderRadius: '9999px',
            background: '#b794f6',
            opacity: 0.5,
            filter: 'blur(85px)',
            animation: 'driftB 22s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '38%',
            top: '48%',
            width: 300,
            height: 300,
            borderRadius: '9999px',
            background: '#c4b5fd',
            opacity: 0.5,
            filter: 'blur(80px)',
            animation: 'driftC 26s ease-in-out infinite',
          }}
        />
        {/* Fine grain for matte editorial depth */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container-x flex flex-col items-center text-center">
        {/* Quiet editorial meta line — live dot only on availability */}
        <motion.div
          {...animate(0)}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 label"
        >
          <span className="text-fg-muted">Full-Stack Engineer</span>
          <span className="text-accent" aria-hidden>
            ·
          </span>
          <span className="text-fg-muted">Specialized in AI-Powered Tools</span>
          <span className="text-fg-subtle/50" aria-hidden>
            —
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available Q3 2026
          </span>
        </motion.div>

        {/* Headline — oversized bold display, black base + purple gradient words */}
        <motion.h1
          {...animate(1)}
          className="mt-8 max-w-[16ch] font-sans font-extrabold leading-[0.92] tracking-[-0.04em] text-balance text-fg"
          style={{ fontSize: 'clamp(2.9rem, 7.4vw, 6.25rem)' }}
        >
          I build web apps that{' '}
          <span className="font-serif italic text-gradient-accent">feel fast</span>{' '}
          and{' '}
          <span className="font-serif italic text-gradient-accent">scale far</span>
          <span className="text-accent">.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p {...animate(2)} className="lead mt-8 max-w-2xl">
          I&apos;m Mudassar — a senior engineer who helps product teams across Germany,
          the UK, and the US turn ambitious ideas into production interfaces that load
          quickly, convert better, and hold up as they grow.
        </motion.p>

        {/* CTAs */}
        <motion.div {...animate(3)} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="btn-primary group shadow-[0_12px_40px_-8px_rgba(110,86,207,0.55)] hover:shadow-[0_16px_50px_-6px_rgba(110,86,207,0.7)]"
          >
            Book a discovery call
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#work" className="btn-secondary">
            View selected work
          </a>
        </motion.div>

        {/* Trust strip — factual, no fabricated reviews */}
        <motion.p
          {...animate(4)}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[13px] text-fg-subtle"
        >
          <svg className="h-4 w-4 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>20+ products shipped for teams in Germany, the UK &amp; the US</span>
        </motion.p>
      </div>

      {/* Stats — elevated panel with hairline dividers */}
      <motion.div {...animate(5)} className="container-x relative mt-14 md:mt-20">
        <dl className="panel grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {stats.map(({ v, l }) => (
            <div
              key={l}
              className="flex flex-col gap-3.5 bg-surface-2 p-6 transition-colors duration-300 hover:bg-surface md:p-7"
            >
              <span className="h-[3px] w-7 rounded-full bg-accent" aria-hidden />
              <dt className="font-serif text-[2rem] font-medium leading-none text-fg tnum md:text-[2.4rem]">
                {v}
              </dt>
              <dd className="text-[13px] leading-relaxed text-fg-subtle">{l}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  )
}
