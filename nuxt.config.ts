import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  // SEO & Performance optimizations
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-mcp",
    "@nuxtjs/seo",
    "@vueuse/motion/nuxt",
  ],

  // App configuration
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1",
      charset: "utf-8",
    },
  },

  // Color mode configuration
  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
  },

  // SEO configuration
  site: {
    url: "https://thefreecoaches.com",
    name: "TheFreeCoaches",
    description:
      "Professional coaching services for personal and business growth",
    defaultLocale: "fr",
  },

  // Fonts optimization
  fonts: {
    families: [
      {
        name: "Inter Display",
        provider: "google",
        weights: [400, 500, 600, 700],
      },
    ],
  },
});
