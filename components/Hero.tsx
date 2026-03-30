'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-purple-400 text-lg mb-4">Hi, I am</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Mudassar <span className="gradient-text">Zafar</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-6">
            MERN Stack Developer
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Highly skilled React / Next.js frontend developer with over 3 years of hands-on experience building
            fast, scalable, and responsive web applications. Specialized in modern JavaScript frameworks with a
            strong focus on React.js, Next.js, and UI libraries.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-4xl font-bold text-purple-400">3+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400">3.81</div>
              <div className="text-sm text-gray-400">CGPA</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full transition-all"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-400 rounded-3xl blur-2xl opacity-30"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-purple-600/30">
              <Image
                src="/mudassar-profile.jpg"
                alt="Mudassar Zafar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
