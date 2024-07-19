// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: "2024-07-03",
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/code-kata/' : '/',
    buildAssetsDir: '/static/',
    rootAttrs: {
      id: "app" 
    },
  },
  css: [
    "~/assets/reset.css"
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/image"
  ],
  ssr: false,
  content: {
    documentDriven: true,
    experimental: {
      clientDB: true
    },
    api: {
      baseURL: '/api/_content'
    }
  },

  routeRules: {
    '/**': { prerender: true },
  },
})  
  