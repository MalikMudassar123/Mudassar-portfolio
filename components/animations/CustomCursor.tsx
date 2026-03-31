'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  const rawX = useMotionValue(-200)
  const rawY = useMotionValue(-200)

  // Dot follows cursor tightly
  const dotX = useSpring(rawX, { stiffness: 600, damping: 30 })
  const dotY = useSpring(rawY, { stiffness: 600, damping: 30 })

  // Ring lags behind with more damping
  const ringX = useSpring(rawX, { stiffness: 160, damping: 22 })
  const ringY = useSpring(rawY, { stiffness: 160, damping: 22 })

  useEffect(() => {
    // Only on pointer:fine (mouse) devices
    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return

    setMounted(true)

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)

      const el = document.elementFromPoint(e.clientX, e.clientY)
      if (el instanceof HTMLElement) {
        const tag = el.tagName
        const computed = window.getComputedStyle(el).cursor
        setIsPointer(
          tag === 'A' ||
            tag === 'BUTTON' ||
            computed === 'pointer' ||
            el.getAttribute('role') === 'button'
        )
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [rawX, rawY])

  if (!mounted) return null

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <div
          className="rounded-full bg-purple-400 transition-all duration-100"
          style={{
            width: isPointer ? 10 : 7,
            height: isPointer ? 10 : 7,
          }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <div
          className="rounded-full border border-purple-400/60 transition-all duration-200"
          style={{
            width: isPointer ? 44 : 36,
            height: isPointer ? 44 : 36,
          }}
        />
      </motion.div>
    </>
  )
}
