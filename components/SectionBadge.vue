<template>
    <div
        class="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-lg mb-6 sm:mb-8 lg:mb-12 group hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300">
        <!-- Animated dot with subtle pulse -->
        <div class="relative">
            <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full shadow-lg" />
            <div
                class="absolute inset-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary/30 rounded-full animate-ping opacity-60" />
            <div class="absolute inset-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary/10 rounded-full" />
        </div>

        <!-- Badge text with elegant typography -->
        <span
            class="text-sm sm:text-base font-medium text-white/80 tracking-wide group-hover:text-white/90 transition-colors duration-300">
            {{ text }}
        </span>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    text: string
}

defineProps<Props>()
</script>