'use client'

import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BackgroundBeamsProps {
  className?: string
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  const shouldReduce = useReducedMotion()

  const beamPaths = [
    'M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875',
    'M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867',
    'M-360 -210C-360 -210 -292 195 172 322C636 449 704 854 704 854',
    'M-347 -223C-347 -223 -279 182 185 309C649 436 717 841 717 841',
    'M-334 -236C-334 -236 -266 169 198 296C662 423 730 828 730 828',
    'M-321 -249C-321 -249 -253 156 211 283C675 410 743 815 743 815',
    'M-308 -262C-308 -262 -240 143 224 270C688 397 756 802 756 802',
    'M-295 -275C-295 -275 -227 130 237 257C701 384 769 789 769 789',
  ]

  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden pointer-events-none',
        className
      )}
    >
      <svg
        className="absolute h-full w-full"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {beamPaths.map((_, i) => (
            <linearGradient key={`static-grad-${i}`} id={`static-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </linearGradient>
          ))}
          {!shouldReduce && beamPaths.map((_, i) => (
            <linearGradient key={`anim-grad-${i}`} id={`anim-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
              <stop offset="30%" stopColor="#c084fc" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#a855f7" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {/* Static faint beam lines */}
        {beamPaths.map((path, i) => (
          <path
            key={`static-${i}`}
            d={path}
            stroke={`url(#static-grad-${i})`}
            strokeWidth="0.6"
            strokeOpacity="0.5"
          />
        ))}

        {/* Animated travelling beams */}
        {!shouldReduce &&
          beamPaths.map((path, i) => (
            <path
              key={`anim-${i}`}
              d={path}
              stroke={`url(#anim-grad-${i})`}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeDasharray="180 820"
              strokeDashoffset="0"
              className="beam-animate"
              style={{
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${5 + i * 0.4}s`,
              }}
            />
          ))}
      </svg>
    </div>
  )
}
