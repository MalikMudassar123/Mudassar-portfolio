'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BentoGridProps {
  className?: string
  children: React.ReactNode
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto',
        className
      )}
    >
      {children}
    </div>
  )
}

interface BentoGridItemProps {
  className?: string
  title?: string
  description?: React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  children?: React.ReactNode
  delay?: number
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  children,
  delay = 0,
}: BentoGridItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(
        'rounded-xl border border-purple-600/20 bg-[#13131f] p-6',
        'hover:border-purple-600/50 transition-colors duration-300 group',
        className
      )}
    >
      {header && <div className="mb-4">{header}</div>}
      {icon && <div className="mb-3 text-purple-400">{icon}</div>}
      {title && (
        <h3 className="text-xl font-semibold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
      )}
      {description && (
        <div className="text-gray-300 text-sm leading-relaxed">{description}</div>
      )}
      {children}
    </motion.div>
  )
}
