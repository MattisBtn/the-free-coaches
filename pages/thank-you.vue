<template>
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
            </div>
        </section>
    </main>
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
