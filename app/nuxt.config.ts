// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ['~/plugins/analytics.client.ts'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        // Preload critical fonts for better performance
        { 
          rel: 'preload', 
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
          as: 'style',
          crossorigin: 'anonymous'
        },
        { 
          rel: 'preload', 
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
          as: 'style',
          crossorigin: 'anonymous'
        },
        // Load optimized font subsets
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
          crossorigin: 'anonymous'
        },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
          crossorigin: 'anonymous'
        }
      ],
      meta: [
        // OpenGraph meta tags
        { key: 'og:title', property: 'og:title', content: "Hello, I'm Denis Grushkin" },
        { key: 'og:description', property: 'og:description', content: 'My objective is to foster business growth through the adoption of cutting-edge technologies.' },
        { key: 'og:image', property: 'og:image', content: '/og-image.png' },
        { key: 'og:image:width', property: 'og:image:width', content: '1200' },
        { key: 'og:image:height', property: 'og:image:height', content: '630' },
        { key: 'og:image:alt', property: 'og:image:alt', content: 'Denis Grushkin' },
        { key: 'og:type', property: 'og:type', content: 'website' },
        { key: 'og:url', property: 'og:url', content: 'https://denisoed.com' },

        // Twitter meta tags
        { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { key: 'twitter:title', name: 'twitter:title', content: "Hello, I'm Denis Grushkin" },
        { key: 'twitter:description', name: 'twitter:description', content: 'My objective is to foster business growth through the adoption of cutting-edge technologies.' },
        { key: 'twitter:image', name: 'twitter:image', content: '/og-image.png' },
        { key: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Denis Grushkin' },
        { key: 'twitter:site', name: 'twitter:site', content: '@denisoed' }
      ]
    }
  },

  compatibilityDate: '2025-07-21'
});