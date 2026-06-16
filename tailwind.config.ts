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
        // Surfaces — warm ivory / paper ramp
        ink: '#F4F1EA', // page background (cream)
        surface: '#FBF9F4', // subtly raised cells
        'surface-2': '#FFFFFF', // cards
        'surface-3': '#ECE7DD', // recessed / hover
        // Text — warm ink neutrals
        fg: '#221D16',
        'fg-muted': '#6A635A',
        'fg-subtle': '#8B8275',
        // Accent — terracotta clay
        accent: '#BD5B38',
        'accent-hover': '#A54C2C',
        'accent-ink': '#FBF5EE',
        // Hairlines (also used as gap-divider backgrounds)
        line: 'rgba(38,32,22,0.11)',
        'line-strong': 'rgba(38,32,22,0.18)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1140px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(38,32,22,0.04), 0 4px 16px rgba(38,32,22,0.05)',
        float: '0 4px 10px rgba(38,32,22,0.05), 0 18px 44px rgba(38,32,22,0.08)',
        btn: '0 1px 2px rgba(38,32,22,0.10), 0 4px 12px rgba(189,91,56,0.18)',
      },
      borderColor: {
        DEFAULT: 'rgba(38,32,22,0.11)',
        line: 'rgba(38,32,22,0.11)',
        'line-strong': 'rgba(38,32,22,0.18)',
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
