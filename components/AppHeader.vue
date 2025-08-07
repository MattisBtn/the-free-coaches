<template>
    <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/10">
        <nav class="flex items-center justify-between max-w-7xl mx-auto px-4 py-3 lg:px-8 lg:py-4">
            <!-- Menu Navigation - Hidden on mobile -->
            <div class="hidden md:flex items-center justify-center flex-1">
                <div
                    class="backdrop-blur-lg bg-white/5 border border-white/20 rounded-full px-8 py-3 shadow-xl flex items-center">
                    <!-- Logo -->
                    <button class="flex-shrink-0 mr-10 transition-opacity duration-200 hover:opacity-80"
                        @click="(event) => scrollToSection('#home', event)">
                        <NuxtImg src="/images/logo.png" alt="Logo" class="h-6 w-auto lg:h-12" />
                    </button>

                    <!-- Navigation Items -->
                    <ul class="flex items-center space-x-6 mx-10">
                        <li v-for="item in menuItems" :key="item.name">
                            <button :class="[
                                'relative px-3 py-2 text-base font-medium transition-all duration-300 ease-out group',
                                isActiveSection(item.href)
                                    ? 'text-white'
                                    : 'text-white/80 hover:text-white'
                            ]" @click="(event) => scrollToSection(item.href, event)">
                                {{ item.name }}

                                <!-- Elegant underline indicator -->
                                <span :class="[
                                    'absolute bottom-0 left-1/2 h-0.5 bg-white transition-all duration-300 ease-out',
                                    isActiveSection(item.href)
                                        ? 'w-full -translate-x-1/2 opacity-100'
                                        : 'w-0 -translate-x-1/2 opacity-0 group-hover:w-full group-hover:opacity-60'
                                ]" />

                                <!-- Subtle glow effect for active -->
                                <span v-if="isActiveSection(item.href)"
                                    class="absolute inset-0 bg-white/5 rounded-md -z-10 backdrop-blur-sm" />
                            </button>
                        </li>
                    </ul>

                    <!-- CTA Button -->
                    <div class="flex-shrink-0 ml-10">
                        <AppCta size="sm" />
                    </div>
                </div>
            </div>

            <!-- Mobile: Logo and Menu Button -->
            <div class="md:hidden flex items-center justify-between w-full">
                <!-- Logo -->
                <button class="flex-shrink-0 transition-opacity duration-200 hover:opacity-80"
                    @click="(event) => scrollToSection('#home', event)">
                    <NuxtImg src="/images/logo.png" alt="Logo" class="h-8 w-auto" />
                </button>

                <!-- Mobile Menu Button -->
                <button class="p-3 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                    :aria-label="isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
                    :aria-expanded="isMobileMenuOpen" @click="toggleMobileMenu">
                    <div class="w-6 h-6 flex flex-col justify-center items-center relative">
                        <span :class="[
                            'block h-0.5 w-6 force-white transition-all duration-300 ease-in-out absolute',
                            isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                        ]" />
                        <span :class="[
                            'block h-0.5 w-6 force-white transition-all duration-300 ease-in-out absolute',
                            isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                        ]" />
                        <span :class="[
                            'block h-0.5 w-6 force-white transition-all duration-300 ease-in-out absolute',
                            isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                        ]" />
                    </div>
                </button>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <Transition enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-4 scale-95" enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0 scale-100" leave-to-class="opacity-0 -translate-y-4 scale-95">
            <div v-if="isMobileMenuOpen" ref="mobileMenuRef"
                class="md:hidden mx-4 mb-4 backdrop-blur-lg bg-background/90 rounded-2xl p-6 shadow-xl border border-white/10">
                <ul class="space-y-3">
                    <li v-for="item in menuItems" :key="item.name">
                        <button :class="[
                            'block w-full text-left font-medium py-4 px-4 transition-all duration-200 rounded-xl relative text-lg',
                            isActiveSection(item.href)
                                ? 'text-white bg-white/10 border-l-3 border-primary shadow-md'
                                : 'text-white/90 hover:text-white hover:bg-white/5'
                        ]" @click="(event) => { scrollToSection(item.href, event); toggleMobileMenu(); }">
                            {{ item.name }}
                        </button>
                    </li>
                    <li class="pt-6 border-t border-white/20">
                        <AppCta variant="full-width" size="md" />
                    </li>
                </ul>
            </div>
        </Transition>
    </header>
</template>

<script lang="ts" setup>
const { menuItems, scrollToSection, isActiveSection, initializeActiveSection } = useNavigation()
const isMobileMenuOpen = ref(false)
const mobileMenuRef = ref<HTMLElement>()

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu when clicking outside
onClickOutside(mobileMenuRef, () => {
    if (isMobileMenuOpen.value) {
        isMobileMenuOpen.value = false
    }
})

onMounted(() => {
    // Initialiser l'observer pour les sections actives une seule fois
    initializeActiveSection()

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            isMobileMenuOpen.value = false
        }
    }

    window.addEventListener('resize', handleResize)

    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize)
    })
})
</script>