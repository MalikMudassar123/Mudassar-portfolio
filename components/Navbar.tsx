'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveLink(`#${id}`)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glassmorphism background on scroll */}
      <motion.div
        initial={false}
        animate={
          scrolled
            ? { backdropFilter: 'blur(12px)', backgroundColor: 'rgba(13,13,18,0.85)', borderBottomWidth: 1 }
            : { backdropFilter: 'blur(0px)', backgroundColor: 'rgba(13,13,18,0)', borderBottomWidth: 0 }
        }
        transition={shouldReduce ? { duration: 0 } : { duration: 0.3 }}
        className="absolute inset-0 border-b border-white/5"
        style={{ borderBottomColor: scrolled ? 'rgba(255,255,255,0.06)' : 'transparent' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
              <span className="text-white font-bold text-xl">MZ</span>
            </div>
            <span className="text-white font-semibold text-lg">Mudassar Zafar</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative text-white hover:text-purple-400 transition-colors py-1"
              >
                {label}
                {/* Sliding underline indicator */}
                {activeLink === href && !shouldReduce && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://linkedin.com/in/mudassar-mern-842584250"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all font-medium"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu - Full screen overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm md:hidden"
                style={{ top: '80px' }}
                onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Menu content */}
              <motion.div
                initial={shouldReduce ? { opacity: 1 } : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={shouldReduce ? { opacity: 1 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="fixed left-0 right-0 md:hidden bg-[#0d0d12]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
                style={{ top: '80px' }}
              >
                <div className="px-6 py-8 space-y-6">
                  {navLinks.map(({ href, label }, index) => (
                    <motion.div
                      key={href}
                      initial={shouldReduce ? {} : { opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block text-xl font-medium transition-colors ${
                          activeLink === href ? 'text-purple-400' : 'text-white hover:text-purple-400'
                        }`}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile social links */}
                  <div className="pt-6 border-t border-white/10 flex items-center gap-6">
                    <a
                      href="https://linkedin.com/in/mudassar-mern-842584250"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all font-medium"
                    >
                      Hire Me
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
