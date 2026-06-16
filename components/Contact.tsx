'use client'

import { useState } from 'react'
import { Reveal } from '@/components/ui/Reveal'

const EMAIL = 'malikmudassar6086@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New project enquiry — ${form.name || 'Website'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBudget: ${form.budget || 'Not specified'}\n\n${form.message}`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputClass =
    'w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-fg placeholder:text-fg-subtle transition-colors focus:border-accent/60 focus:outline-none'

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-24 md:py-32">
      <div className="container-x">
        {/* Closing statement */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">07 — Let&apos;s build</span>
          <h2 className="heading-xl mt-6 text-balance">
            Have a project worth{' '}
            <span className="italic text-fg-muted">doing right?</span>
          </h2>
          <p className="lead mx-auto mt-6 max-w-xl">
            Tell me what you&apos;re building. I&apos;ll reply within one business day
            with honest thoughts on scope, timeline, and whether I&apos;m the right
            person for it — no pressure, no sales pitch.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-px overflow-hidden rounded-3xl border border-line bg-line shadow-float md:grid-cols-[1fr_1.15fr]">
          {/* Left: direct contact */}
          <Reveal className="flex flex-col justify-between gap-8 bg-surface-2 p-8 md:p-10">
            <div>
              <h3 className="heading-sm">Prefer to talk first?</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                Book a free 20-minute discovery call and we&apos;ll figure out fit
                together.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-3 text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-3 text-accent">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  {EMAIL}
                </a>
                <a
                  href="tel:03236086804"
                  className="group flex items-center gap-3 text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-3 text-accent">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  0323-6086804
                </a>
                <a
                  href="https://linkedin.com/in/mudassar-mern-842584250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-3 text-accent">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </span>
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-line bg-ink/50 p-4">
              <p className="flex items-center gap-2.5 text-sm font-medium text-fg">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                Currently booking — Q3 2026
              </p>
              <p className="mt-1.5 text-xs text-fg-subtle">
                Typical reply time: under 1 business day.
              </p>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal className="bg-surface-2 p-8 md:p-10">
            {sent ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-fg">Your email client is opening</h3>
                <p className="mt-2 max-w-xs text-sm text-fg-muted">
                  If nothing happened, just email me directly at{' '}
                  <a href={`mailto:${EMAIL}`} className="text-accent">{EMAIL}</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-medium text-fg-muted">Name</label>
                    <input id="name" name="name" value={form.name} onChange={handleChange} required className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-medium text-fg-muted">Email</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required className={inputClass} placeholder="you@company.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-2 block text-xs font-medium text-fg-muted">Estimated budget</label>
                  <select id="budget" name="budget" value={form.budget} onChange={handleChange} className={inputClass}>
                    <option value="">Select a range (optional)</option>
                    <option>Under $2k</option>
                    <option>$2k – $5k</option>
                    <option>$5k – $10k</option>
                    <option>$10k+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-medium text-fg-muted">Project details</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="What are you building, and what does success look like?" />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send project enquiry
                </button>
                <p className="text-center text-xs text-fg-subtle">
                  No spam, ever. Your details go straight to my inbox.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
