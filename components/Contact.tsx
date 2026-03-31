'use client'

import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const BackgroundBeams = dynamic(
  () => import('@/components/ui/background-beams').then((m) => ({ default: m.BackgroundBeams })),
  { ssr: false }
)

// ─── Animated input wrapper ────────────────────────────────────────────────────

function AnimatedField({
  children,
  label,
  htmlFor,
  shouldReduce,
}: {
  children: React.ReactNode
  label: string
  htmlFor: string
  shouldReduce: boolean | null
}) {
  const [focused, setFocused] = useState(false)

  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <div
        className="relative"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {children}
        {/* Animated underline on focus */}
        {!shouldReduce && (
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-purple-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: focused ? 1 : 0 }}
            style={{ originX: 0 }}
            transition={{ duration: 0.25 }}
          />
        )}
      </div>
    </div>
  )
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const shouldReduce = useReducedMotion()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputClass =
    'w-full px-4 py-3 bg-[#13131f] border border-purple-600/20 rounded-lg text-white focus:outline-none focus:border-purple-600/50 transition-colors'

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated background beams — lazy */}
      <BackgroundBeams />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Have a project in mind? Let&apos;s work together to bring your ideas to life
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-[#13131f] p-6 rounded-xl border border-purple-600/20">
                <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: (
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      label: 'Email',
                      value: 'malikmudassar6086@gmail.com',
                      href: 'mailto:malikmudassar6086@gmail.com',
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                      label: 'Phone',
                      value: '0323-6086804',
                      href: 'tel:03236086804',
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      ),
                      label: 'LinkedIn',
                      value: 'linkedin.com/in/mudassar-mern-842584250',
                      href: 'https://linkedin.com/in/mudassar-mern-842584250',
                      external: true,
                    },
                  ].map(({ icon, label, value, href, external }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        {icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{label}</p>
                        <a
                          href={href}
                          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="text-white hover:text-purple-400 transition-colors break-all"
                        >
                          {value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-purple-400/20 p-6 rounded-xl border border-purple-600/30">
                <h4 className="text-lg font-semibold text-white mb-2">Available for Freelance</h4>
                <p className="text-gray-300 text-sm">
                  I&apos;m currently available for freelance work and open to discussing new projects and opportunities.
                </p>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatedField label="Your Name" htmlFor="name" shouldReduce={shouldReduce}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="John Doe"
                  />
                </AnimatedField>

                <AnimatedField label="Your Email" htmlFor="email" shouldReduce={shouldReduce}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                </AnimatedField>

                <AnimatedField label="Subject" htmlFor="subject" shouldReduce={shouldReduce}>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Project Inquiry"
                  />
                </AnimatedField>

                <AnimatedField label="Message" htmlFor="message" shouldReduce={shouldReduce}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </AnimatedField>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-all transform hover:scale-[1.02] font-medium"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
