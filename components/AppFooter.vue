<template>
    <footer class="relative py-16 lg:py-24 overflow-hidden border-t border-white/[0.08]">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
                <!-- Logo and Description -->
                <div class="lg:col-span-1">
                    <div class="mb-6">
                        <NuxtImg src="/images/logo.png" alt="Logo" class="h-10 w-auto" />
                    </div>
                    <p class="text-white/70 leading-relaxed mb-8 max-w-md">
                        {{ appConfig.company.brand.description }}
                    </p>
                    <div class="flex items-center gap-4">
                        <AppCta text="Commencer maintenant" size="sm" @click="handleCtaClick" />
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="lg:col-span-1">
                    <h3 class="text-xl font-bold text-white mb-6">Navigation</h3>
                    <ul class="space-y-4">
                        <li v-for="item in menuItems" :key="item.name">
                            <a :href="item.href"
                                class="text-white/70 hover:text-white transition-colors duration-200 flex items-center group"
                                @click="(event) => scrollToSection(item.href, event)">
                                <span>{{ item.name }}</span>
                                <Icon name="i-heroicons-arrow-right"
                                    class="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="lg:col-span-1">
                    <h3 class="text-xl font-bold text-white mb-6">Contact</h3>
                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center">
                                <Icon name="i-heroicons-envelope" class="w-4 h-4 text-primary" />
                            </div>
                            <span class="text-white/70">{{ appConfig.company.contact.email }}</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div
                                class="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center">
                                <Icon name="i-heroicons-phone" class="w-4 h-4 text-primary" />
                            </div>
                            <span class="text-white/70">{{ appConfig.company.contact.phone }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="border-t border-white/[0.08] pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                    <!-- Copyright -->
                    <div class="text-white/60 text-sm">
                        © {{ currentYear }} The Free Coaches. Tous droits réservés.
                    </div>

                    <!-- Legal Links -->
                    <div class="flex items-center gap-6">
                        <NuxtLink to="/mentions-legales"
                            class="text-white/60 hover:text-white text-sm transition-colors duration-200">
                            Mentions légales
                        </NuxtLink>
                        <NuxtLink to="/cgv"
                            class="text-white/60 hover:text-white text-sm transition-colors duration-200">
                            CGV
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
const { menuItems, scrollToSection } = useNavigation()
const appConfig = useAppConfig()

const currentYear = new Date().getFullYear()

const handleCtaClick = () => {
    console.log('Footer CTA clicked')
}
</script>