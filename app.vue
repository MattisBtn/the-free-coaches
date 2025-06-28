<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Global SEO configuration
useSeoMeta({
  titleTemplate: "%s | TheFreeCoaches",
  ogImage: "/images/og-image.jpg",
  twitterCard: "summary_large_image",
});

// Structured data
useSchemaOrg([
  defineOrganization({
    name: "TheFreeCoaches",
    logo: "/images/logo.png",
    sameAs: [
      "https://www.instagram.com/thefreecoaches/",
      "https://www.facebook.com/thefreecoaches/",
    ],
  }),
]);
</script>
