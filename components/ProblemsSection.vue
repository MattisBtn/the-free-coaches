<template>
    <section class="relative lg:py-24 overflow-hidden" id="problems">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-20 md:mb-32 lg:mb-40">
                <SectionBadge text="La réalité brutale" />

                <div class="mb-12 space-y-6">
                    <h2
                        class="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[0.9] max-w-5xl mx-auto tracking-tight">
                        90% des coachs abandonnent dans les 2 premières années
                    </h2>

                    <p
                        class="text-md sm:text-lg md:text-xl lg:text-xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed px-2 md:px-0">
                        Ce n'est pas un problème de talent.<br>
                        C'est un problème de structure.
                    </p>
                </div>
            </div>

            <!-- Dashboards Layout -->
            <div class="space-y-6 lg:space-y-4 max-w-4xl mx-auto">
                <!-- Top Row: Two cards side by side -->
                <div class="flex flex-col lg:flex-row lg:gap-0.5 gap-6 justify-center items-center">
                    <!-- Dashboard 1: Revenue Analytics -->
                    <div class="relative h-[400px] lg:h-[450px] w-full overflow-hidden ">
                        <div
                            class="relative bg-transparent border border-white/[0.08] rounded-3xl overflow-hidden h-full">
                            <!-- Gradient Overlay using Tailwind -->
                            <div
                                class="z-10 absolute inset-0 bg-linear-to-b from-transparent from-0% via-background/90 via-70% to-background/95 to-90% pointer-events-none" />

                            <!-- Left to Right Gradient Overlay -->
                            <div
                                class="z-10 absolute inset-0 bg-gradient-to-r from-transparent from-0% via-transparent via-20% to-background/90 to-100% pointer-events-none" />


                            <!-- Dashboard Area (60% sur mobile, 70% sur desktop) -->
                            <div class="relative h-[60%] lg:h-[70%]">
                                <!-- Dashboard Container -->
                                <div class="p-3 sm:p-4 lg:p-6 h-full">
                                    <div
                                        class="bg-gray-950/90 rounded-xl p-2 sm:p-3 lg:p-4 border border-white/[0.03] backdrop-blur-xl h-full">
                                        <!-- Header -->
                                        <div class="flex items-center justify-between mb-3 lg:mb-6">
                                            <div class="flex items-center gap-2 lg:gap-3">
                                                <div
                                                    class="w-5 h-5 lg:w-6 lg:h-6 rounded-lg bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center">
                                                    <span class="text-black text-xs font-bold">€</span>
                                                </div>
                                                <span class="text-white/80 font-semibold text-xs lg:text-sm">Revenue
                                                    Analytics</span>
                                            </div>
                                            <div class="flex items-center gap-1 lg:gap-2">
                                                <div class="w-1.5 h-1.5 bg-red-500 rounded-full" />
                                                <span class="text-red-400 text-xs font-medium">UNSTABLE</span>
                                            </div>
                                        </div>

                                        <!-- Revenue Chart Area -->
                                        <div class="mb-3 lg:mb-6">
                                            <div class="flex items-center justify-between mb-2 lg:mb-3">
                                                <span class="text-white/60 text-xs">Revenus des 12 derniers mois</span>
                                                <span class="text-white/40 text-xs hidden sm:block">Variation: +187% /
                                                    -89%</span>
                                            </div>

                                            <!-- Chart.js Integration -->
                                            <div
                                                class="bg-white/[0.02] rounded-lg p-2 lg:p-3 border border-white/[0.05] relative overflow-hidden">
                                                <ClientOnly>
                                                    <RevenueChart />
                                                </ClientOnly>
                                            </div>
                                        </div>

                                        <!-- Monthly Breakdown -->
                                        <div class="space-y-1 lg:space-y-2">
                                            <div
                                                class="flex items-center justify-between p-1.5 lg:p-2 bg-white/[0.03] border border-white/[0.08] rounded-lg">
                                                <div class="flex items-center gap-2">
                                                    <div class="text-xs lg:text-sm">😰</div>
                                                    <span class="text-white/70 text-xs">Janvier 2024</span>
                                                </div>
                                                <div class="text-right">
                                                    <div class="text-white/80 font-bold text-xs">320€</div>
                                                    <div class="text-red-400 text-xs">-73%</div>
                                                </div>
                                            </div>

                                            <div
                                                class="flex items-center justify-between p-1.5 lg:p-2 bg-primary/10 border border-primary/20 rounded-lg">
                                                <div class="flex items-center gap-2">
                                                    <div class="text-xs lg:text-sm">🤩</div>
                                                    <span class="text-white/70 text-xs">Mars 2024</span>
                                                </div>
                                                <div class="text-right">
                                                    <div class="text-primary font-bold text-xs">2,800€</div>
                                                    <div class="text-primary/60 text-xs">+280%</div>
                                                </div>
                                            </div>

                                            <div
                                                class="flex items-center justify-between p-1.5 lg:p-2 bg-white/[0.03] border border-white/[0.08] rounded-lg">
                                                <div class="flex items-center gap-2">
                                                    <div class="text-xs lg:text-sm">😱</div>
                                                    <span class="text-white/70 text-xs">Mai 2024</span>
                                                </div>
                                                <div class="text-right">
                                                    <div class="text-white/80 font-bold text-xs">180€</div>
                                                    <div class="text-red-400 text-xs">-85%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <!-- Content Area (40% sur mobile, 30% sur desktop) -->
                            <div
                                class="p-4 sm:p-5 lg:p-6 text-center relative z-10 h-[40%] lg:h-[30%] flex flex-col justify-center">
                                <!-- Badge -->
                                <div
                                    class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-background border border-white/[0.08] mb-2 sm:mb-3 mx-auto">
                                    <div class="w-2 h-2 bg-primary rounded-full" />
                                    <span class="text-white text-xs font-medium tracking-wide">1er problème</span>
                                </div>

                                <h4
                                    class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                                    Dashboard financier inutile
                                </h4>
                                <p class="text-white/60 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                                    Les graphiques ne servent à rien quand<br class="hidden sm:block">
                                    <span class="sm:hidden" />tes revenus sont imprévisibles
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Dashboard 2: Calendar Planning -->
                    <div class="relative h-[400px] lg:h-[450px] w-full overflow-hidden ">
                        <div
                            class="relative bg-transparent border border-white/[0.08] rounded-3xl overflow-hidden h-full">
                            <!-- Gradient Overlay using Tailwind -->
                            <div
                                class="z-10 absolute inset-0 bg-linear-to-b from-transparent from-0% via-background/90 via-60% to-background/95 to-90% pointer-events-none" />

                            <!-- Dashboard Area (60% sur mobile, 70% sur desktop) -->
                            <div class="relative h-[60%] lg:h-[70%]">
                                <!-- Dashboard Container -->
                                <div class="p-3 sm:p-4 lg:p-6 h-full">
                                    <div
                                        class="bg-gray-950/90 rounded-xl p-2 sm:p-3 lg:p-4 border border-white/[0.03] backdrop-blur-xl h-full">
                                        <CalendarMockup />
                                    </div>
                                </div>

                            </div>

                            <!-- Content Area (40% sur mobile, 30% sur desktop) -->
                            <div
                                class="p-4 sm:p-5 lg:p-6 text-center relative z-10 h-[40%] lg:h-[30%] flex flex-col justify-center">
                                <!-- Badge -->
                                <div
                                    class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-background border border-white/[0.08] mb-2 sm:mb-3 mx-auto">
                                    <div class="w-2 h-2 bg-primary rounded-full" />
                                    <span class="text-white text-xs font-medium tracking-wide">2nd problème</span>
                                </div>

                                <h4
                                    class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                                    Planning ingérable
                                </h4>
                                <p class="text-white/60 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                                    Ton agenda te contrôle au lieu<br class="hidden sm:block">
                                    <span class="sm:hidden" />que tu le contrôles
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Third Dashboard: Client Management Chaos -->
                <div class="relative h-[400px] lg:h-[450px] w-full">
                    <!-- Background card -->
                    <div class="overflow-hidden relative bg-transparent border border-white/[0.08] rounded-3xl h-full">
                        <!-- Gradient Overlay using Tailwind -->
                        <div
                            class="z-10 absolute inset-0 bg-linear-to-b from-transparent from-40% via-background/30 via-50% to-background/95 to-90% pointer-events-none" />

                        <!-- Left to Right Gradient Overlay -->
                        <div
                            class="z-10 absolute inset-0 bg-gradient-to-r from-transparent from-0% via-transparent via-20% to-background/90 to-100% pointer-events-none" />

                        <!-- Dashboard Area (60% sur mobile, 70% sur desktop) -->
                        <div class="relative h-[60%] lg:h-[70%] flex items-center justify-center">
                            <div
                                class="scale-75 sm:scale-100 lg:scale-150 ml-12 sm:ml-24 mt-[300px] sm:mt-[450px] lg:mt-[700px]">
                                <NotificationStack />
                            </div>
                        </div>

                        <!-- Content Area (40% sur mobile, 30% sur desktop) -->
                        <div
                            class="p-4 sm:p-5 lg:p-6 text-center relative z-20 h-[40%] lg:h-[30%] flex flex-col justify-center">
                            <!-- Badge -->
                            <div
                                class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-background border border-white/[0.08] mb-2 sm:mb-3 mx-auto">
                                <div class="w-2 h-2 bg-primary rounded-full" />
                                <span class="text-white text-xs font-medium tracking-wide">3ème problème</span>
                            </div>

                            <h4 class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                                Suivi client chaotique
                            </h4>
                            <p class="text-white/60 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                                Quand tu ne sais plus où tu en es avec tes clients,<br class="hidden sm:block">
                                <span class="sm:hidden" />tu perds leur confiance... et ton business
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
// Import Chart.js components
import RevenueChart from '~/components/charts/RevenueChart.vue';

// Import Mockup components
import CalendarMockup from '~/components/mockups/CalendarMockup.vue';
import NotificationStack from '~/components/mockups/NotificationStack.vue';
</script>