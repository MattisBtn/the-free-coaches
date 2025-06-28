<template>
    <section class="relative py-24 overflow-hidden">
        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-20">
                <div
                    class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm mb-12">
                    <div class="relative">
                        <div class="w-3 h-3 bg-primary/60 rounded-full" />
                        <div class="absolute inset-0 w-3 h-3 bg-primary/20 rounded-full" />
                    </div>
                    <span class="text-base font-medium text-white/70 tracking-wide">Témoignages</span>
                </div>

                <div class="mb-12 space-y-6">
                    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[0.9] max-w-5xl mx-auto tracking-tight"
                        style="background-image: linear-gradient(0deg, rgb(153, 153, 153) 0%, rgb(255, 255, 255) 91.7261%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                        Nos clients transforment leur coaching
                    </h2>

                    <p
                        class="text-md sm:text-lg md:text-xl lg:text-xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed px-2 md:px-0">
                        Découvrez comment nos coachs ont structuré leur business<br>
                        et créé des revenus récurrents et prévisibles.
                    </p>

                    <AppCta text="Réserver un appel" size="sm" class="mx-auto" />
                </div>
            </div>

            <!-- Cards Container -->
            <div class="relative max-w-5xl mx-auto">

                <!-- Mobile: Linear Cards -->
                <div class="block lg:hidden space-y-8">
                    <!-- Card Shirley -->
                    <div class="w-full">
                        <div class="w-full bg-background border rounded-3xl overflow-hidden">
                            <!-- Card Header -->
                            <div class="flex items-center justify-between p-4 border-b border-white/[0.06]">
                                <div class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                    <span class="text-sm text-white/60 font-medium">Shirley M.</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="w-3 h-3 rounded-full bg-white/20" />
                                    <div class="w-3 h-3 rounded-full bg-white/20" />
                                    <div class="w-3 h-3 rounded-full bg-white/20" />
                                </div>
                            </div>

                            <!-- Card Content -->
                            <div class="p-6">
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <!-- Left Column -->
                                    <div class="space-y-6">
                                        <!-- Domain Header -->
                                        <div class="relative">
                                            <div class="flex items-start gap-4 mb-4">
                                                <div class="flex-1">
                                                    <div class="flex items-center gap-2 mb-2">
                                                        <h3 class="text-2xl font-bold text-white">Coach Haltérophilie
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Story with badges -->
                                        <div
                                            class="relative bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/30 rounded-3xl p-6 overflow-hidden">
                                            <div class="relative z-10 space-y-4">
                                                <p class="text-white/90 text-base leading-relaxed">
                                                    Shirley, coach en haltérophilie, sortait de diplôme, <span
                                                        class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">sans
                                                        clients</span>, en pleine reconversion après une <span
                                                        class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">carrière
                                                        banque</span>.
                                                </p>
                                                <p class="text-white/90 text-base leading-relaxed">
                                                    Elle rêvait de vivre du <span
                                                        class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">coaching
                                                        à distance</span>, mais ne savait pas comment s'y prendre.
                                                </p>
                                                <div class="pt-3 border-t border-white/10">
                                                    <p class="text-white/90 text-base leading-relaxed">
                                                        Quelques mois plus tard, elle a <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">arrêté
                                                            le présentiel</span>, gère <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">16
                                                            coachings en ligne</span>, et attire <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">10-30
                                                            abonnés/jour</span> grâce aux ads.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Right Column -->
                                    <div class="space-y-4">
                                        <NuxtImg src="/images/clients/tfc-shirley.jpg"
                                            class="w-full h-64 mx-auto rounded-2xl object-cover border-2 border-primary/20 shadow-lg"
                                            alt="Shirley - Coach haltérophilie" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card Hedi -->
                    <div class="w-full">
                        <div class="w-full bg-background border border-white/10 rounded-3xl overflow-hidden">
                            <!-- Card Header -->
                            <div class="flex items-center justify-between p-4 border-b border-white/[0.08]">
                                <div class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                    <span class="text-sm text-white/70 font-medium">Hedi K.</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="w-3 h-3 rounded-full bg-white/25" />
                                    <div class="w-3 h-3 rounded-full bg-white/25" />
                                    <div class="w-3 h-3 rounded-full bg-white/25" />
                                </div>
                            </div>

                            <!-- Card Content -->
                            <div class="p-6">
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <!-- Left Column -->
                                    <div class="space-y-6">
                                        <!-- Domain Header -->
                                        <div class="relative">
                                            <div class="flex items-start gap-4 mb-4">
                                                <div class="flex-1">
                                                    <div class="flex items-center gap-2 mb-2">
                                                        <h3 class="text-2xl font-bold text-white">Coach en Salle</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Story with badges -->
                                        <div
                                            class="relative bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/30 rounded-3xl p-6 overflow-hidden">
                                            <div class="relative z-10 space-y-4">
                                                <p class="text-white/90 text-base leading-relaxed">
                                                    Hedi <span
                                                        class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">22
                                                        ans</span>, coach en salle chez <span
                                                        class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">Basic
                                                        Fit</span>, épuisé par le présentiel et <span
                                                        class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">sans
                                                        résultat en ligne</span> malgré 6 mois d'efforts en solo.
                                                </p>
                                                <p class="text-white/90 text-base leading-relaxed">
                                                    En rejoignant le <span
                                                        class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">Coaching
                                                        2.0</span>, il a appris à structurer son offre, maîtriser la
                                                    vente, et attirer ses premières clientes.
                                                </p>
                                                <div class="pt-3 border-t border-white/10">
                                                    <p class="text-white/90 text-base leading-relaxed">
                                                        Résultat : plus de <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">9
                                                            500 € en 2 mois</span>, <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">10
                                                            clientes signées</span> et une <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">activité
                                                            hybride</span> bien rodée.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Right Column -->
                                    <div class="space-y-4">
                                        <NuxtImg src="/images/clients/tfc-hedi.jpg"
                                            class="w-full h-64 mx-auto rounded-2xl object-cover border-2 border-primary/20 shadow-lg"
                                            alt="Hedi - Coach en salle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card Nicolas -->
                    <div class="w-full">
                        <div class="w-full bg-background border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                            <!-- Card Header -->
                            <div class="flex items-center justify-between p-4 border-b border-white/[0.12]">
                                <div class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                    <span class="text-sm text-white/80 font-medium">Nicolas M.</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="w-3 h-3 rounded-full bg-white/30" />
                                    <div class="w-3 h-3 rounded-full bg-white/30" />
                                    <div class="w-3 h-3 rounded-full bg-white/30" />
                                </div>
                            </div>

                            <!-- Card Content -->
                            <div class="p-6">
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <!-- Left Column -->
                                    <div class="space-y-6">
                                        <!-- Domain Header -->
                                        <div class="relative">
                                            <div class="flex items-start gap-4 mb-4">
                                                <div class="flex-1">
                                                    <div class="flex items-center gap-2 mb-2">
                                                        <h3 class="text-2xl font-bold text-white">Préparateur Mental
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Story with badges -->
                                        <div
                                            class="relative bg-gradient-to-br from-primary/15 to-yellow-400/5 border border-primary/30 rounded-3xl p-6 overflow-hidden">
                                            <div class="relative z-10 space-y-4">
                                                <p class="text-white/90 text-base leading-relaxed">
                                                    Nico, préparateur mental, était <span
                                                        class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">à
                                                        deux doigts d'abandonner</span> son activité, avec <span
                                                        class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">2
                                                        enfants à charge</span> et seulement <span
                                                        class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">2
                                                        200 € sur son compte</span>.
                                                </p>
                                                <p class="text-white/90 text-base leading-relaxed">
                                                    Après plusieurs <span
                                                        class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">coachings
                                                        décevants</span>, il décide de nous faire confiance en <span
                                                        class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">juin</span>.
                                                </p>
                                                <div class="pt-3 border-t border-white/10">
                                                    <p class="text-white/90 text-base leading-relaxed">
                                                        En appliquant notre méthode à la lettre, il passe de <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">0
                                                            à 15 000 € en 90 jours</span>, en vendant des
                                                        accompagnements premium à <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">1800
                                                            €</span>.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Right Column -->
                                    <div class="space-y-6">
                                        <NuxtImg src="/images/clients/tfc-nicolas.jpg"
                                            class="w-full h-64 mx-auto rounded-2xl object-cover border-3 border-primary/30 shadow-lg"
                                            alt="Nicolas - Préparateur mental" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Desktop: Stacked Cards -->
                <div class="hidden lg:block">
                    <div class="relative h-[500px] perspective-1000 mt-48">
                        <!-- Card Shirley -->
                        <div class="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out"
                            :style="getCardStyle(0)" @mouseenter="pauseRotation" @mouseleave="resumeRotation">
                            <div class="w-full max-w-4xl bg-background border rounded-3xl overflow-hidden">
                                <!-- Card Header -->
                                <div class="flex items-center justify-between p-4 border-b border-white/[0.06]">
                                    <div class="flex items-center gap-3">
                                        <svg class="w-5 h-5 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                        <span class="text-sm text-white/60 font-medium">Shirley M.</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <div class="w-3 h-3 rounded-full bg-white/20" />
                                        <div class="w-3 h-3 rounded-full bg-white/20" />
                                        <div class="w-3 h-3 rounded-full bg-white/20" />
                                    </div>
                                </div>

                                <!-- Card Content -->
                                <div class="p-6">
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                        <!-- Left Column -->
                                        <div class="space-y-6">
                                            <!-- Domain Header -->
                                            <div class="relative">
                                                <div class="flex items-start gap-4 mb-4">
                                                    <div class="flex-1">
                                                        <div class="flex items-center gap-2 mb-2">
                                                            <h3 class="text-2xl font-bold text-white">Coach
                                                                Haltérophilie</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Story with badges -->
                                            <div
                                                class="relative bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/30 rounded-3xl p-6 overflow-hidden">
                                                <div class="relative z-10 space-y-4">
                                                    <p class="text-white/90 text-base leading-relaxed">
                                                        Shirley, coach en haltérophilie, sortait de diplôme, <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">sans
                                                            clients</span>, en pleine reconversion après une <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">carrière
                                                            banque</span>.
                                                    </p>
                                                    <p class="text-white/90 text-base leading-relaxed">
                                                        Elle rêvait de vivre du <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">coaching
                                                            à distance</span>, mais ne savait pas comment s'y prendre.
                                                    </p>
                                                    <div class="pt-3 border-t border-white/10">
                                                        <p class="text-white/90 text-base leading-relaxed">
                                                            Quelques mois plus tard, elle a <span
                                                                class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">arrêté
                                                                le présentiel</span>, gère <span
                                                                class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">16
                                                                coachings en ligne</span>, et attire <span
                                                                class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">10-30
                                                                abonnés/jour</span> grâce aux ads.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Right Column -->
                                        <div class="space-y-4">
                                            <NuxtImg src="/images/clients/tfc-shirley.jpg"
                                                class="w-full h-64 mx-auto rounded-2xl object-cover border-2 border-primary/20 shadow-lg"
                                                alt="Shirley - Coach haltérophilie" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Card Hedi -->
                        <div class="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out"
                            :style="getCardStyle(1)" @mouseenter="pauseRotation" @mouseleave="resumeRotation">
                            <div
                                class="w-full max-w-4xl bg-background border border-white/10 rounded-3xl overflow-hidden">
                                <!-- Card Header -->
                                <div class="flex items-center justify-between p-4 border-b border-white/[0.08]">
                                    <div class="flex items-center gap-3">
                                        <svg class="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                        <span class="text-sm text-white/70 font-medium">Hedi K.</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <div class="w-3 h-3 rounded-full bg-white/25" />
                                        <div class="w-3 h-3 rounded-full bg-white/25" />
                                        <div class="w-3 h-3 rounded-full bg-white/25" />
                                    </div>
                                </div>

                                <!-- Card Content -->
                                <div class="p-6">
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                        <!-- Left Column -->
                                        <div class="space-y-6">
                                            <!-- Domain Header -->
                                            <div class="relative">
                                                <div class="flex items-start gap-4 mb-4">
                                                    <div class="flex-1">
                                                        <div class="flex items-center gap-2 mb-2">
                                                            <h3 class="text-2xl font-bold text-white">Coach en Salle
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Story with badges -->
                                            <div
                                                class="relative bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/30 rounded-3xl p-6 overflow-hidden">
                                                <div class="relative z-10 space-y-4">
                                                    <p class="text-white/90 text-base leading-relaxed">
                                                        Hedi <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">22
                                                            ans</span>, coach en salle chez <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">Basic
                                                            Fit</span>, épuisé par le présentiel et <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">sans
                                                            résultat en ligne</span> malgré 6 mois d'efforts en solo.
                                                    </p>
                                                    <p class="text-white/90 text-base leading-relaxed">
                                                        En rejoignant le <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">Coaching
                                                            2.0</span>, il a appris à structurer son offre, maîtriser la
                                                        vente, et attirer ses premières clientes.
                                                    </p>
                                                    <div class="pt-3 border-t border-white/10">
                                                        <p class="text-white/90 text-base leading-relaxed">
                                                            Résultat : plus de <span
                                                                class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">9
                                                                500 € en 2 mois</span>, <span
                                                                class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">10
                                                                clientes signées</span> et une <span
                                                                class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">activité
                                                                hybride</span> bien rodée.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Right Column -->
                                        <div class="space-y-4">
                                            <NuxtImg src="/images/clients/tfc-hedi.jpg"
                                                class="w-full h-64 mx-auto rounded-2xl object-cover border-2 border-primary/20 shadow-lg"
                                                alt="Hedi - Coach en salle" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Card Nicolas -->
                        <div class="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out cursor-pointer"
                            :style="getCardStyle(2)" @mouseenter="pauseRotation" @mouseleave="resumeRotation">
                            <div
                                class="w-full max-w-4xl bg-background border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                                <!-- Card Header -->
                                <div class="flex items-center justify-between p-4 border-b border-white/[0.12]">
                                    <div class="flex items-center gap-3">
                                        <svg class="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                        <span class="text-sm text-white/80 font-medium">Nicolas M.</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <div class="w-3 h-3 rounded-full bg-white/30" />
                                        <div class="w-3 h-3 rounded-full bg-white/30" />
                                        <div class="w-3 h-3 rounded-full bg-white/30" />
                                    </div>
                                </div>

                                <!-- Card Content -->
                                <div class="p-6">
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                        <!-- Left Column -->
                                        <div class="space-y-6">
                                            <!-- Domain Header -->
                                            <div class="relative">
                                                <div class="flex items-start gap-4 mb-4">
                                                    <div class="flex-1">
                                                        <div class="flex items-center gap-2 mb-2">
                                                            <h3 class="text-2xl font-bold text-white">Préparateur Mental
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Story with badges -->
                                            <div
                                                class="relative bg-gradient-to-br from-primary/15 to-yellow-400/5 border border-primary/30 rounded-3xl p-6 overflow-hidden">
                                                <div class="relative z-10 space-y-4">
                                                    <p class="text-white/90 text-base leading-relaxed">
                                                        Nico, préparateur mental, était <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">à
                                                            deux doigts d'abandonner</span> son activité, avec <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">2
                                                            enfants à charge</span> et seulement <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">2
                                                            200 € sur son compte</span>.
                                                    </p>
                                                    <p class="text-white/90 text-base leading-relaxed">
                                                        Après plusieurs <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">coachings
                                                            décevants</span>, il décide de nous faire confiance en <span
                                                            class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">juin</span>.
                                                    </p>
                                                    <div class="pt-3 border-t border-white/10">
                                                        <p class="text-white/90 text-base leading-relaxed">
                                                            En appliquant notre méthode à la lettre, il passe de <span
                                                                class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">0
                                                                à 15 000 € en 90 jours</span>, en vendant des
                                                            accompagnements premium à <span
                                                                class="px-2 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">1800
                                                                €</span>.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Right Column -->
                                        <div class="space-y-6">
                                            <NuxtImg src="/images/clients/tfc-nicolas.jpg"
                                                class="w-full h-64 mx-auto rounded-2xl object-cover border-3 border-primary/30 shadow-lg"
                                                alt="Nicolas - Préparateur mental" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
