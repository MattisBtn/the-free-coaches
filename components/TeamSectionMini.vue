<template>
    <section class="relative py-12 overflow-hidden">
        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Header -->
            <div class="text-center mb-16">
                <SectionBadge text="L'équipe" />

                <div class="mb-8 space-y-4">
                    <h2
                        class="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[0.9] max-w-5xl mx-auto tracking-tight">
                        L'expertise qui transforme votre business
                    </h2>

                    <p class="text-md sm:text-lg md:text-xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed">
                        Une équipe d'experts dédiée à votre réussite,<br>
                        avec une méthode éprouvée et structurée.
                    </p>
                </div>

                <!-- Mobile hint -->
                <div v-if="isMobile" class="text-center mb-4">
                    <p class="text-white/40 text-xs flex items-center justify-center gap-2">
                        <Icon name="i-heroicons-hand-raised" class="w-3 h-3" />
                        Touchez pour en savoir plus
                    </p>
                </div>
            </div>

            <!-- Team Grid - Responsive Layout -->
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center lg:items-center gap-4 lg:gap-12 max-w-4xl mx-auto">

                <!-- Antoine -->
                <div :class="[
                    'group cursor-pointer rounded-2xl border transition-all duration-500 relative overflow-hidden',
                    'hover:bg-white/[0.02] lg:hover:border-primary/30 hover:shadow-lg hover:-translate-y-1',
                    'active:scale-[0.98] active:transition-transform active:duration-100',
                    isMobile ? (
                        expandedMember === 'antoine'
                            ? 'col-span-2 bg-white/[0.03] border-primary/40 p-6 shadow-xl'
                            : 'p-4 border-white/10 hover:border-primary/20 hover:shadow-md'
                    ) : 'p-4 border-white/10'
                ]" @mouseenter="!isMobile && showPopover('antoine', $event)" @mouseleave="!isMobile && hidePopover()"
                    @mousemove="!isMobile && updatePopoverPosition($event)"
                    @click="isMobile && toggleMemberExpansion('antoine')">

                    <!-- Mobile expand indicator -->
                    <div v-if="isMobile" class="absolute top-3 right-3 transition-all duration-300">
                        <Icon
                            :name="expandedMember === 'antoine' ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
                            class="w-4 h-4 text-white/40 group-hover:text-white/60" />
                    </div>

                    <div :class="[
                        'flex items-center gap-3 sm:gap-4',
                        isMobile && expandedMember === 'antoine' ? 'flex-col sm:flex-row mb-4' : 'flex-col sm:flex-row'
                    ]">
                        <div class="relative flex-shrink-0">
                            <NuxtImg src="/images/team/antoine.jpg" :class="[
                                'rounded-2xl object-cover border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300 shadow-lg group-hover:shadow-primary/10',
                                isMobile && expandedMember === 'antoine' ? 'w-20 h-20' : 'w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20'
                            ]" alt="Antoine - Fondateur" />
                            <div :class="[
                                'absolute -bottom-1 -right-1 bg-primary rounded-full border-2 border-background flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110',
                                isMobile && expandedMember === 'antoine' ? 'w-6 h-6' : 'w-5 h-5 lg:w-6 lg:h-6'
                            ]">
                                <Icon name="i-heroicons-star-solid" :class="[
                                    'text-black',
                                    isMobile && expandedMember === 'antoine' ? 'w-3 h-3' : 'w-2.5 h-2.5 lg:w-3 lg:h-3'
                                ]" />
                            </div>
                        </div>
                        <div class="text-center sm:text-left flex-1">
                            <h4
                                class="text-white font-semibold text-sm lg:text-base group-hover:text-primary transition-colors">
                                Antoine</h4>
                            <p class="text-white/60 text-xs lg:text-sm">Fondateur</p>
                            <div v-if="isMobile && expandedMember !== 'antoine'" class="mt-1">
                                <span class="text-white/30 text-[10px] font-light">Voir plus...</span>
                            </div>
                        </div>
                    </div>

                    <!-- Mobile Expanded Content -->
                    <Transition enter-active-class="transition-all duration-300 ease-out"
                        enter-from-class="opacity-0 max-h-0" enter-to-class="opacity-100 max-h-32"
                        leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 max-h-32"
                        leave-to-class="opacity-0 max-h-0">
                        <div v-if="isMobile && expandedMember === 'antoine'" class="overflow-hidden">
                            <div class="pt-4 border-t border-white/10">
                                <p class="text-white/90 text-xs font-medium mb-2">{{ teamData.antoine.role }}</p>
                                <p class="text-white/70 text-xs leading-relaxed">{{ teamData.antoine.description }}</p>
                            </div>
                        </div>
                    </Transition>
                </div>

                <!-- Alex -->
                <div :class="[
                    'group cursor-pointer rounded-2xl border transition-all duration-500 relative overflow-hidden',
                    'hover:bg-white/[0.02] lg:hover:border-blue-500/30 hover:shadow-lg hover:-translate-y-1',
                    'active:scale-[0.98] active:transition-transform active:duration-100',
                    isMobile ? (
                        expandedMember === 'alex'
                            ? 'col-span-2 bg-white/[0.03] border-blue-500/40 p-6 shadow-xl'
                            : 'p-4 border-white/10 hover:border-blue-500/20 hover:shadow-md'
                    ) : 'p-4 border-white/10'
                ]" @mouseenter="!isMobile && showPopover('alex', $event)" @mouseleave="!isMobile && hidePopover()"
                    @mousemove="!isMobile && updatePopoverPosition($event)"
                    @click="isMobile && toggleMemberExpansion('alex')">

                    <!-- Mobile expand indicator -->
                    <div v-if="isMobile" class="absolute top-3 right-3 transition-all duration-300">
                        <Icon :name="expandedMember === 'alex' ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
                            class="w-4 h-4 text-white/40 group-hover:text-white/60" />
                    </div>

                    <div :class="[
                        'flex items-center gap-3 sm:gap-4',
                        isMobile && expandedMember === 'alex' ? 'flex-col sm:flex-row mb-4' : 'flex-col sm:flex-row'
                    ]">
                        <div class="relative flex-shrink-0">
                            <NuxtImg src="/images/team/alex.jpg" :class="[
                                'rounded-2xl object-cover border-2 border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/10',
                                isMobile && expandedMember === 'alex' ? 'w-20 h-20' : 'w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20'
                            ]" alt="Alex - Expert Acquisition" />
                            <div :class="[
                                'absolute -bottom-1 -right-1 bg-blue-500 rounded-full border-2 border-background flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110',
                                isMobile && expandedMember === 'alex' ? 'w-6 h-6' : 'w-5 h-5 lg:w-6 lg:h-6'
                            ]">
                                <Icon name="i-heroicons-chart-bar-solid" :class="[
                                    'text-white',
                                    isMobile && expandedMember === 'alex' ? 'w-3 h-3' : 'w-2.5 h-2.5 lg:w-3 lg:h-3'
                                ]" />
                            </div>
                        </div>
                        <div class="text-center sm:text-left flex-1">
                            <h4
                                class="text-white font-semibold text-sm lg:text-base group-hover:text-blue-400 transition-colors">
                                Alex</h4>
                            <p class="text-white/60 text-xs lg:text-sm">Expert Acquisition</p>
                            <div v-if="isMobile && expandedMember !== 'alex'" class="mt-1">
                                <span class="text-white/30 text-[10px] font-light">Voir plus...</span>
                            </div>
                        </div>
                    </div>

                    <!-- Mobile Expanded Content -->
                    <Transition enter-active-class="transition-all duration-300 ease-out"
                        enter-from-class="opacity-0 max-h-0" enter-to-class="opacity-100 max-h-32"
                        leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 max-h-32"
                        leave-to-class="opacity-0 max-h-0">
                        <div v-if="isMobile && expandedMember === 'alex'" class="overflow-hidden">
                            <div class="pt-4 border-t border-white/10">
                                <p class="text-white/90 text-xs font-medium mb-2">{{ teamData.alex.role }}</p>
                                <p class="text-white/70 text-xs leading-relaxed">{{ teamData.alex.description }}</p>
                            </div>
                        </div>
                    </Transition>
                </div>

                <!-- Maxence -->
                <div :class="[
                    'group cursor-pointer rounded-2xl border transition-all duration-500 relative overflow-hidden',
                    'hover:bg-white/[0.02] lg:hover:border-green-500/30 hover:shadow-lg hover:-translate-y-1',
                    'active:scale-[0.98] active:transition-transform active:duration-100',
                    isMobile ? (
                        expandedMember === 'maxence'
                            ? 'col-span-2 bg-white/[0.03] border-green-500/40 p-6 shadow-xl'
                            : 'p-4 border-white/10 hover:border-green-500/20 hover:shadow-md'
                    ) : 'p-4 border-white/10'
                ]" @mouseenter="!isMobile && showPopover('maxence', $event)" @mouseleave="!isMobile && hidePopover()"
                    @mousemove="!isMobile && updatePopoverPosition($event)"
                    @click="isMobile && toggleMemberExpansion('maxence')">

                    <!-- Mobile expand indicator -->
                    <div v-if="isMobile" class="absolute top-3 right-3 transition-all duration-300">
                        <Icon
                            :name="expandedMember === 'maxence' ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
                            class="w-4 h-4 text-white/40 group-hover:text-white/60" />
                    </div>

                    <div :class="[
                        'flex items-center gap-3 sm:gap-4',
                        isMobile && expandedMember === 'maxence' ? 'flex-col sm:flex-row mb-4' : 'flex-col sm:flex-row'
                    ]">
                        <div class="relative flex-shrink-0">
                            <NuxtImg src="/images/team/maxence.jpg" :class="[
                                'rounded-2xl object-cover border-2 border-green-500/30 group-hover:border-green-500/60 transition-all duration-300 shadow-lg group-hover:shadow-green-500/10',
                                isMobile && expandedMember === 'maxence' ? 'w-20 h-20' : 'w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20'
                            ]" alt="Maxence - Succès Client" />
                            <div :class="[
                                'absolute -bottom-1 -right-1 bg-green-500 rounded-full border-2 border-background flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110',
                                isMobile && expandedMember === 'maxence' ? 'w-6 h-6' : 'w-5 h-5 lg:w-6 lg:h-6'
                            ]">
                                <Icon name="i-heroicons-user-group-solid" :class="[
                                    'text-white',
                                    isMobile && expandedMember === 'maxence' ? 'w-3 h-3' : 'w-2.5 h-2.5 lg:w-3 lg:h-3'
                                ]" />
                            </div>
                        </div>
                        <div class="text-center sm:text-left flex-1">
                            <h4
                                class="text-white font-semibold text-sm lg:text-base group-hover:text-green-400 transition-colors">
                                Maxence</h4>
                            <p class="text-white/60 text-xs lg:text-sm">Succès Client</p>
                            <div v-if="isMobile && expandedMember !== 'maxence'" class="mt-1">
                                <span class="text-white/30 text-[10px] font-light">Voir plus...</span>
                            </div>
                        </div>
                    </div>

                    <!-- Mobile Expanded Content -->
                    <Transition enter-active-class="transition-all duration-300 ease-out"
                        enter-from-class="opacity-0 max-h-0" enter-to-class="opacity-100 max-h-32"
                        leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 max-h-32"
                        leave-to-class="opacity-0 max-h-0">
                        <div v-if="isMobile && expandedMember === 'maxence'" class="overflow-hidden">
                            <div class="pt-4 border-t border-white/10">
                                <p class="text-white/90 text-xs font-medium mb-2">{{ teamData.maxence.role }}</p>
                                <p class="text-white/70 text-xs leading-relaxed">{{ teamData.maxence.description }}</p>
                            </div>
                        </div>
                    </Transition>
                </div>

                <!-- Camille -->
                <div :class="[
                    'group cursor-pointer rounded-2xl border transition-all duration-500 relative overflow-hidden',
                    'hover:bg-white/[0.02] lg:hover:border-purple-500/30 hover:shadow-lg hover:-translate-y-1',
                    'active:scale-[0.98] active:transition-transform active:duration-100',
                    isMobile ? (
                        expandedMember === 'camille'
                            ? 'col-span-2 bg-white/[0.03] border-purple-500/40 p-6 shadow-xl'
                            : 'p-4 border-white/10 hover:border-purple-500/20 hover:shadow-md'
                    ) : 'p-4 border-white/10'
                ]" @mouseenter="!isMobile && showPopover('camille', $event)" @mouseleave="!isMobile && hidePopover()"
                    @mousemove="!isMobile && updatePopoverPosition($event)"
                    @click="isMobile && toggleMemberExpansion('camille')">

                    <!-- Mobile expand indicator -->
                    <div v-if="isMobile" class="absolute top-3 right-3 transition-all duration-300">
                        <Icon
                            :name="expandedMember === 'camille' ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
                            class="w-4 h-4 text-white/40 group-hover:text-white/60" />
                    </div>

                    <div :class="[
                        'flex items-center gap-3 sm:gap-4',
                        isMobile && expandedMember === 'camille' ? 'flex-col sm:flex-row mb-4' : 'flex-col sm:flex-row'
                    ]">
                        <div class="relative flex-shrink-0">
                            <NuxtImg src="/images/team/camille.jpg" :class="[
                                'rounded-2xl object-cover border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/10',
                                isMobile && expandedMember === 'camille' ? 'w-20 h-20' : 'w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20'
                            ]" alt="Camille - Relations Client" />
                            <div :class="[
                                'absolute -bottom-1 -right-1 bg-purple-500 rounded-full border-2 border-background flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110',
                                isMobile && expandedMember === 'camille' ? 'w-6 h-6' : 'w-5 h-5 lg:w-6 lg:h-6'
                            ]">
                                <Icon name="i-heroicons-heart-solid" :class="[
                                    'text-white',
                                    isMobile && expandedMember === 'camille' ? 'w-3 h-3' : 'w-2.5 h-2.5 lg:w-3 lg:h-3'
                                ]" />
                            </div>
                        </div>
                        <div class="text-center sm:text-left flex-1">
                            <h4
                                class="text-white font-semibold text-sm lg:text-base group-hover:text-purple-400 transition-colors">
                                Camille</h4>
                            <p class="text-white/60 text-xs lg:text-sm">Relations Client</p>
                            <div v-if="isMobile && expandedMember !== 'camille'" class="mt-1">
                                <span class="text-white/30 text-[10px] font-light">Voir plus...</span>
                            </div>
                        </div>
                    </div>

                    <!-- Mobile Expanded Content -->
                    <Transition enter-active-class="transition-all duration-300 ease-out"
                        enter-from-class="opacity-0 max-h-0" enter-to-class="opacity-100 max-h-32"
                        leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 max-h-32"
                        leave-to-class="opacity-0 max-h-0">
                        <div v-if="isMobile && expandedMember === 'camille'" class="overflow-hidden">
                            <div class="pt-4 border-t border-white/10">
                                <p class="text-white/90 text-xs font-medium mb-2">{{ teamData.camille.role }}</p>
                                <p class="text-white/70 text-xs leading-relaxed">{{ teamData.camille.description }}</p>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>

            <!-- Stats -->
            <div class="text-center mt-8">
                <p class="text-white/60 text-sm lg:text-base">
                    <span class="text-primary font-semibold">+500 coachs</span> accompagnés vers la réussite
                </p>
            </div>
        </div>

        <!-- Popover - Desktop Only -->
        <Teleport to="body">
            <Transition enter-active-class="transition-all duration-200 ease-out"
                enter-from-class="opacity-0 scale-95 translate-y-2" enter-to-class="opacity-100 scale-100 translate-y-0"
                leave-active-class="transition-all duration-150 ease-in"
                leave-from-class="opacity-100 scale-100 translate-y-0"
                leave-to-class="opacity-0 scale-95 translate-y-2">
                <div v-if="popover.visible && !isMobile" :style="{ left: popover.x + 'px', top: popover.y + 'px' }"
                    class="fixed z-[100] pointer-events-none">
                    <div
                        class="relative max-w-xs p-6 backdrop-blur-xl bg-background/95 border border-white/20 rounded-2xl shadow-2xl">
                        <!-- Arrow -->
                        <div
                            class="absolute -top-2 left-6 w-4 h-4 bg-background/95 border-l border-t border-white/20 rotate-45 backdrop-blur-xl" />

                        <!-- Content -->
                        <div class="relative">
                            <div class="flex items-center gap-3 mb-3">
                                <div class="w-3 h-3 rounded-full" :class="getPopoverAccentColor()" />
                                <h4 class="text-white font-semibold text-sm">{{ popover.data?.name }}</h4>
                            </div>
                            <p class="text-white/90 text-xs font-medium mb-2">{{ popover.data?.role }}</p>
                            <p class="text-white/70 text-xs leading-relaxed">{{ popover.data?.description }}</p>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </section>
