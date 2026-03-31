'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Spotlight } from '@/components/ui/spotlight'
import { MovingBorderButton } from '@/components/ui/moving-border'

const ParticlesCanvas = dynamic(
  () => import('@/components/animations/ParticlesCanvas'),
  { ssr: false }
)

// ─── Animation variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
}

// ─── Ghost text shared style ───────────────────────────────────────────────────

const ghostStyle: React.CSSProperties = {
  fontWeight: 900,
  lineHeight: 0.85,
  letterSpacing: '-0.04em',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  color: 'rgba(255,255,255,0.04)',
  WebkitTextStroke: '1.5px rgba(255,255,255,0.18)',
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center relative overflow-hidden pt-24 pb-14 md:h-screen md:justify-center md:pt-16 md:pb-0"
      aria-label="Hero"
    >
      {/* Cursor spotlight */}
      <Spotlight />

      {/* Particles */}
      <ParticlesCanvas />

      {/* Ambient center glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 50% at 50% 42%, rgba(124,58,237,0.14) 0%, transparent 68%)',
        }}
        aria-hidden="true"
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.028,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />

      {/* ── Ghost name — full-section background layer ── */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="absolute inset-0 z-[1] flex flex-col items-center justify-center gap-1 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span style={{ ...ghostStyle, fontSize: 'clamp(60px, 14vw, 190px)' }}>
          MUDASSAR
        </span>
        <span style={{ ...ghostStyle, fontSize: 'clamp(95px, 22vw, 300px)' }}>
          ZAFAR
        </span>
      </motion.div>

      {/* ── Foreground content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-4 md:mb-6"
        >
          {/* Ambient halo */}
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              inset: '-36px',
              background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 65%)',
              filter: 'blur(22px)',
            }}
          />

          {/* Conic ring */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: '-2.5px',
              borderRadius: '50%',
              background:
                'conic-gradient(from 160deg, rgba(168,85,247,0.0), rgba(168,85,247,0.45), rgba(124,58,237,0.55), rgba(168,85,247,0.45), rgba(168,85,247,0.0))',
            }}
          />

          {/* Image */}
          <div
            className="relative overflow-hidden rounded-full"
            style={{
              width: 'clamp(160px, 20vw, 240px)',
              height: 'clamp(160px, 20vw, 240px)',
              boxShadow:
                '0 0 0 1.5px rgba(168,85,247,0.5), 0 0 0 12px rgba(124,58,237,0.04), 0 40px 80px rgba(0,0,0,0.65)',
            }}
          >
            <Image
              src="/mudassar-profile.jpg"
              alt="Mudassar Zafar"
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)' }}
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.p
            variants={fadeUp}
            className="max-w-md leading-relaxed mb-5 md:mb-7 text-sm md:text-base"
            style={{ color: 'rgba(156,163,175,0.85)' }}
          >
            Crafting exceptional digital experiences with React, Next.js,&nbsp;and
            modern web technologies. Building fast, scalable applications.
          </motion.p>

          {/* Stats */}
          <motion.div variants={fadeUp} className="flex items-center mb-5 md:mb-7">
            {[
              { value: '3+', label: 'Years Exp.' },
              { value: '50+', label: 'Projects' },
              { value: '3.2', label: 'CGPA' },
            ].map(({ value, label }, i) => (
              <div key={label} className="flex items-center">
                {i > 0 && (
                  <div
                    className="self-stretch mx-5 md:mx-7 w-px"
                    style={{ background: 'rgba(255,255,255,0.1)' }}
                  />
                )}
                <div className="flex flex-col items-center">
                  <span
                    className="text-xl md:text-2xl font-bold leading-none"
                    style={{
                      background: 'linear-gradient(135deg, #d8b4fe 0%, #a855f7 55%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-[9px] mt-1 tracking-[0.22em] uppercase"
                    style={{ color: 'rgba(107,114,128,0.9)' }}
                  >
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 flex-wrap justify-center">
            <MovingBorderButton href="#contact">Get In Touch</MovingBorderButton>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm hover:border-purple-500/30 hover:bg-white/[0.06]"
              style={{
                border: '1px solid rgba(255,255,255,0.09)',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
              }}
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.9 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-px h-10 scroll-line"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(168,85,247,0.5), transparent)',
          }}
        />
        <span
          className="text-[9px] tracking-[0.3em] uppercase"
          style={{ color: 'rgba(107,114,128,0.55)' }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
