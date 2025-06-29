<template>
    <Teleport to="body">
        <Transition enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 scale-95 translate-y-4" enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0" leave-to-class="opacity-0 scale-95 translate-y-4">
            <button v-if="showScrollToTop" aria-label="Remonter en haut de la page"
                class="fixed bottom-6 right-6 sm:bottom-4 sm:right-4 z-40 w-12 h-12 sm:w-11 sm:h-11 rounded-full bg-primary text-background flex items-center justify-center shadow-lg backdrop-blur-sm border border-primary/20 transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background active:scale-95 group"
                @click="handleScrollToTop">
                <!-- Icon -->
                <svg class="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>

                <!-- Ripple effect on click -->
                <span v-if="isAnimating" class="absolute inset-0 rounded-full bg-white/20 animate-ping" />
            </button>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
const { showScrollToTop, scrollToTop } = useScroll()
const isAnimating = ref(false)

const handleScrollToTop = () => {
    // Visual feedback
    isAnimating.value = true
    setTimeout(() => {
        isAnimating.value = false
    }, 600)

    // Scroll action
    scrollToTop()
}
</script>

<style scoped>
/* Custom shadows avec primary color pour une meilleure intégration */
button {
    box-shadow: 0 10px 15px -3px rgba(215, 159, 15, 0.25), 0 4px 6px -2px rgba(215, 159, 15, 0.05);
}

button:hover {
    box-shadow: 0 20px 25px -5px rgba(215, 159, 15, 0.4), 0 10px 10px -5px rgba(215, 159, 15, 0.1);
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    button {
        border-width: 2px;
    }
}
</style>