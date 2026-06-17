import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/seo'

export const runtime = 'edge'
export const alt = `${siteConfig.name} — ${siteConfig.jobTitle}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#F4F1EA',
          padding: '80px',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Top row — wordmark + availability */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: '#6E56CF',
                color: '#FFFFFF',
                fontSize: 36,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              M
            </div>
            <div
              style={{
                marginLeft: 20,
                fontSize: 28,
                color: '#1C1A26',
                fontWeight: 600,
              }}
            >
              Mudassar Zafar
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 20,
              color: '#5D586A',
              fontFamily: 'sans-serif',
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            Available Q3 2026
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              color: '#1C1A26',
              fontWeight: 600,
              maxWidth: 980,
            }}
          >
            <span style={{ color: '#6E56CF' }}>I build web apps</span> that feel fast and
            scale far.
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 30,
              color: '#5D586A',
              fontFamily: 'sans-serif',
              maxWidth: 880,
              lineHeight: 1.4,
            }}
          >
            Senior React &amp; Next.js engineer for product teams across Germany, the UK
            &amp; the US.
          </div>
        </div>

        {/* Bottom accent rule */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 22,
            color: '#8D8898',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              width: 48,
              height: 4,
              borderRadius: 2,
              background: '#6E56CF',
              marginRight: 18,
            }}
          />
          mudassarzafar.dev
        </div>
      </div>
    ),
    { ...size }
  )
}
