<template>
    <div class="min-h-screen bg-background">
        <!-- Header -->
        <AppHeader />

        <!-- Main Content -->
        <main class="mt-24 lg:mt-64">
            <section class="relative py-24 overflow-hidden">
                <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <!-- Success Icon -->
                    <div class="mb-8">
                        <div
                            class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                            <Icon name="i-heroicons-check-circle" class="w-10 h-10 text-primary" />
                        </div>
                    </div>

                    <!-- Main Content -->
                    <div class="space-y-6 mb-12">
                        <h1
                            class="gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tight">
                            Merci pour votre réservation !
                        </h1>

                        <p
                            class="text-lg sm:text-xl md:text-2xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
                            Votre appel a été confirmé. Nous sommes impatients de découvrir votre projet et de vous
                            aider à transformer votre coaching en business rentable.
                        </p>
                    </div>

                    <!-- Next Steps Card -->
                    <div class="max-w-2xl mx-auto mb-12">
                        <div class="border border-white/[0.08] rounded-3xl p-8 backdrop-blur-sm bg-white/[0.02]">
                            <div class="space-y-6">
                                <h2 class="text-xl sm:text-2xl font-bold text-white">
                                    Prochaines étapes
                                </h2>

                                <div class="space-y-4">
                                    <div class="flex items-start gap-4">
                                        <div
                                            class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span class="text-primary font-bold text-sm">1</span>
                                        </div>
                                        <div class="text-left">
                                            <h3 class="text-white font-semibold mb-1">Email de confirmation</h3>
                                            <p class="text-white/70 text-sm">Vous recevrez un email avec le lien de
                                                l'appel et les détails de la conversation.</p>
                                        </div>
                                    </div>

                                    <div class="flex items-start gap-4">
                                        <div
                                            class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span class="text-primary font-bold text-sm">2</span>
                                        </div>
                                        <div class="text-left">
                                            <h3 class="text-white font-semibold mb-1">Préparation de l'appel</h3>
                                            <p class="text-white/70 text-sm">Réfléchissez à vos objectifs actuels et aux
                                                défis que vous rencontrez dans votre activité.</p>
                                        </div>
                                    </div>

                                    <div class="flex items-start gap-4">
                                        <div
                                            class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span class="text-primary font-bold text-sm">3</span>
                                        </div>
                                        <div class="text-left">
                                            <h3 class="text-white font-semibold mb-1">L'appel stratégique</h3>
                                            <p class="text-white/70 text-sm">Nous analyserons ensemble votre situation
                                                et vous proposerons un plan d'action personnalisé.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Additional Resources -->
                    <div class="space-y-8">
                        <h2 class="text-xl sm:text-2xl font-bold text-white">
                            En attendant votre appel...
                        </h2>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <!-- Resource Card 1 -->
                            <div
                                class="border border-white/[0.08] rounded-2xl p-6 backdrop-blur-sm bg-white/[0.02] hover:border-white/[0.15] transition-all duration-300">
                                <div class="flex items-center gap-4 mb-4">
                                    <div
                                        class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                                        <Icon name="i-heroicons-play-circle" class="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 class="text-white font-semibold">Vidéo de présentation</h3>
                                        <p class="text-white/60 text-sm">Découvrez la méthode Coaching 2.0</p>
                                    </div>
                                </div>
                                <p class="text-white/70 text-sm leading-relaxed">
                                    Visionnez notre vidéo de présentation pour mieux comprendre notre approche et nos
                                    résultats.
                                </p>
                            </div>

                            <!-- Resource Card 2 -->
                            <div
                                class="border border-white/[0.08] rounded-2xl p-6 backdrop-blur-sm bg-white/[0.02] hover:border-white/[0.15] transition-all duration-300">
                                <div class="flex items-center gap-4 mb-4">
                                    <div
                                        class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                                        <Icon name="i-heroicons-users" class="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 class="text-white font-semibold">Témoignages clients</h3>
                                        <p class="text-white/60 text-sm">Histoires de réussite</p>
                                    </div>
                                </div>
                                <p class="text-white/70 text-sm leading-relaxed">
                                    Découvrez comment nos coachs ont transformé leur activité et généré des revenus
                                    stables.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Info -->
                    <div class="mt-16 pt-8 border-t border-white/[0.08]">
                        <p class="text-white/60 text-sm">
                            Questions ? Contactez-nous à
                            <a href="mailto:contact@thefreecoaches.com"
                                class="text-primary hover:text-primary/80 transition-colors">
                                contact@thefreecoaches.com
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <AppFooter />
    </div>
</template>

<script lang="ts" setup>
// SEO Meta
useSeoMeta({
    title: 'Merci pour votre réservation - TheFreeCoaches',
    description: 'Votre appel a été confirmé. Nous sommes impatients de vous aider à transformer votre coaching en business rentable.',
    ogTitle: 'Merci pour votre réservation - TheFreeCoaches',
    ogDescription: 'Votre appel a été confirmé. Nous sommes impatients de vous aider à transformer votre coaching en business rentable.',
})

// Tracking GTM - Conversion Calendly
const gtm = useGtm()

onMounted(() => {
    if (gtm) {
        gtm.trackEvent({
            event: 'calendly_conversion',
            category: 'conversion',
            action: 'booking_confirmed',
            label: 'thank_you_page',
            value: 1,
            custom_parameters: {
                page_type: 'thank_you',
                conversion_source: 'calendly',
                user_journey: 'booking_confirmation'
            }
        })
    }
})
</script>
