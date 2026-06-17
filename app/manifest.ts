import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: 'Mudassar Zafar',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#F4F1EA',
    theme_color: '#F4F1EA',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
