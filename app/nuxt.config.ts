// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ['~/plugins/firebase.client.ts'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  }
});
