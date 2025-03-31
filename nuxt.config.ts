export default defineNuxtConfig({
  ssr: true,
  pages: true,
  modules: ['@pinia/nuxt'],
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],

  build: {
    transpile: ['vuetify'],
  },

  runtimeConfig: {
    public: {
      apiBase: 'http://3.127.249.5:8000/api',
    },
  },

  compatibilityDate: '2025-03-31'
})