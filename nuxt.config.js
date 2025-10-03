// Nuxt 3 configuration (JavaScript) for InVideo AI pre-lander
export default defineNuxtConfig({
  srcDir: '.',
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    public: {
      affiliateBaseUrl: process.env.AFFILIATE_URL || 'https://invideo.io',
      affiliateParams: process.env.AFFILIATE_PARAMS || 'utm_source=prelander&utm_medium=cpl&utm_campaign=ai_short_form'
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      meta: [
        { name: 'theme-color', content: '#0F172A' },
        { name: 'color-scheme', content: 'light' },
        { name: 'google-site-verification', content: 'FXV4cONS5z9TB7kRa37hoAYMm6BuN7rTdO9l0De27vI' },
        { property: 'og:site_name', content: 'InVideo AI Landing' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  compatibilityDate: '2024-12-18'
})

