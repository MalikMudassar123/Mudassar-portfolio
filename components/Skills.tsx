'use client'

import { motion, useReducedMotion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend (Core)',
    color: '#7c3aed',
    percent: 92,
    skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Redux', 'Vite'],
  },
  {
    title: 'Backend (Experienced)',
    color: '#a855f7',
    percent: 78,
    skills: ['Nest.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'SQL', 'PostgreSQL'],
  },
  {
    title: 'UI Libraries',
    color: '#8b5cf6',
    percent: 88,
    skills: ['Tailwind CSS', 'Material UI', 'Chakra UI', 'Bootstrap'],
  },
  {
    title: 'State Management',
    color: '#6366f1',
    percent: 85,
    skills: ['Redux', 'Context API'],
  },
  {
    title: 'Tools & Others',
    color: '#7c3aed',
    percent: 80,
    skills: ['Git', 'GitHub', 'Postman', 'Figma', 'VS Code'],
  },
]

// ─── Animated skill bar ────────────────────────────────────────────────────────

function SkillBar({
  percent,
  color,
  shouldReduce,
  delay,
}: {
  percent: number
  color: string
  shouldReduce: boolean | null
  delay: number
}) {
  return (
    <div className="mt-4 mb-1">
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>Proficiency</span>
        <span>{percent}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: shouldReduce ? `${percent}%` : `${percent}%` }}
          viewport={{ once: true }}
          transition={
            shouldReduce
              ? { duration: 0 }
              : { duration: 1.2, ease: 'easeOut', delay }
          }
        />
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Skills() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-[#13131f] p-6 rounded-xl border border-purple-600/20 hover:border-purple-600/40 transition-colors"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-4">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={shouldReduce ? {} : { scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Animated proficiency bar */}
                <SkillBar
                  percent={category.percent}
                  color={category.color}
                  shouldReduce={shouldReduce}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </div>

          {/* AI tools highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-purple-600/20 to-purple-400/20 p-6 rounded-xl border border-purple-600/30"
          >
            <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Development Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Cursor AI', 'Clouded Code AI', 'Qoder AI', 'Kiro AI', 'Tare AI', 'Windsurf AI'].map((tool) => (
                <motion.span
                  key={tool}
                  whileHover={shouldReduce ? {} : { scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
