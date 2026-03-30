'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend (Core)',
    skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Redux', 'Vite'],
  },
  {
    title: 'Backend (Experienced)',
    skills: ['Nest.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'SQL', 'PostgreSQL'],
  },
  {
    title: 'UI Libraries',
    skills: ['Tailwind CSS', 'Material UI', 'Chakra UI', 'Bootstrap'],
  },
  {
    title: 'State Management',
    skills: ['Redux', 'Context API'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'GitHub', 'Postman', 'Figma', 'VS Code'],
  },
]

export default function Skills() {
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#13131f] p-6 rounded-xl border border-purple-600/20 hover:border-purple-600/40 transition-all"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm hover:bg-purple-600/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-purple-600/20 to-purple-400/20 p-6 rounded-xl border border-purple-600/30"
          >
            <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Development Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Cursor AI', 'Clouded Code AI', 'Qoder AI', 'Kiro AI', 'Tare AI', 'Windsurf AI'].map((tool) => (
                <span
                  key={tool}
                  className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
