// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: "2024-07-03",
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/code-kata/" : "/",
    buildAssetsDir: "/static/",
    rootAttrs: {
      id: "app",
    },
  },
  css: ["~/assets/reset.css"],
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "nuxt-lucide-icons"
  ],
  ssr: false,
  content: {
    api: {
      baseURL: "/api/_content",
    },
    documentDriven: true,
    highlight: {
      theme: "github-light",
    },
    navigation: {
      fields: ["author", "publishedAt"],
    },
    experimental: {
      clientDB: true,
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  icon: {
    serverBundle: {
      remote: "jsdelivr", // 'unpkg' or 'github-raw', or a custom function
    },
  },
});