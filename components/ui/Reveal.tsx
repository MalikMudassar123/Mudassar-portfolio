'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'span' | 'li' | 'section'
}

/** Subtle, premium scroll-reveal. Respects reduced-motion. */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const shouldReduce = useReducedMotion()
  const MotionTag = motion[as]

  if (shouldReduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}

/** Stagger container — use with <Reveal> children for sequenced reveals. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  )
}
