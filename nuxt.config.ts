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
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cactus+Classical+Serif&family=Chocolate+Classical+Sans&family=Dela+Gothic+One&family=Mochiy+Pop+One&family=Noto+Sans+JP:wght@100..900&family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+JP:wght@200..900&family=Noto+Serif+TC:wght@200..900&family=Shippori+Mincho&family=Shippori+Mincho+B1&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Noto+Sans+TC:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        },
      ],
    },
  },
  // css: ["~/assets/reset.css"],
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "nuxt-lucide-icons",
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
