<template>
    <section class="relative py-12 overflow-hidden">
        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Header -->
            <div class="text-center mb-20">
                <div
                    class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm mb-12">
                    <div class="relative">
                        <div class="w-3 h-3 bg-primary/60 rounded-full" />
                        <div class="absolute inset-0 w-3 h-3 bg-primary/20 rounded-full" />
                    </div>
                    <span class="text-base font-medium text-white/70 tracking-wide">L'équipe</span>
                </div>

                <div class="mb-12 space-y-6">
                    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[0.9] max-w-5xl mx-auto tracking-tight"
                        style="background-image: linear-gradient(0deg, rgb(153, 153, 153) 0%, rgb(255, 255, 255) 91.7261%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                        L'expertise qui transforme votre business
                    </h2>

                    <p
                        class="text-md sm:text-lg md:text-xl lg:text-xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed px-2 md:px-0">
                        Une équipe d'experts dédiée à votre réussite,<br>
                        avec une méthode éprouvée et structurée.
                    </p>
                </div>
            </div>

            <!-- Team Row - Single Line -->
            <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-12">

                <!-- Antoine -->
                <div class="flex items-center gap-4 group cursor-pointer">
                    <div class="relative">
                        <NuxtImg
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                            class="w-12 h-12 rounded-xl object-cover border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300"
                            alt="Antoine" />
                        <div
                            class="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background flex items-center justify-center">
                            <Icon name="i-heroicons-star-solid" class="w-2 h-2 text-black" />
                        </div>
                    </div>
                    <div>
                        <h4 class="text-white font-semibold text-sm group-hover:text-primary transition-colors">Antoine
                        </h4>
                        <p class="text-white/60 text-xs">Fondateur</p>
                    </div>
                </div>

                <!-- Alex -->
                <div class="flex items-center gap-4 group cursor-pointer">
                    <div class="relative">
                        <NuxtImg
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                            class="w-12 h-12 rounded-xl object-cover border-2 border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-300"
                            alt="Alex" />
                        <div
                            class="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-background flex items-center justify-center">
                            <Icon name="i-heroicons-chart-bar-solid" class="w-2 h-2 text-white" />
                        </div>
                    </div>
                    <div>
                        <h4 class="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors">Alex
                        </h4>
                        <p class="text-white/60 text-xs">Expert Acquisition</p>
                    </div>
                </div>

                <!-- Maxence -->
                <div class="flex items-center gap-4 group cursor-pointer">
                    <div class="relative">
                        <NuxtImg
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face"
                            class="w-12 h-12 rounded-xl object-cover border-2 border-green-500/30 group-hover:border-green-500/60 transition-all duration-300"
                            alt="Maxence" />
                        <div
                            class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                            <Icon name="i-heroicons-user-group-solid" class="w-2 h-2 text-white" />
                        </div>
                    </div>
                    <div>
                        <h4 class="text-white font-semibold text-sm group-hover:text-green-400 transition-colors">
                            Maxence</h4>
                        <p class="text-white/60 text-xs">Succès Client</p>
                    </div>
                </div>

                <!-- Camille -->
                <div class="flex items-center gap-4 group cursor-pointer">
                    <div class="relative">
                        <NuxtImg
                            src="https://images.unsplash.com/photo-1494790108755-2616b612b105?w=80&h=80&fit=crop&crop=face"
                            class="w-12 h-12 rounded-xl object-cover border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300"
                            alt="Camille" />
                        <div
                            class="absolute -bottom-1 -right-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-background flex items-center justify-center">
                            <Icon name="i-heroicons-heart-solid" class="w-2 h-2 text-white" />
                        </div>
                    </div>
                    <div>
                        <h4 class="text-white font-semibold text-sm group-hover:text-purple-400 transition-colors">
                            Camille</h4>
                        <p class="text-white/60 text-xs">Relations Client</p>
                    </div>
                </div>
            </div>

            <!-- Stats -->
            <div class="text-center mt-8">
                <p class="text-white/60 text-sm">
                    <span class="text-primary font-semibold">+500 coachs</span> accompagnés vers la réussite
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
// Minimal team section component
</script>