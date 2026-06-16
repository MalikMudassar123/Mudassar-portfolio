import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#F4F1EA',
  colorScheme: 'light',
}

// Functional typeface — UI, body, labels.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// Editorial display serif — headlines only. Carries the brand voice.
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const siteUrl = 'https://mudassarzafar.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Mudassar Zafar — Senior React & Next.js Engineer',
  description:
    'I help product teams ship fast, scalable web applications. Senior React / Next.js engineer with 3+ years building production interfaces for companies across Germany, the UK, and the US.',
  keywords: [
    'React Developer',
    'Next.js Engineer',
    'MERN Stack Developer',
    'Frontend Engineer',
    'Full Stack Developer',
    'Hire React Developer',
  ],
  authors: [{ name: 'Mudassar Zafar' }],
  openGraph: {
    title: 'Mudassar Zafar — Senior React & Next.js Engineer',
    description:
      'I help product teams ship fast, scalable web applications. 3+ years building production interfaces for companies across Germany, the UK, and the US.',
    url: siteUrl,
    siteName: 'Mudassar Zafar',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mudassar Zafar — Senior React & Next.js Engineer',
    description: 'I help product teams ship fast, scalable web applications.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
