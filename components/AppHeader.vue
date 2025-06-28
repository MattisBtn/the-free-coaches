<template>
    <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-transparent/5 ">
        <nav class="flex items-center justify-between max-w-7xl mx-auto px-4 py-4 lg:px-8">
            <!-- Logo -->
            <div class="flex-shrink-0">
                <NuxtImg src="/images/logo.png" alt="Logo" class="h-8 w-auto sm:h-10 lg:h-16" />
            </div>

            <!-- Menu Navigation - Hidden on mobile -->
            <div class="hidden md:flex items-center justify-center flex-1">
                <div class="border border-white/20 rounded-full px-8 py-3 shadow-xl">
                    <ul class="flex items-center space-x-8">
                        <li v-for="item in menuItems" :key="item.name">
                            <button
                                class="text-lg font-medium text-white/90 hover:text-white transition-colors duration-200 hover:scale-105 transform"
                                @click="(event) => scrollToSection(item.href, event)">
                                {{ item.name }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- CTA Button -->
            <div class="flex items-center space-x-4">
                <AppCta size="sm" class="hidden sm:flex" @click="handleCtaClick" />

                <!-- Mobile Menu Button -->
                <button class="md:hidden p-2 text-white hover:bg-white/10 transition-all duration-300"
                    :aria-label="isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
                    :aria-expanded="isMobileMenuOpen" @click="toggleMobileMenu">
                    <div class="w-6 h-6 flex flex-col justify-center items-center relative">
                        <span :class="[
                            'block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out absolute',
                            isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                        ]" />
                        <span :class="[
                            'block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out absolute',
                            isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                        ]" />
                        <span :class="[
                            'block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out absolute',
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
            <div v-if="isMobileMenuOpen"
                class="md:hidden mt-4 mx-4 bg-background rounded-2xl p-6 shadow-xl border border-white/10">
                <ul class="space-y-4">
                    <li v-for="item in menuItems" :key="item.name">
                        <button
                            class="block text-white/90 hover:text-white font-medium py-2 transition-colors duration-200 w-full text-left"
                            @click="(event) => { scrollToSection(item.href, event); toggleMobileMenu(); }">
                            {{ item.name }}
                        </button>
                    </li>
                    <li class="pt-4 border-t border-white/20">
                        <AppCta variant="full-width" size="sm"
                            @click="() => { handleCtaClick(); toggleMobileMenu(); }" />
                    </li>
                </ul>
            </div>
        </Transition>
    </header>
</template>

<script lang="ts" setup>
const { menuItems, scrollToSection } = useNavigation()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleCtaClick = () => {
    console.log('CTA clicked')
}

onMounted(() => {
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