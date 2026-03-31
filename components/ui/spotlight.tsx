'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface SpotlightProps {
  className?: string
}

export function Spotlight({ className = '' }: SpotlightProps) {
  const [position, setPosition] = useState({ x: -9999, y: -9999 })
  const [mounted, setMounted] = useState(false)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    setMounted(true)
    const handler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  if (!mounted || shouldReduce) return null

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 ${className}`}
      style={{
        background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(124,58,237,0.13), transparent 80%)`,
      }}
    />
  )
}
