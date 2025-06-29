<template>
    <section class="relative py-24 overflow-hidden">
        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-20">
                <SectionBadge text="L'équipe" />

                <div class="mb-12 space-y-6">
                    <h2 class="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[0.9] max-w-5xl mx-auto tracking-tight"
                        style="background-image: linear-gradient(0deg, rgb(153, 153, 153) 0%, rgb(255, 255, 255) 91.7261%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                        Qui se cache derrière TheFreeCoaches ?
                    </h2>

                    <p
                        class="text-md sm:text-lg md:text-xl lg:text-xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed px-2 md:px-0">
                        Une équipe à taille humaine, passionnée par le sport, le coaching<br>
                        et les résultats concrets de nos coachs.
                    </p>
                </div>
            </div>

            <!-- Team Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

                <!-- Antoine - Founder -->
                <div class="group">
                    <div
                        class="relative border border-white/[0.1] backdrop-blur-sm rounded-3xl p-8 hover:border-white/[0.2] transition-all duration-500 overflow-hidden">

                        <!-- Background gradient effect -->
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div class="relative z-10">
                            <!-- Avatar and basic info -->
                            <div class="flex items-start gap-6 mb-6">
                                <div class="relative">
                                    <NuxtImg
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                                        class="w-20 h-20 rounded-2xl object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                                        alt="Antoine - Fondateur" />
                                    <!-- Status indicator -->
                                    <div
                                        class="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full border-3 border-background flex items-center justify-center">
                                        <Icon name="i-heroicons-star-solid" class="w-3 h-3 text-black" />
                                    </div>
                                </div>

                                <div class="flex-1">
                                    <h3
                                        class="text-2xl font-bold text-white mb-2 group-hover:text-primary/90 transition-colors">
                                        Antoine
                                    </h3>
                                    <div
                                        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                                        <span
                                            class="text-primary text-xs font-bold uppercase tracking-wide">Fondateur</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Description -->
                            <div class="space-y-4">
                                <p class="text-white/80 leading-relaxed text-sm">
                                    Ancien <span class="text-primary font-medium">sportif de haut niveau</span>, Antoine
                                    a démarré comme coach terrain.
                                    Pendant plusieurs années, il a bâti son activité de coaching sportif de A à Z.
                                </p>
                                <p class="text-white/80 leading-relaxed text-sm">
                                    C'est en structurant un vrai <span class="text-primary font-medium">modèle en
                                        ligne</span> qu'il a pu vivre confortablement de son métier.
                                    Aujourd'hui, il met toute son expérience au service des coachs.
                                </p>
                            </div>

                            <!-- Skills badges -->
                            <div class="flex flex-wrap gap-2 mt-6">
                                <span
                                    class="px-3 py-1 text-xs font-medium bg-white/[0.08] text-white/70 rounded-full border border-white/[0.1]">
                                    Sport haut niveau
                                </span>
                                <span
                                    class="px-3 py-1 text-xs font-medium bg-white/[0.08] text-white/70 rounded-full border border-white/[0.1]">
                                    Coaching terrain
                                </span>
                                <span
                                    class="px-3 py-1 text-xs font-medium bg-white/[0.08] text-white/70 rounded-full border border-white/[0.1]">
                                    Business model
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Alex - Marketing Expert -->
                <div class="group">
                    <div
                        class="relative border border-white/[0.1] backdrop-blur-sm rounded-3xl p-8 hover:border-white/[0.2] transition-all duration-500 overflow-hidden">

                        <!-- Background gradient effect -->
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div class="relative z-10">
                            <!-- Avatar and basic info -->
                            <div class="flex items-start gap-6 mb-6">
                                <div class="relative">
                                    <NuxtImg
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                                        class="w-20 h-20 rounded-2xl object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                                        alt="Alex - Expert Marketing" />
                                    <!-- Status indicator -->
                                    <div
                                        class="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full border-3 border-background flex items-center justify-center">
                                        <Icon name="i-heroicons-chart-bar-solid" class="w-3 h-3 text-white" />
                                    </div>
                                </div>

                                <div class="flex-1">
                                    <h3
                                        class="text-2xl font-bold text-white mb-2 group-hover:text-primary/90 transition-colors">
                                        Alex
                                    </h3>
                                    <div
                                        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                                        <span class="text-blue-400 text-xs font-bold uppercase tracking-wide">Expert
                                            Acquisition</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Description -->
                            <div class="space-y-4">
                                <p class="text-white/80 leading-relaxed text-sm">
                                    Petit frère d'Antoine, Alex est à l'origine de la <span
                                        class="text-blue-400 font-medium">stratégie de croissance</span>
                                    de TheFreeCoaches. Expert acquisition de tous les coachs accompagnés.
                                </p>
                                <p class="text-white/80 leading-relaxed text-sm">
                                    Il pilote toute la stratégie marketing pour que chaque coach ait un système
                                    d'acquisition
                                    <span class="text-blue-400 font-medium">clair, rentable et automatisé</span>.
                                </p>
                            </div>

                            <!-- Skills badges -->
                            <div class="flex flex-wrap gap-2 mt-6">
                                <span
                                    class="px-3 py-1 text-xs font-medium bg-white/[0.08] text-white/70 rounded-full border border-white/[0.1]">
                                    Publicités
                                </span>
                                <span
                                    class="px-3 py-1 text-xs font-medium bg-white/[0.08] text-white/70 rounded-full border border-white/[0.1]">
                                    Tunnels de vente
                                </span>
                                <span
                                    class="px-3 py-1 text-xs font-medium bg-white/[0.08] text-white/70 rounded-full border border-white/[0.1]">
                                    Acquisition
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Maxence - Customer Success -->
                <div class="group">
                    <div
                        class="relative border border-white/[0.1] backdrop-blur-sm rounded-3xl p-8 hover:border-white/[0.2] transition-all duration-500 overflow-hidden">

                        <!-- Background gradient effect -->
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div class="relative z-10">
                            <!-- Avatar and basic info -->
                            <div class="flex items-start gap-6 mb-6">
                                <div class="relative">
                                    <NuxtImg
                                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
                                        class="w-20 h-20 rounded-2xl object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                                        alt="Maxence - Customer Success" />
                                    <!-- Status indicator -->
                                    <div
                                        class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-background flex items-center justify-center">
                                        <Icon name="i-heroicons-user-group-solid" class="w-3 h-3 text-white" />
                                    </div>
                                </div>

                                <div class="flex-1">
                                    <h3
                                        class="text-2xl font-bold text-white mb-2 group-hover:text-primary/90 transition-colors">
                                        Maxence
                                    </h3>
                                    <div
                                        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                                        <span class="text-green-400 text-xs font-bold uppercase tracking-wide">Succès
                                            Client</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Description -->
                            <div class="space-y-4">
                                <p class="text-white/80 leading-relaxed text-sm">
                                    Maxence est <span class="text-green-400 font-medium">l'artisan du résultat
                                        client</span>.
                                    Il suit personnellement chaque coach dans sa transition vers le digital.
                                </p>
                                <p class="text-white/80 leading-relaxed text-sm">
                                    Sa mission : que chaque coach soit <span
                                        class="text-green-400 font-medium">fièrement aligné</span> avec son offre,
                                    et armé d'un système robuste pour délivrer un accompagnement de qualité.
                                </p>
                            </div>

                            <!-- Skills badges -->
                            <div class="flex flex-wrap gap-2 mt-6">
                                <span
                                    class="px-3 py-1 text-xs font-medium bg-white/[0.08] text-white/70 rounded-full border border-white/[0.1]">
                                    Transition digital
                                </span>
                                <span
                                    class="px-3 py-1 text-xs font-medium bg-white/[0.08] text-white/70 rounded-full border border-white/[0.1]">
                                    Accompagnement
                                </span>
                                <span
                                    class="px-3 py-1 text-xs font-medium bg-white/[0.08] text-white/70 rounded-full border border-white/[0.1]">
                                    Résultats
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Camille - Customer Relations -->
                <div class="group">
                    <div
                        class="relative border border-white/[0.1] backdrop-blur-sm rounded-3xl p-8 hover:border-white/[0.2] transition-all duration-500 overflow-hidden">

                        <!-- Background gradient effect -->
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div class="relative z-10">
                            <!-- Avatar and basic info -->
                            <div class="flex items-start gap-6 mb-6">
                                <div class="relative">
                                    <NuxtImg
                                        src="https://images.unsplash.com/photo-1494790108755-2616b612b105?w=150&h=150&fit=crop&crop=face"
                                        class="w-20 h-20 rounded-2xl object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                                        alt="Camille - Relations Client" />
                                    <!-- Status indicator -->
                                    <div
                                        class="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-500 rounded-full border-3 border-background flex items-center justify-center">
                                        <Icon name="i-heroicons-heart-solid" class="w-3 h-3 text-white" />
                                    </div>
                                </div>

                                <div class="flex-1">
                                    <h3
                                        class="text-2xl font-bold text-white mb-2 group-hover:text-primary/90 transition-colors">
                                        Camille
                                    </h3>
                                    <div
                                        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                                        <span
                                            class="text-purple-400 text-xs font-bold uppercase tracking-wide">Relations
                                            Client</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Description -->
                            <div class="space-y-4">
                                <p class="text-white/80 leading-relaxed text-sm">
                                    Camille, c'est <span class="text-purple-400 font-medium">la voix douce mais
                                        ferme</span> de toute la communauté TheFreeCoaches.
                                    Elle veille à ce que chaque coach reçoive un suivi humain et réactif.
                                </p>
                                <p class="text-white/80 leading-relaxed text-sm">
                                    Des premiers échanges jusqu'à l'autonomie, elle s'assure que chacun avance
                                    sereinement,
                                    en <span class="text-purple-400 font-medium">lien constant</span> avec l'équipe.
                                </p>
                            </div>

                            <!-- Skills badges -->
                            <div class="flex flex-wrap gap-2 mt-6">
                                <span
                                    class="px-3 py-1 text-xs font-medium bg-white/[0.08] text-white/70 rounded-full border border-white/[0.1]">
                                    Suivi humain
                                </span>
                                <span
                                    class="px-3 py-1 text-xs font-medium bg-white/[0.08] text-white/70 rounded-full border border-white/[0.1]">
                                    Communauté
                                </span>
                                <span
                                    class="px-3 py-1 text-xs font-medium bg-white/[0.08] text-white/70 rounded-full border border-white/[0.1]">
                                    Support réactif
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom CTA -->
            <div class="text-center mt-16">
                <div
                    class="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
                    <div class="flex -space-x-3">
                        <NuxtImg
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                            class="w-10 h-10 rounded-full border-2 border-background object-cover" />
                        <NuxtImg
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
                            class="w-10 h-10 rounded-full border-2 border-background object-cover" />
                        <NuxtImg
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=50&h=50&fit=crop&crop=face"
                            class="w-10 h-10 rounded-full border-2 border-background object-cover" />
                        <NuxtImg
                            src="https://images.unsplash.com/photo-1494790108755-2616b612b105?w=50&h=50&fit=crop&crop=face"
                            class="w-10 h-10 rounded-full border-2 border-background object-cover" />
                    </div>
                    <div class="text-left">
                        <p class="text-white font-medium text-sm">Une équipe à taille humaine</p>
                        <p class="text-white/60 text-xs">Passionnée par votre réussite</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
// Team section component showcasing the TheFreeCoaches team
</script>