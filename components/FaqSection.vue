<template>
    <section class="relative py-24 overflow-hidden">
        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-20">
                <SectionBadge text="Questions fréquentes" />

                <div class="mb-12 space-y-6">
                    <h2
                        class="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[0.9] max-w-5xl mx-auto tracking-tight">
                        Les réponses à vos questions
                    </h2>

                    <p
                        class="text-md sm:text-lg md:text-xl lg:text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed px-2 md:px-0">
                        Découvrez tout ce que vous devez savoir sur<br>
                        la méthode Coaching 2.0
                    </p>
                </div>
            </div>

            <!-- FAQ Layout avec CTA Card -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                <!-- CTA Card - Desktop à gauche, Mobile en bas -->
                <div class="order-2 lg:order-1 lg:col-span-1">
                    <div class="sticky top-8">
                        <div
                            class="border border-white/[0.08] rounded-2xl p-6 lg:p-8 backdrop-blur-sm bg-white/[0.02] hover:border-white/[0.15] transition-all duration-300">
                            <div class="text-center space-y-6">
                                <!-- Icon -->
                                <div
                                    class="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                                    <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>

                                <!-- Content -->
                                <div class="space-y-4">
                                    <h3 class="text-lg lg:text-xl font-bold text-white">
                                        D'autres questions ?
                                    </h3>
                                    <p class="text-sm lg:text-base text-white/70 font-light leading-relaxed">
                                        Parlons-en directement lors d'un appel personnalisé et gratuit
                                    </p>
                                </div>

                                <!-- CTA -->
                                <AppCta text="Réserver un appel" size="sm" class="w-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- FAQ Accordion - Desktop à droite, Mobile en haut -->
                <div class="order-1 lg:order-2 lg:col-span-2">
                    <div class="space-y-4">
                        <div v-for="(faq, index) in faqs" :key="index"
                            class="border border-white/[0.08] rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-white/[0.15]">
                            <button
                                class="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
                                :class="{ 'border-b border-white/[0.08]': openFaqs.includes(index) }"
                                @click="toggleFaq(index)">
                                <h3
                                    class="text-base sm:text-lg md:text-xl font-semibold text-white pr-4 leading-relaxed">
                                    {{
                                        faq.question }}</h3>
                                <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                    <svg class="w-5 h-5 text-primary transition-transform duration-300 ease-out"
                                        :class="{ 'rotate-45': openFaqs.includes(index) }" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                            </button>

                            <Transition enter-active-class="transition-all duration-300 ease-out"
                                enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-96 opacity-100"
                                leave-active-class="transition-all duration-300 ease-out"
                                leave-from-class="max-h-96 opacity-100" leave-to-class="max-h-0 opacity-0">
                                <div v-if="openFaqs.includes(index)" class="overflow-hidden">
                                    <div class="px-4 sm:px-6 py-4 sm:py-5 bg-white/[0.01]">
                                        <div class="prose prose-invert max-w-none">
                                            <div v-if="faq.highlight" class="mb-4">
                                                <p
                                                    class="text-base sm:text-lg md:text-xl font-semibold text-primary mb-3">
                                                    {{
                                                        faq.highlight }}</p>
                                            </div>
                                            <div class="space-y-3">
                                                <p v-for="(paragraph, pIndex) in faq.answer" :key="pIndex"
                                                    class="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed"
                                                    v-html="paragraph" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
// Reactive data - ouvre la première question par défaut
const openFaqs = ref<number[]>([0])