</template>

<script lang="ts" setup>
// Enhanced team section with member popover tooltips

interface TeamMember {
    name: string;
    role: string;
    description: string;
    color: string;
}

interface PopoverState {
    visible: boolean;
    x: number;
    y: number;
    member: string;
    data: TeamMember | null;
}

const popover = ref<PopoverState>({
    visible: false,
    x: 0,
    y: 0,
    member: '',
    data: null
})

const isMobile = ref(false)
const expandedMember = ref<string | null>(null)

const teamData: Record<string, TeamMember> = {
    antoine: {
        name: "Antoine",
        role: "Fondateur de TheFreeCoach",
        description: "Ancien sportif de haut niveau, Antoine a bâti son activité de coaching de A à Z. Il met aujourd'hui toute son expérience au service des coachs qui veulent franchir le cap du digital.",
        color: "bg-primary"
    },
    alex: {
        name: "Alex",
        role: "Expert Acquisition & Marketing",
        description: "Petit frère d'Antoine, Alex pilote toute la stratégie marketing pour que chaque coach ait un système d'acquisition clair, rentable et automatisé.",
        color: "bg-blue-500"
    },
    maxence: {
        name: "Maxence",
        role: "Responsable Succès Client",
        description: "L'artisan du résultat client. Il suit personnellement chaque coach dans sa transition vers le digital et veille à ce que chaque étape soit adaptée à son profil.",
        color: "bg-green-500"
    },
    camille: {
        name: "Camille",
        role: "Responsable Relations Clients",
        description: "La voix douce mais ferme de la communauté TheFreeCoach. Elle s'assure que chaque coach reçoive un suivi humain, réactif et structuré.",
        color: "bg-purple-500"
    }
}

function showPopover(member: string, event: MouseEvent) {
    if (isMobile.value) return

    popover.value.member = member
    popover.value.data = teamData[member] || null
    popover.value.visible = true
    updatePopoverPosition(event)
}

function hidePopover() {
    popover.value.visible = false
}

function updatePopoverPosition(event: MouseEvent) {
    if (!popover.value.visible || isMobile.value) return

    // Offset pour éviter que le popover soit sous le curseur
    popover.value.x = event.clientX + 20
    popover.value.y = event.clientY - 60
}

function getPopoverAccentColor() {
    return popover.value.data?.color || 'bg-primary'
}

function toggleMemberExpansion(member: string) {
    if (expandedMember.value === member) {
        expandedMember.value = null
    } else {
        expandedMember.value = member
    }
}

onMounted(() => {
    // Détecter si on est sur mobile
    const checkMobile = () => {
        isMobile.value = window.innerWidth < 1024
        // Fermer l'expansion si on passe en desktop
        if (!isMobile.value) {
            expandedMember.value = null
        }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    onBeforeUnmount(() => {
        window.removeEventListener('resize', checkMobile)
    })
})
</script>