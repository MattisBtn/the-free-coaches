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
    "nuxt-mcp",
    "@nuxtjs/seo",
    "@vueuse/motion/nuxt",
    "@nuxtjs/fontaine",
    "nuxt-vitalizer",
    "@zadigetvoltaire/nuxt-gtm",
    "nuxt-gtag",
  ],

  // Configuration GTM
  gtm: {
    id: "GTM-WFPK9L29",
    defer: false,
    compatibility: false,
    enabled: true,
    debug: false,
    loadScript: true,
    enableRouterSync: true,
    trackOnNextTick: false,
    devtools: true,
  },

  // App configuration
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1",
      charset: "utf-8",
      meta: [
        {
          name: "google-site-verification",
          content: "jdqoACsVDKDa0DYLxABisRKmSxo3K09jjLOfQeFA8Q0",
        },
      ],
    },
  },

  // SEO configuration optimisée pour TheFreeCoaches
  site: {
    url: "https://thefreecoaches.com",
    name: "TheFreeCoaches",
    description:
      "Méthode Coaching 2.0 : Aidez les coachs sportifs à développer une activité en ligne rentable et stable. Générez 5k€ à 15k€/mois avec nos tunnels d'acquisition automatisés et notre accompagnement personnalisé.",
    defaultLocale: "fr",
  },

  // Configuration SEO avancée
  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  // Configuration robots et indexation
  robots: {
    blockAiBots: false, // On veut être indexé par les IA pour la visibilité
  },

  // Configuration sitemap
  sitemap: {
    cacheMaxAgeSeconds: 86400, // 24h
  },

  // Fonts optimization
  fonts: {
    families: [
      {
        name: "Inter",
        provider: "google",
        weights: [400, 500, 600, 700],
      },
    ],
  },

  vitalizer: {
    // Remove the render-blocking entry CSS
    disableStylesheets: "entry",
    disablePrefetchLinks: true,
  },

  gtag: {
    id: "AW-812873404",
  },
});
