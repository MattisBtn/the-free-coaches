<template>
    <section class="relative py-16 overflow-hidden">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Compact Header -->
            <div class="text-center mb-16">
                <SectionBadge text="L'équipe TheFreeCoaches" />

                <h2
                    class="gradient-text text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto tracking-tight mb-4">
                    Une équipe passionnée par votre réussite
                </h2>
            </div>

            <!-- Team Grid - Horizontal Layout -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

                <!-- Antoine - Founder -->
                <div class="group">
                    <div
                        class="relative border border-white/[0.1] backdrop-blur-sm rounded-2xl p-6 hover:border-white/[0.2] transition-all duration-300 text-center">

                        <!-- Avatar -->
                        <div class="relative mb-4 mx-auto w-fit">
                            <NuxtImg
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
                                class="w-16 h-16 rounded-xl object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                                alt="Antoine - Fondateur" />
                            <!-- Status indicator -->
                            <div
                                class="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-background flex items-center justify-center">
                                <Icon name="i-heroicons-star-solid" class="w-2.5 h-2.5 text-black" />
                            </div>
                        </div>

                        <!-- Info -->
                        <div class="space-y-3">
                            <div>
                                <h3
                                    class="text-lg font-bold text-white mb-1 group-hover:text-primary/90 transition-colors">
                                    Antoine
                                </h3>
                                <div
                                    class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 border border-primary/20">
                                    <span
                                        class="text-primary text-xs font-bold uppercase tracking-wide">Fondateur</span>
                                </div>
                            </div>

                            <p class="text-white/70 text-xs leading-relaxed">
                                Ancien sportif de haut niveau, il met son expérience au service des coachs pour
                                structurer leur business en ligne.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Alex - Marketing Expert -->
                <div class="group">
                    <div
                        class="relative border border-white/[0.1] backdrop-blur-sm rounded-2xl p-6 hover:border-white/[0.2] transition-all duration-300 text-center">

                        <!-- Avatar -->
                        <div class="relative mb-4 mx-auto w-fit">
                            <NuxtImg
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face"
                                class="w-16 h-16 rounded-xl object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                                alt="Alex - Expert Marketing" />
                            <!-- Status indicator -->
                            <div
                                class="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-background flex items-center justify-center">
                                <Icon name="i-heroicons-chart-bar-solid" class="w-2.5 h-2.5 text-white" />
                            </div>
                        </div>

                        <!-- Info -->
                        <div class="space-y-3">
                            <div>
                                <h3
                                    class="text-lg font-bold text-white mb-1 group-hover:text-primary/90 transition-colors">
                                    Alex
                                </h3>
                                <div
                                    class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                                    <span
                                        class="text-blue-400 text-xs font-bold uppercase tracking-wide">Acquisition</span>
                                </div>
                            </div>

                            <p class="text-white/70 text-xs leading-relaxed">
                                Expert en publicités et tunnels de vente, il pilote la stratégie d'acquisition pour
                                chaque coach.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Maxence - Customer Success -->
                <div class="group">
                    <div
                        class="relative border border-white/[0.1] backdrop-blur-sm rounded-2xl p-6 hover:border-white/[0.2] transition-all duration-300 text-center">

                        <!-- Avatar -->
                        <div class="relative mb-4 mx-auto w-fit">
                            <NuxtImg
                                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&crop=face"
                                class="w-16 h-16 rounded-xl object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                                alt="Maxence - Customer Success" />
                            <!-- Status indicator -->
                            <div
                                class="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                                <Icon name="i-heroicons-user-group-solid" class="w-2.5 h-2.5 text-white" />
                            </div>
                        </div>

                        <!-- Info -->
                        <div class="space-y-3">
                            <div>
                                <h3
                                    class="text-lg font-bold text-white mb-1 group-hover:text-primary/90 transition-colors">
                                    Maxence
                                </h3>
                                <div
                                    class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                                    <span class="text-green-400 text-xs font-bold uppercase tracking-wide">Succès</span>
                                </div>
                            </div>

                            <p class="text-white/70 text-xs leading-relaxed">
                                L'artisan du résultat client, il accompagne chaque coach dans sa transition vers le
                                digital.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Camille - Customer Relations -->
                <div class="group">
                    <div
                        class="relative border border-white/[0.1] backdrop-blur-sm rounded-2xl p-6 hover:border-white/[0.2] transition-all duration-300 text-center">

                        <!-- Avatar -->
                        <div class="relative mb-4 mx-auto w-fit">
                            <NuxtImg
                                src="https://images.unsplash.com/photo-1494790108755-2616b612b105?w=120&h=120&fit=crop&crop=face"
                                class="w-16 h-16 rounded-xl object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                                alt="Camille - Relations Client" />
                            <!-- Status indicator -->
                            <div
                                class="absolute -bottom-1 -right-1 w-5 h-5 bg-purple-500 rounded-full border-2 border-background flex items-center justify-center">
                                <Icon name="i-heroicons-heart-solid" class="w-2.5 h-2.5 text-white" />
                            </div>
                        </div>

                        <!-- Info -->
                        <div class="space-y-3">
                            <div>
                                <h3
                                    class="text-lg font-bold text-white mb-1 group-hover:text-primary/90 transition-colors">
                                    Camille
                                </h3>
                                <div
                                    class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                                    <span
                                        class="text-purple-400 text-xs font-bold uppercase tracking-wide">Support</span>
                                </div>
                            </div>

                            <p class="text-white/70 text-xs leading-relaxed">
                                La voix humaine de l'équipe, elle assure un suivi personnalisé et réactif pour chaque
                                coach.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom CTA - More compact -->
            <div class="text-center mt-12">
                <div
                    class="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
                    <div class="flex -space-x-2">
                        <NuxtImg
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                            class="w-8 h-8 rounded-full border-2 border-background object-cover" />
                        <NuxtImg
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                            class="w-8 h-8 rounded-full border-2 border-background object-cover" />
                        <NuxtImg
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face"
                            class="w-8 h-8 rounded-full border-2 border-background object-cover" />
                        <NuxtImg
                            src="https://images.unsplash.com/photo-1494790108755-2616b612b105?w=40&h=40&fit=crop&crop=face"
                            class="w-8 h-8 rounded-full border-2 border-background object-cover" />
                    </div>
                    <div class="text-left">
                        <p class="text-white font-medium text-sm">+500 coachs accompagnés</p>
                        <p class="text-white/60 text-xs">par une équipe passionnée</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
// Compact team section component
</script>