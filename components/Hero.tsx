'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Spotlight } from '@/components/ui/spotlight'
import { MovingBorderButton } from '@/components/ui/moving-border'

const ParticlesCanvas = dynamic(
  () => import('@/components/animations/ParticlesCanvas'),
  { ssr: false }
)

// ─── Animation variants ────────────────────────────────────────────────────────

const contentStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const lineReveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const charStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const charReveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

// ─── Typewriter name ───────────────────────────────────────────────────────────

function TypewriterName({ shouldReduce }: { shouldReduce: boolean | null }) {
  if (shouldReduce) {
    return (
      <>Mudassar <span className="gradient-text">Zafar</span></>
    )
  }

  const firstName = 'Mudassar'.split('')
  const lastName = 'Zafar'.split('')

  return (
    <>
      <motion.span
        variants={charStagger}
        initial="hidden"
        animate="show"
        className="inline-flex"
        aria-hidden="true"
      >
        {firstName.map((char, i) => (
          <motion.span key={i} variants={charReveal}>{char}</motion.span>
        ))}
      </motion.span>

      <span className="inline-block w-4" aria-hidden="true" />

      <motion.span
        variants={charStagger}
        initial="hidden"
        animate="show"
        className="inline-flex text-purple-400"
        aria-hidden="true"
      >
        {lastName.map((char, i) => (
          <motion.span key={i} variants={charReveal}>{char}</motion.span>
        ))}
      </motion.span>
    </>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function Hero() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      aria-label="Hero"
    >
      {/* Spotlight cursor glow */}
      <Spotlight />

      {/* Three.js particles — lazy, ssr:false */}
      <ParticlesCanvas />

      {/* Enhanced background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: text */}
        <motion.div variants={contentStagger} initial="hidden" animate="show">
          <motion.p variants={lineReveal} className="text-purple-400 text-lg mb-4 font-medium">
            Hi, I am
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <TypewriterName shouldReduce={shouldReduce} />
          </h1>

          <motion.h2 
            variants={lineReveal} 
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent"
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p variants={lineReveal} className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            Crafting exceptional digital experiences with React, Next.js, and modern web technologies. 
            Specialized in building fast, scalable, and user-centric applications.
          </motion.p>

          {/* Stats with enhanced styling */}
          <motion.div variants={lineReveal} className="grid grid-cols-3 gap-4 md:gap-8 mb-10">
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Completed' },
              { value: '3.2', label: 'CGPA' },
            ].map(({ value, label }) => (
              <div key={label} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-purple-500/30 transition-all">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    {value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs with enhanced design */}
          <motion.div variants={lineReveal} className="flex gap-4 flex-wrap items-center">
            <MovingBorderButton href="#contact">Get In Touch</MovingBorderButton>
            <a
              href="#projects"
              className="group relative border-2 border-purple-600/50 text-purple-400 hover:border-purple-600 px-8 py-3 rounded-full transition-all font-medium overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: profile image with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-40 animate-pulse" />
            
            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 opacity-75 animate-spin-slow" style={{ animationDuration: '8s' }} />
            
            {/* Image container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-purple-600/50 m-1 bg-[#0d0d12]">
              <Image
                src="/mudassar-profile.jpg"
                alt="Mudassar Zafar — MERN Stack Developer"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