// FAQ data extracted from the documentation
const faqs = [
    {
        question: "Est-ce que ça marche si je pars de zéro ?",
        highlight: "Oui, c'est même pensé pour ça.",
        answer: [
            "La majorité des coachs qu'on accompagne n'avaient ni audience, ni base clients, ni expérience en ligne au départ",
            "Le système repose sur un tunnel d'activation simple qui fonctionne même avec 300 abonnés ou moins",
            "Tout est guidé pas à pas, avec un focus laser sur l'essentiel : attirer, convertir, encaisser",
            "Tu n'as pas besoin d'être connu, juste d'avoir les bonnes fondations"
        ]
    },
    {
        question: "Est-ce que je dois créer du contenu tous les jours ?",
        highlight: "Non, et c'est justement là toute la différence.",
        answer: [
            "Créer du contenu quotidien, c'est épuisant — et ça ne garantit aucune vente",
            "Dans Coaching 2.0, on t'apprend à créer du contenu stratégique et impactant, même si tu postes 2 fois par semaine",
            "Le système chauffe tes prospects via un tunnel automatisé, pas via un flux infini de posts",
            '<span class="text-primary font-semibold">Résultat :</span> plus de temps, plus d\'efficacité, plus de ventes'
        ]
    },
    {
        question: "Je suis nul en technique, je peux quand même réussir ?",
        highlight: "Absolument.",
        answer: [
            "Le système est conçu pour être mis en place sans compétences techniques avancées",
            "Tu auras accès à des modèles prêts à l'emploi, des tutos détaillés, et un accompagnement personnalisé",
            "On a des coachs de 40, 50 ans qui partaient de zéro… et qui génèrent maintenant plusieurs milliers d'euros/mois",
            "L'équipe technique s'occupe du lourd, tu te concentres sur ton expertise"
        ]
    },
    {
        question: "Combien de temps faut-il pour avoir des résultats ?",
        highlight: "Tout dépend de ton implication, mais les premiers résultats arrivent vite.",
        answer: [
            "Certains signent leur premier client en 7 jours, d'autres en 3-4 semaines",
            "Ce n'est pas de la magie : ça reste du travail intelligent et structuré",
            "Mais tout est optimisé pour te faire gagner du temps et générer tes premiers revenus rapidement",
            "Ensuite, tu scales progressivement vers 5, 10, 15k€/mois et plus"
        ]
    },
    {
        question: "Est-ce que ça remplace complètement le présentiel ?",
        highlight: "Pas forcément, c'est toi qui choisis.",
        answer: [
            "Certains coachs arrêtent complètement le terrain, d'autres gardent quelques séances par plaisir",
            "L'idée : t'offrir une liberté totale avec plus de clients qualifiés et moins de contraintes horaires",
            "Fini la dépendance aux déplacements, aux annulations de dernière minute, aux agendas à trous",
            "Tu gardes ce qui te plaît, tu délègues ou automatises le reste"
        ]
    },
    {
        question: "Je suis déjà en ligne, mais je galère à vendre… ça peut m'aider ?",
        highlight: "Oui, c'est souvent un problème de structure, pas d'effort.",
        answer: [
            "Tu fais peut-être déjà du contenu, mais sans tunnel ni stratégie de conversion claire",
            "Coaching 2.0 t'aide à restructurer ton offre, ton message et ton système pour mieux convertir",
            "On voit régulièrement des coachs déjà \"en ligne\" passer de 1-2 ventes/mois à 10-15, juste en ayant le bon process",
            "Le problème n'est jamais le manque de travail, c'est le manque de méthode"
        ]
    },
    {
        question: "Est-ce que c'est une formation ou un vrai accompagnement ?",
        highlight: "C'est un accompagnement complet.",
        answer: [
            '<span class="text-primary font-semibold">Tu ne vas pas juste recevoir des vidéos :</span>',
            "Tu es suivi, guidé, corrigé, challengé à chaque étape",
            "Tu as un espace membre, un groupe privé, un support humain réactif, et des appels de validation",
            "L'équipe met en place ton système avec toi (pas à ta place, mais avec toi)",
            "Le but n'est pas d'apprendre pour apprendre. C'est de mettre en place et d'encaisser."
        ]
    }
]

// Methods
const toggleFaq = (index: number) => {
    const currentIndex = openFaqs.value.indexOf(index)
    if (currentIndex === -1) {
        openFaqs.value.push(index)
    } else {
        openFaqs.value.splice(currentIndex, 1)
    }
}
</script>
