// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ['~/plugins/analytics.client.ts'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        // OpenGraph meta tags
        { hid: 'og:title', property: 'og:title', content: "Hello, I'm Denis Grushkin" },
        { hid: 'og:description', property: 'og:description', content: 'My objective is to foster business growth through the adoption of cutting-edge technologies.' },
        { hid: 'og:image', property: 'og:image', content: '/og-image.png' },
        { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
        { hid: 'og:image:height', property: 'og:image:height', content: '630' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: 'Denis Grushkin' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://denisoed.com' },

        // Twitter meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: "Hello, I'm Denis Grushkin" },
        { hid: 'twitter:description', name: 'twitter:description', content: 'My objective is to foster business growth through the adoption of cutting-edge technologies.' },
        { hid: 'twitter:image', name: 'twitter:image', content: '/og-image.png' },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Denis Grushkin' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@denisoed' }
      ]
    }
  }
});
