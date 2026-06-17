import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces — soft ivory paper ramp
        ink: '#F4F1EA', // page background
        surface: '#FBF9F4', // subtly raised cells
        'surface-2': '#FFFFFF', // cards
        'surface-3': '#ECE9E2', // recessed / hover
        // Text — neutral ink (cool-leaning to pair with violet)
        fg: '#1C1A26',
        'fg-muted': '#5D586A',
        'fg-subtle': '#8D8898',
        // Accent — refined premium violet
        accent: '#6E56CF',
        'accent-hover': '#5D45B8',
        'accent-ink': '#FFFFFF',
        // Hairlines (also used as gap-divider backgrounds)
        line: 'rgba(30,27,42,0.10)',
        'line-strong': 'rgba(30,27,42,0.16)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1140px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(30,27,42,0.04), 0 6px 20px rgba(30,27,42,0.06)',
        float: '0 6px 16px rgba(30,27,42,0.06), 0 24px 56px rgba(30,27,42,0.10)',
        btn: '0 1px 2px rgba(30,27,42,0.12), 0 6px 16px rgba(110,86,207,0.30)',
        'btn-hover': '0 2px 4px rgba(30,27,42,0.12), 0 10px 28px rgba(110,86,207,0.40)',
      },
      borderColor: {
        DEFAULT: 'rgba(30,27,42,0.10)',
        line: 'rgba(30,27,42,0.10)',
        'line-strong': 'rgba(30,27,42,0.16)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease forwards',
      },
    },
  },
  plugins: [],
}
export default config
