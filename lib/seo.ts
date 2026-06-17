/**
 * Single source of truth for site-wide SEO data.
 * Consumed by metadata, structured data (JSON-LD), sitemap, robots and manifest
 * so the site never ships contradictory signals to crawlers.
 */

export const siteConfig = {
  name: 'Mudassar Zafar',
  // Update this once a custom domain is connected.
  url: 'https://mudassarzafar.dev',
  jobTitle: 'Senior React & Next.js Engineer',
  shortTagline: 'Senior React & Next.js Engineer',
  title: 'Mudassar Zafar — Senior React & Next.js Engineer',
  description:
    'Senior React & Next.js engineer with 3+ years building fast, scalable web applications, dashboards, and high-converting marketing sites for product teams across Germany, the UK, and the US.',
  email: 'malikmudassar6086@gmail.com',
  phone: '+92-323-6086804',
  image: '/mudassar-profile.jpg',
  ogImage: '/opengraph-image',
  locale: 'en_US',
  twitterHandle: '@mudassarzafar',
  sameAs: ['https://linkedin.com/in/mudassar-mern-842584250'],
  keywords: [
    'Mudassar Zafar',
    'React Developer',
    'Next.js Developer',
    'Senior React Engineer',
    'MERN Stack Developer',
    'Frontend Engineer',
    'Full Stack Developer',
    'Hire React Developer',
    'Hire Next.js Developer',
    'Freelance React Developer',
    'Web Application Developer',
    'TypeScript Developer',
    'Node.js Developer',
  ],
  skills: [
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Nest.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'Redux',
    'REST APIs',
    'Web Performance Optimization',
    'Core Web Vitals',
    'Technical SEO',
  ],
  areaServed: ['Germany', 'United Kingdom', 'United States', 'Worldwide'],
} as const

export type SiteConfig = typeof siteConfig
