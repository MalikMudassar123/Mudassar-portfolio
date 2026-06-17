import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // Single-page site: surface the in-page sections so crawlers and AI engines
  // understand the document structure and can deep-link to anchors.
  const sections = ['services', 'work', 'process', 'about', 'faq', 'contact']

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...sections.map((id) => ({
      url: `${siteConfig.url}/#${id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
