'use client'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand + statement */}
          <div className="max-w-sm">
            <div className="font-serif text-2xl font-medium tracking-tight text-fg">
              Mudassar<span className="text-accent">.</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-fg-muted">
              Senior React &amp; Next.js engineer building fast, scalable web
              applications for product teams worldwide.
            </p>
            <a href="#contact" className="btn-primary mt-7">
              Book a discovery call
            </a>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <p className="label">Navigate</p>
              <ul className="mt-5 space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label">Connect</p>
              <ul className="mt-5 space-y-3">
                <li>
                  <a href="mailto:malikmudassar6086@gmail.com" className="text-sm text-fg-muted transition-colors hover:text-fg">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/mudassar-mern-842584250" target="_blank" rel="noopener noreferrer" className="text-sm text-fg-muted transition-colors hover:text-fg">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="tel:03236086804" className="text-sm text-fg-muted transition-colors hover:text-fg">
                    Phone
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 text-xs text-fg-subtle md:flex-row">
          <p>© {new Date().getFullYear()} Mudassar Zafar. All rights reserved.</p>
          <p>Designed &amp; built with React, Next.js &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