// Animation state
const currentIndex = ref(0)
const isHovering = ref(false)
let rotationInterval: NodeJS.Timeout | null = null

// Card positions configuration
const positions = [
    { translateY: -140, scale: 0.92, zIndex: 10, opacity: 0.6, blur: 2 }, // Back
    { translateY: -90, scale: 0.96, zIndex: 20, opacity: 0.8, blur: 1 },  // Middle
    { translateY: 0, scale: 1, zIndex: 30, opacity: 1, blur: 0 }          // Front
]

// Get style for each card based on current rotation
const getCardStyle = (cardIndex: number) => {
    // Calculate position index for this card
    const positionIndex = (cardIndex - currentIndex.value + 3) % 3
    const position = positions[positionIndex]

    return {
        filter: `blur(${position.blur}px)`,
        transform: `translateX(0px) translateY(${position.translateY}px) rotate(0deg) scale(${position.scale})`,
        transformOrigin: '50% 50% 0px',
        willChange: 'transform',
        opacity: isHovering.value ? Math.max(position.opacity - 0.2, 0.3) : position.opacity,
        zIndex: position.zIndex
    }
}

// Start automatic rotation
const startRotation = () => {
    if (rotationInterval) clearInterval(rotationInterval)
    rotationInterval = setInterval(() => {
        if (!isHovering.value) {
            currentIndex.value = (currentIndex.value + 1) % 3
        }
    }, 4000)
}

// Pause rotation on hover
const pauseRotation = () => {
    isHovering.value = true
}

// Resume rotation when not hovering
const resumeRotation = () => {
    isHovering.value = false
}

// Lifecycle
onMounted(() => {
    startRotation()
})

onUnmounted(() => {
    if (rotationInterval) clearInterval(rotationInterval)
})
</script>

<style scoped>
.perspective-1000 {
    perspective: 1000px;
}
</style>