'use client'

import React, { useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { cn } from '@/lib/utils'

interface MovingBorderButtonProps {
  children: React.ReactNode
  duration?: number
  className?: string
  containerClassName?: string
  href?: string
}

export function MovingBorderButton({
  children,
  duration = 2500,
  className,
  containerClassName,
  href,
}: MovingBorderButtonProps) {
  const pathRef = useRef<SVGRectElement>(null)
  const progress = useMotionValue<number>(0)
  const shouldReduce = useReducedMotion()

  useAnimationFrame((time) => {
    if (shouldReduce) return
    const length = pathRef.current?.getTotalLength()
    if (length) {
      const pxPerMillisecond = length / duration
      progress.set((time * pxPerMillisecond) % length)
    }
  })

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val)?.x ?? 0)
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val)?.y ?? 0)
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`

  const inner = (
    <>
      {/* SVG border path for the dot to follow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
      >
        <rect fill="none" width="100%" height="100%" rx="9999" ry="9999" ref={pathRef} />
      </svg>

      {/* Moving glow dot */}
      {!shouldReduce && (
        <motion.div
          style={{ transform }}
          className="absolute top-0 left-0 h-14 w-14 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.85)_0%,transparent_70%)]"
        />
      )}

      {/* Static border ring */}
      <div className="absolute inset-0 rounded-full border border-purple-500/30" />

      {/* Button content */}
      <span
        className={cn(
          'relative z-10 block rounded-full bg-[#0d0d12] px-8 py-3 text-white font-medium',
          className
        )}
      >
        {children}
      </span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          'relative inline-block rounded-full p-[1px] overflow-hidden hover:scale-105 transition-transform',
          containerClassName
        )}
      >
        {inner}
      </a>
    )
  }

  return (
    <button
      className={cn(
        'relative inline-block rounded-full p-[1px] overflow-hidden hover:scale-105 transition-transform',
        containerClassName
      )}
    >
      {inner}
    </button>
  )
}
