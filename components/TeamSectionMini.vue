<template>
    <section class="relative py-12 overflow-hidden">
        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Header -->
            <div class="text-center mb-16">
                <div
                    class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm mb-8">
                    <div class="relative">
                        <div class="w-3 h-3 bg-primary/60 rounded-full" />
                        <div class="absolute inset-0 w-3 h-3 bg-primary/20 rounded-full" />
                    </div>
                    <span class="text-base font-medium text-white/70 tracking-wide">L'équipe</span>
                </div>

                <div class="mb-8 space-y-4">
                    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[0.9] max-w-5xl mx-auto tracking-tight"
                        style="background-image: linear-gradient(0deg, rgb(153, 153, 153) 0%, rgb(255, 255, 255) 91.7261%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                        L'expertise qui transforme votre business
                    </h2>

                    <p class="text-md sm:text-lg md:text-xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed">
                        Une équipe d'experts dédiée à votre réussite,<br>
                        avec une méthode éprouvée et structurée.
                    </p>
                </div>
            </div>

            <!-- Team Grid - Responsive Layout -->
            <div
                class="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:justify-center lg:items-center gap-6 lg:gap-12 max-w-4xl mx-auto">

                <!-- Antoine -->
                <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 group cursor-pointer p-4 rounded-2xl hover:bg-white/[0.02] transition-all duration-300"
                    @mouseenter="showPopover('antoine', $event)" @mouseleave="hidePopover"
                    @mousemove="updatePopoverPosition">
                    <div class="relative flex-shrink-0">
                        <NuxtImg src="/images/team/antoine.jpg"
                            class="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl object-cover border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300 shadow-lg"
                            alt="Antoine - Fondateur" />
                        <div
                            class="absolute -bottom-1 -right-1 w-5 h-5 lg:w-6 lg:h-6 bg-primary rounded-full border-2 border-background flex items-center justify-center shadow-lg">
                            <Icon name="i-heroicons-star-solid" class="w-2.5 h-2.5 lg:w-3 lg:h-3 text-black" />
                        </div>
                    </div>
                    <div class="text-center sm:text-left">
                        <h4
                            class="text-white font-semibold text-sm lg:text-base group-hover:text-primary transition-colors">
                            Antoine</h4>
                        <p class="text-white/60 text-xs lg:text-sm">Fondateur</p>
                    </div>
                </div>

                <!-- Alex -->
                <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 group cursor-pointer p-4 rounded-2xl hover:bg-white/[0.02] transition-all duration-300"
                    @mouseenter="showPopover('alex', $event)" @mouseleave="hidePopover"
                    @mousemove="updatePopoverPosition">
                    <div class="relative flex-shrink-0">
                        <NuxtImg src="/images/team/alex.jpg"
                            class="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl object-cover border-2 border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-300 shadow-lg"
                            alt="Alex - Expert Acquisition" />
                        <div
                            class="absolute -bottom-1 -right-1 w-5 h-5 lg:w-6 lg:h-6 bg-blue-500 rounded-full border-2 border-background flex items-center justify-center shadow-lg">
                            <Icon name="i-heroicons-chart-bar-solid" class="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" />
                        </div>
                    </div>
                    <div class="text-center sm:text-left">
                        <h4
                            class="text-white font-semibold text-sm lg:text-base group-hover:text-blue-400 transition-colors">
                            Alex</h4>
                        <p class="text-white/60 text-xs lg:text-sm">Expert Acquisition</p>
                    </div>
                </div>

                <!-- Maxence -->
                <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 group cursor-pointer p-4 rounded-2xl hover:bg-white/[0.02] transition-all duration-300"
                    @mouseenter="showPopover('maxence', $event)" @mouseleave="hidePopover"
                    @mousemove="updatePopoverPosition">
                    <div class="relative flex-shrink-0">
                        <NuxtImg src="/images/team/maxence.jpg"
                            class="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl object-cover border-2 border-green-500/30 group-hover:border-green-500/60 transition-all duration-300 shadow-lg"
                            alt="Maxence - Succès Client" />
                        <div
                            class="absolute -bottom-1 -right-1 w-5 h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center shadow-lg">
                            <Icon name="i-heroicons-user-group-solid" class="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" />
                        </div>
                    </div>
                    <div class="text-center sm:text-left">
                        <h4
                            class="text-white font-semibold text-sm lg:text-base group-hover:text-green-400 transition-colors">
                            Maxence</h4>
                        <p class="text-white/60 text-xs lg:text-sm">Succès Client</p>
                    </div>
                </div>

                <!-- Camille -->
                <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 group cursor-pointer p-4 rounded-2xl hover:bg-white/[0.02] transition-all duration-300"
                    @mouseenter="showPopover('camille', $event)" @mouseleave="hidePopover"
                    @mousemove="updatePopoverPosition">
                    <div class="relative flex-shrink-0">
                        <NuxtImg src="/images/team/camille.jpg"
                            class="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl object-cover border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300 shadow-lg"
                            alt="Camille - Relations Client" />
                        <div
                            class="absolute -bottom-1 -right-1 w-5 h-5 lg:w-6 lg:h-6 bg-purple-500 rounded-full border-2 border-background flex items-center justify-center shadow-lg">
                            <Icon name="i-heroicons-heart-solid" class="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" />
                        </div>
                    </div>
                    <div class="text-center sm:text-left">
                        <h4
                            class="text-white font-semibold text-sm lg:text-base group-hover:text-purple-400 transition-colors">
                            Camille</h4>
                        <p class="text-white/60 text-xs lg:text-sm">Relations Client</p>
                    </div>
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

onMounted(() => {
    // Détecter si on est sur mobile
    const checkMobile = () => {
        isMobile.value = window.innerWidth < 1024
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    onBeforeUnmount(() => {
        window.removeEventListener('resize', checkMobile)
    })
})
</script>