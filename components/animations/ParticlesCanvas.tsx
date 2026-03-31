'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useReducedMotion } from 'framer-motion'
import * as THREE from 'three'

function ParticleField({ count }: { count: number }) {
  const meshRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.04
      meshRef.current.rotation.x += delta * 0.015
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#a855f7"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function ParticlesCanvas() {
  const shouldReduce = useReducedMotion()
  const count =
    typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 240

  if (shouldReduce) return null

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
        dpr={[1, 1.5]}
      >
        <ParticleField count={count} />
      </Canvas>
    </div>
  )
}
