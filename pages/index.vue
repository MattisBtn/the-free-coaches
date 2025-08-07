<script setup lang="ts">

// Configuration SEO complète pour la page d'accueil
useSeoMeta({
  title: "Méthode Coaching 2.0 pour Coachs Sportifs",
  description: "Transformez votre coaching sportif avec notre méthode Coaching 2.0. Générez 5k€ à 15k€/mois grâce à nos tunnels d'acquisition automatisés, offres digitales haut de gamme et accompagnement personnalisé. ✅ Système testé sur 500+ coachs",
  keywords: "coach sportif en ligne, formation coaching digital, business coaching sportif, coaching 2.0, tunnel acquisition clients, offre coaching premium, automatisation coaching, TheFreeCoaches",

  // Open Graph
  ogTitle: "TheFreeCoaches : Méthode Coaching 2.0 pour Coachs Sportifs",
  ogDescription: "Transformez votre coaching sportif avec notre méthode Coaching 2.0. Générez 5k€ à 15k€/mois grâce à nos tunnels d'acquisition automatisés.",
  ogImage: "/images/og-home.jpg",
  ogType: "website",
  ogLocale: "fr_FR",

  // Twitter
  twitterTitle: "TheFreeCoaches : Méthode Coaching 2.0 pour Coachs Sportifs",
  twitterDescription: "Transformez votre coaching sportif avec notre méthode Coaching 2.0. Générez 5k€ à 15k€/mois grâce à nos tunnels d'acquisition automatisés.",
  twitterImage: "/images/og-home.jpg",

  // Robots
  robots: "index,follow",

  // Auteur et organisation
  author: "TheFreeCoaches - Antoine, Alex, Maxence, Camille",
});

// Schema.org pour la page d'accueil
useSchemaOrg([
  defineWebSite({
    name: "TheFreeCoaches",
    description: "Méthode Coaching 2.0 pour transformer les coachs sportifs en entrepreneurs du digital",
    url: "https://thefreecoaches.com",
  }),
  defineLocalBusiness({
    name: "TheFreeCoaches",
    description: "Formation coaching sportif digital - Méthode Coaching 2.0",
    address: {
      addressCountry: "FR",
      addressRegion: "France"
    },
    url: "https://thefreecoaches.com",
    priceRange: "€€€",
  }),
  definePerson({
    name: "Antoine",
    jobTitle: "Fondateur TheFreeCoaches",
    description: "Ancien sportif de haut niveau, expert en développement d'activité coaching en ligne",
    worksFor: {
      "@type": "Organization",
      name: "TheFreeCoaches"
    }
  })
]);

// Le tracking des sections actives est géré par AppHeader.vue
// Pas besoin d'initialisation ici
</script>

<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />

    <!-- Problems Section -->
    <ProblemsSection />

    <!-- Process Section -->
    <ProcessSection />

    <!-- Clients Section -->
    <ClientsSection />

    <TeamSectionMini />

    <!-- FAQ Section -->
    <FaqSection />
  </div>
</template>