'use client'

const companies = [
  'Aryze Tech',
  'Tech9et',
  'Maxenius Solution',
  'Optimum Tech',
  'Benders Agency',
  'MyGovTools',
]

export default function TrustedBy() {
  return (
    <section className="border-y border-line" aria-label="Companies served">
      <div className="container-x py-16">
        {/* Label with flanking purple rules */}
        <div className="flex items-center justify-center gap-4">
          <span className="hidden h-px w-10 bg-gradient-to-r from-transparent to-accent/60 sm:block" aria-hidden />
          <p className="label flex items-center gap-2 text-center">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            Trusted by teams &amp; products across Germany, the UK &amp; the US
          </p>
          <span className="hidden h-px w-10 bg-gradient-to-l from-transparent to-accent/60 sm:block" aria-hidden />
        </div>

        {/* Logo-chip wall */}
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {companies.map((name) => (
            <li key={name}>
              <span className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-surface-2 py-2 pl-2 pr-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                  {name.charAt(0)}
                </span>
                <span className="text-sm font-medium tracking-tight text-fg-muted transition-colors group-hover:text-fg">
                  {name}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
