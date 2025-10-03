/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js}',
    './nuxt.config.{js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        },
        surface: {
          900: '#0b1020',
          800: '#0f172a',
          700: '#111827',
          600: '#0b1324'
        },
        accent: {
          500: '#22d3ee',
          600: '#06b6d4'
        }
      },
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans']
      },
      boxShadow: {
        'elev-1': '0 1px 2px 0 rgba(255,255,255,0.03), 0 1px 1px -1px rgba(0,0,0,0.2)',
        'elev-2': '0 6px 20px rgba(2, 6, 23, 0.35)',
        'glow': '0 0 0 4px rgba(59,130,246,0.25)'
      },
      backgroundImage: {
        'grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
        'hero': 'radial-gradient(1200px 600px at 0% -10%, rgba(59,130,246,0.25), transparent 60%), radial-gradient(900px 500px at 100% 0%, rgba(34,211,238,0.18), transparent 60%)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}

