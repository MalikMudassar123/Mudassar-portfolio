import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mudassar Zafar | MERN Stack Developer',
  description:
    'Highly skilled React / Next.js frontend developer with over 3 years of hands-on experience building fast, scalable, and responsive web applications.',
  keywords:
    'MERN Stack Developer, React Developer, Next.js Developer, Frontend Developer, Full Stack Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
