import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f172a',
        'navy-light': '#1e293b',
        'navy-mid': '#334155',
        accent: '#38bdf8',
        'accent-dark': '#0284c7',
        'slate-text': '#cbd5e1',
        'slate-muted': '#94a3b8',
      },
    },
  },
  plugins: [],
}

export default config
