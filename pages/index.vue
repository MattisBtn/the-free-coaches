<script setup lang="ts">
import TeamSectionMini from '~/components/TeamSectionMini.vue';

// Le tracking des sections actives est géré par AppHeader.vue
// Pas besoin d'initialisation ici
</script>

<template>
  <div>
    <!-- Hero Section -->
    <HeroSection id="home" />

    <!-- Problems Section -->
    <ProblemsSection id="problems" />

    <!-- Process Section -->
    <ProcessSection id="process" />

    <!-- Clients Section -->
    <ClientsSection id="results" />

    <TeamSectionMini id="team" />

    <!-- FAQ Section -->
    <FaqSection id="faq" />
  </div>
</template>