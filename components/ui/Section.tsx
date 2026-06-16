import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  /** Hide the top hairline divider (e.g. the first section after the hero). */
  flush?: boolean
}

export function Section({ id, children, className, flush }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-24 py-24 md:py-32',
        !flush && 'border-t border-line',
        className
      )}
    >
      <div className="container-x">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-6',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="heading-lg max-w-3xl text-balance">{title}</h2>
      {description && (
        <p className={cn('lead max-w-2xl', align === 'center' && 'mx-auto')}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
