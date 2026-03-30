'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Aryze Tech',
    location: 'Germany Based Product Company',
    role: 'Full Stack Developer',
    period: 'Apr 2024 – Present',
    description: [
      'Working on real-time and performance-focused React applications',
      'Developing reusable components, drag-and-drop interfaces, and resource management tools',
      'Supporting backend tasks and API handling with Nest.js, Node.js & MongoDB',
    ],
  },
  {
    company: 'Tech9et',
    location: 'UK-based Product Company',
    role: 'Full Stack Developer',
    period: 'Oct 2023 – Apr 2024',
    description: [
      'Delivering product-level solutions using React.js and Next.js',
      'Building reusable components and optimizing for performance and SEO',
      'Collaborating with distributed teams for continuous delivery and iteration',
    ],
  },
  {
    company: 'Maxenius Solution',
    location: '',
    role: 'React/Next.js Developer with Node.js Experience',
    period: 'Jan 2023 – Oct 2023',
    description: [
      'Developed complex frontend interfaces with React and Next.js',
      'Created custom APIs using Node.js and Express for backend support',
      'Handled form validation, state management, and secure authentication flows',
      'Worked in a full-stack MERN environment for scalable project delivery',
    ],
  },
  {
    company: 'Optimum Tech',
    location: '',
    role: 'Full Stack Developer Intern',
    period: 'Aug 2022 – Dec 2022',
    description: [
      'Built responsive UI components using React.js and Next.js',
      'Integrated RESTful APIs using Node.js during practical training and projects',
      'Gained solid understanding of frontend-backend connectivity and deployment',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#10101a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            My journey through various companies and roles
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#13131f] p-6 md:p-8 rounded-xl border border-purple-600/20 hover:border-purple-600/40 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">{exp.role}</h3>
                    <p className="text-purple-400 font-medium">{exp.company}</p>
                    {exp.location && <p className="text-gray-400 text-sm">{exp.location}</p>}
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
