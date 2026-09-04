/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#032a3a',
        'navy-deep': '#004987',
        'navy-mid': '#0e4987',
        'navy-light': '#315b7c',
        'cyan-accent': '#00BCD4',
        'cyan-soft': '#4698ca',
        'gold-accent': '#ffb81c',
        'text-dark': '#101010',
        'text-body': '#032a3a',
        'text-gray': '#54565a',
        'text-muted': '#9c9c9c',
        'bg-light': '#f2f2f2',
        'bg-tint': '#e6f2ff',
      },
      fontFamily: {
        'heading': ['Urbanist', 'sans-serif'],
        'body': ['"Nunito Sans"', 'sans-serif'],
      },
      fontSize: {
        'eyebrow': ['12px', { lineHeight: '1', letterSpacing: '0.15em', fontWeight: '700' }],
        'hero-h1': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', fontWeight: '700' }],
        'section-h2': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'card-h3': ['clamp(1.1rem, 1.6vw, 1.4rem)', { lineHeight: '1.3', fontWeight: '700' }],
        'body-copy': ['18px', { lineHeight: '1.7' }],
        'body-copy-lg': ['20px', { lineHeight: '1.7' }],
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 7rem)',
        'section-sm': 'clamp(2.5rem, 5vw, 4rem)',
        'container': 'clamp(1rem, 5vw, 3rem)',
      },
      maxWidth: {
        'site': '1280px',
      },
      letterSpacing: {
        'widest-2': '0.2em',
      }
    },
  },
  plugins: [],
}
