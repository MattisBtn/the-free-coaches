<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Configuration SEO globale (fallbacks seulement)
useSeoMeta({
  titleTemplate: "%s | TheFreeCoaches",
  twitterCard: "summary_large_image",
});

// Schema.org global - Organisation de base
useSchemaOrg([
  defineOrganization({
    name: "TheFreeCoaches",
    logo: "/images/logo.png",
    url: "https://thefreecoaches.com",
    sameAs: [
      "https://www.instagram.com/thefreecoaches/",
      "https://www.facebook.com/thefreecoaches/",
    ],
  }),
]);
</script>
