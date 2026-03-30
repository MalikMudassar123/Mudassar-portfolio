'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Passionate about creating exceptional digital experiences
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-[#13131f] p-6 rounded-xl border border-purple-600/20">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Summary</h3>
                <p className="text-gray-300 leading-relaxed">
                  Highly skilled React / Next.js frontend developer with over 3 years of hands-on experience building
                  fast, scalable, and responsive web applications. Specialized in modern JavaScript frameworks with a
                  strong focus on React.js, Next.js, and UI libraries like Tailwind CSS and Material UI.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Also experienced in integrating and supporting backend functionality using Node.js, Nest.js and
                  Express, with REST API development and MongoDB. Known for clean code, modular design, and
                  delivering impactful digital products.
                </p>
              </div>

              <div className="bg-[#13131f] p-6 rounded-xl border border-purple-600/20">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">Bachelor's in Computer Science</h4>
                    <p className="text-purple-400">Completed 2024 | 3.81 CGPA</p>
                    <p className="text-gray-400 text-sm">Govt Post Graduate College Samnabad (GCUF), Faisalabad</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Intermediate (Pre-Medical)</h4>
                    <p className="text-purple-400">2020</p>
                    <p className="text-gray-400 text-sm">Govt College Sitana Road, Faisalabad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-[#13131f] p-6 rounded-xl border border-purple-600/20">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:malikmudassar6086@gmail.com" className="text-gray-300 hover:text-purple-400">
                      malikmudassar6086@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:03236086804" className="text-gray-300 hover:text-purple-400">
                      0323-6086804
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <a href="https://linkedin.com/in/mudassar-mern-842584250" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400">
                      linkedin.com/in/mudassar-mern-842584250
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#13131f] p-6 rounded-xl border border-purple-600/20">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">AI-Powered Tools</h3>
                <p className="text-gray-300 mb-3">Experienced with modern AI development tools:</p>
                <div className="flex flex-wrap gap-2">
                  {['Cursor AI', 'Clouded Code AI', 'Qoder AI', 'Kiro AI', 'Tare AI', 'Windsurf AI'].map((tool) => (
                    <span key={tool} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
