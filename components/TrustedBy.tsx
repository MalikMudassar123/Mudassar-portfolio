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
      <div className="container-x py-14">
        <p className="label text-center">
          Trusted by teams &amp; products across Germany, the UK &amp; the US
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-14">
          {companies.map((name) => (
            <span
              key={name}
              className="text-base font-medium tracking-tight text-fg-muted transition-colors hover:text-fg"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
