// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-03",
  ssr: false,

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
  ]
})  
