<template>
    <section class="relative overflow-hidden">
        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
            <div class="text-center space-y-8 md:space-y-12">

                <div class="flex items-center justify-center space-x-3 md:space-x-6">
                    <div class="flex -space-x-2 md:-space-x-3">
                        <NuxtImg
v-for="i in 5" :key="i" :src="`/images/coachs/${i}.jpg`"
                            class="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-white object-cover"
                            :style="{ zIndex: 10 - i }" />
                    </div>

                    <div class="text-left">
                        <div class="flex space-x-0.5 md:space-x-1 mb-1">
                            <Icon
v-for="i in 5" :key="i" name="i-heroicons-star-solid"
                                class="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                        </div>
                        <div class="text-xs md:text-sm font-medium text-white">
                            <span class="text-white">+500</span> Coachs accompagnés
                        </div>
                    </div>
                </div>

                <div class="space-y-4 md:space-y-6">
                    <h1
                        class="gradient-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.9] max-w-5xl mx-auto tracking-tight">
                        {{ title }}
                    </h1>

                    <p
                        class="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed px-2 md:px-0">
                        {{ subtitle }}
                    </p>
                </div>

                <div class="flex justify-center pt-2 md:pt-4">
                    <AppCta :text="ctaText" size="sm" @click="handleCtaClick" />
                </div>
            </div>

            <div class="mt-12 md:mt-20">
                <div class="relative max-w-5xl mx-auto">
                    <div
                        class="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border border-white/10">
                        <div
v-if="!videoLoaded"
                            class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                            <div class="text-center space-y-3 md:space-y-4">
                                <div
                                    class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto backdrop-blur-sm">
                                    <Icon name="i-heroicons-play" class="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                                </div>
                                <p class="text-white/80 font-medium text-base md:text-lg">Découvrez la méthode Coaching
                                    2.0</p>
                            </div>
                        </div>

                        <iframe
:src="vimeoUrl" class="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl"
                            frameborder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            allowfullscreen @load="videoLoaded = true" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
    title?: string
    subtitle?: string
    ctaText?: string
    vimeoVideoId?: string
}>(), {
    title: 'On aide les coachs sportifs à développer leurs activités grâce au coaching 2.0',
    subtitle: 'La méthode Coaching pour créer un système d\'acquisition automatisé et transformer votre passion en business rentable.',
    ctaText: 'Découvrir la méthode',
    vimeoVideoId: '1090844630'
})

const emit = defineEmits<{
    ctaClick: []
}>()

// Reactive data
const videoLoaded = ref(false)

// Computed
const vimeoUrl = computed(() => {
    const baseUrl = 'https://player.vimeo.com/video/'
    const params = '?h=b8ddb35184&autoplay=1&muted=1&preload=auto&badge=0&autopause=0'
    return `${baseUrl}${props.vimeoVideoId}${params}`
})

// Methods
const handleCtaClick = () => {
    emit('ctaClick')
}
</script>
