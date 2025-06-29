<template>
    <section class="relative py-16 overflow-hidden">
        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Header -->
            <div class="text-center mb-16">
                <div
                    class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm mb-8">
                    <div class="relative">
                        <div class="w-2 h-2 bg-primary/60 rounded-full" />
                        <div class="absolute inset-0 w-2 h-2 bg-primary/20 rounded-full" />
                    </div>
                    <span class="text-sm font-medium text-white/70 tracking-wide">Rencontrez l'équipe</span>
                </div>

                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto tracking-tight"
                    style="background-image: linear-gradient(0deg, rgb(153, 153, 153) 0%, rgb(255, 255, 255) 91.7261%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                    Une équipe passionnée par votre réussite
                </h2>
            </div>

            <!-- Hero Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

                <!-- Antoine - Main Hero -->
                <div class="group text-center lg:text-left">
                    <div
                        class="relative border border-white/[0.1] backdrop-blur-sm rounded-3xl p-8 hover:border-white/[0.2] transition-all duration-500 overflow-hidden">

                        <!-- Background gradient effect -->
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div class="relative z-10">
                            <!-- Antoine's Avatar - Larger -->
                            <div class="relative mb-6 mx-auto lg:mx-0 w-fit">
                                <NuxtImg
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                                    class="w-24 h-24 rounded-2xl object-cover border-3 border-primary/30 group-hover:border-primary/50 transition-all duration-300"
                                    alt="Antoine - Fondateur" />
                                <!-- Status indicator -->
                                <div
                                    class="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full border-3 border-background flex items-center justify-center">
                                    <Icon name="i-heroicons-star-solid" class="w-4 h-4 text-black" />
                                </div>
                            </div>

                            <!-- Antoine's Info -->
                            <div class="space-y-4">
                                <div>
                                    <h3
                                        class="text-3xl font-bold text-white mb-2 group-hover:text-primary/90 transition-colors">
                                        Antoine
                                    </h3>
                                    <div
                                        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                                        <span class="text-primary text-sm font-bold uppercase tracking-wide">Fondateur
                                            TheFreeCoaches</span>
                                    </div>
                                </div>

                                <p class="text-white/80 leading-relaxed text-sm">
                                    Ancien <span class="text-primary font-medium">sportif de haut niveau</span>, Antoine
                                    a bâti son activité de coaching de A à Z.
                                    En structurant un modèle en ligne rentable, il met aujourd'hui son expérience au
                                    service des coachs pour transformer leur passion en business structuré.
                                </p>

                                <!-- Skills badges -->
                                <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
                                    <span
                                        class="px-3 py-1 text-xs font-medium bg-white/[0.08] text-white/70 rounded-full border border-white/[0.1]">
                                        Sport haut niveau
                                    </span>
                                    <span
                                        class="px-3 py-1 text-xs font-medium bg-white/[0.08] text-white/70 rounded-full border border-white/[0.1]">
                                        Business coaching
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Supporting Team -->
                <div class="space-y-6">
                    <h4 class="text-xl font-bold text-white text-center lg:text-left mb-6">Son équipe dédiée</h4>

                    <!-- Alex -->
                    <div
                        class="flex items-center gap-4 p-4 border border-white/[0.08] rounded-2xl hover:border-white/[0.15] transition-all duration-300 group">
                        <div class="relative">
                            <NuxtImg
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                                class="w-14 h-14 rounded-xl object-cover border-2 border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300"
                                alt="Alex" />
                            <div
                                class="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-background flex items-center justify-center">
                                <Icon name="i-heroicons-chart-bar-solid" class="w-2.5 h-2.5 text-white" />
                            </div>
                        </div>
                        <div class="flex-1">
                            <h5 class="text-white font-semibold group-hover:text-blue-400 transition-colors">Alex</h5>
                            <p class="text-blue-400 text-sm font-medium">Expert Acquisition & Marketing</p>
                            <p class="text-white/60 text-xs mt-1">Pilote la stratégie d'acquisition pour chaque coach
                            </p>
                        </div>
                    </div>

                    <!-- Maxence -->
                    <div
                        class="flex items-center gap-4 p-4 border border-white/[0.08] rounded-2xl hover:border-white/[0.15] transition-all duration-300 group">
                        <div class="relative">
                            <NuxtImg
                                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face"
                                class="w-14 h-14 rounded-xl object-cover border-2 border-green-500/20 group-hover:border-green-500/40 transition-all duration-300"
                                alt="Maxence" />
                            <div
                                class="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                                <Icon name="i-heroicons-user-group-solid" class="w-2.5 h-2.5 text-white" />
                            </div>
                        </div>
                        <div class="flex-1">
                            <h5 class="text-white font-semibold group-hover:text-green-400 transition-colors">Maxence
                            </h5>
                            <p class="text-green-400 text-sm font-medium">Responsable Succès Client</p>
                            <p class="text-white/60 text-xs mt-1">L'artisan du résultat, accompagne chaque transition
                            </p>
                        </div>
                    </div>

                    <!-- Camille -->
                    <div
                        class="flex items-center gap-4 p-4 border border-white/[0.08] rounded-2xl hover:border-white/[0.15] transition-all duration-300 group">
                        <div class="relative">
                            <NuxtImg
                                src="https://images.unsplash.com/photo-1494790108755-2616b612b105?w=100&h=100&fit=crop&crop=face"
                                class="w-14 h-14 rounded-xl object-cover border-2 border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300"
                                alt="Camille" />
                            <div
                                class="absolute -bottom-1 -right-1 w-5 h-5 bg-purple-500 rounded-full border-2 border-background flex items-center justify-center">
                                <Icon name="i-heroicons-heart-solid" class="w-2.5 h-2.5 text-white" />
                            </div>
                        </div>
                        <div class="flex-1">
                            <h5 class="text-white font-semibold group-hover:text-purple-400 transition-colors">Camille
                            </h5>
                            <p class="text-purple-400 text-sm font-medium">Responsable Relations Client</p>
                            <p class="text-white/60 text-xs mt-1">La voix humaine, assure un suivi personnalisé</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom stat -->
            <div class="text-center mt-12">
                <p class="text-white/60 text-sm">
                    Ensemble, nous avons accompagné <span class="text-primary font-semibold">+500 coachs</span> vers la
                    réussite
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
// Hero-style team section component with Antoine as main focus
</script>