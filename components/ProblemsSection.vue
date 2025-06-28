<template>
    <section class="relative lg:py-24 overflow-hidden">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-20 md:mb-32 lg:mb-40">
                <div
                    class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm mb-12">
                    <div class="relative">
                        <div class="w-3 h-3 bg-primary/60 rounded-full" />
                        <div class="absolute inset-0 w-3 h-3 bg-primary/20 rounded-full" />
                    </div>
                    <span class="text-base font-medium text-white/70 tracking-wide">La réalité brutale</span>
                </div>

                <div class="mb-12 space-y-6">
                    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[0.9] max-w-5xl mx-auto tracking-tight"
                        style="background-image: linear-gradient(0deg, rgb(153, 153, 153) 0%, rgb(255, 255, 255) 91.7261%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
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
            <div class="space-y-4 max-w-6xl mx-auto">
                <!-- Top Row: Two cards side by side -->
                <div class="flex flex-col lg:flex-row gap-0.5 justify-center items-center">
                    <!-- Dashboard 1: Revenue Analytics -->
                    <div class="relative h-[400px] lg:h-[600px] w-full max-w-[500px] lg:max-w-[450px] xl:max-w-[500px]">
                        <div
                            class="relative bg-transparent border border-white/[0.08] rounded-3xl overflow-hidden h-full">
                            <!-- Gradient Overlay using Tailwind -->
                            <div
                                class="z-10 absolute inset-0 bg-linear-to-b from-transparent from-40% via-background/30 via-50% to-background/95 to-90% pointer-events-none" />

                            <!-- Left to Right Gradient Overlay -->
                            <div
                                class="z-10 absolute inset-0 bg-gradient-to-r from-transparent from-0% via-transparent via-20% to-background/90 to-100% pointer-events-none" />


                            <!-- Dashboard Area (70%) -->
                            <div class="relative h-[70%]">
                                <!-- Dashboard Container -->
                                <div class="p-6 h-full">
                                    <div
                                        class="bg-gray-950/90 rounded-xl p-4 border border-white/[0.03] backdrop-blur-xl h-full">
                                        <!-- Header -->
                                        <div class="flex items-center justify-between mb-6">
                                            <div class="flex items-center gap-3">
                                                <div
                                                    class="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center">
                                                    <span class="text-black text-xs font-bold">€</span>
                                                </div>
                                                <span class="text-white/80 font-semibold text-sm">Revenue
                                                    Analytics</span>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-red-500 rounded-full" />
                                                <span class="text-red-400 text-xs font-medium">UNSTABLE</span>
                                            </div>
                                        </div>

                                        <!-- Revenue Chart Area -->
                                        <div class="mb-6">
                                            <div class="flex items-center justify-between mb-3">
                                                <span class="text-white/60 text-xs">Revenus des 12 derniers mois</span>
                                                <span class="text-white/40 text-xs">Variation: +187% / -89%</span>
                                            </div>

                                            <!-- Chart.js Integration -->
                                            <div
                                                class="bg-white/[0.02] rounded-lg p-3 border border-white/[0.05] relative overflow-hidden">
                                                <ClientOnly>
                                                    <RevenueChart />
                                                </ClientOnly>
                                            </div>
                                        </div>

                                        <!-- Monthly Breakdown -->
                                        <div class="space-y-2">
                                            <div
                                                class="flex items-center justify-between p-2 bg-white/[0.03] border border-white/[0.08] rounded-lg">
                                                <div class="flex items-center gap-2">
                                                    <div class="text-sm">😰</div>
                                                    <span class="text-white/70 text-xs">Janvier 2024</span>
                                                </div>
                                                <div class="text-right">
                                                    <div class="text-white/80 font-bold text-xs">320€</div>
                                                    <div class="text-red-400 text-xs">-73%</div>
                                                </div>
                                            </div>

                                            <div
                                                class="flex items-center justify-between p-2 bg-primary/10 border border-primary/20 rounded-lg">
                                                <div class="flex items-center gap-2">
                                                    <div class="text-sm">🤩</div>
                                                    <span class="text-white/70 text-xs">Mars 2024</span>
                                                </div>
                                                <div class="text-right">
                                                    <div class="text-primary font-bold text-xs">2,800€</div>
                                                    <div class="text-primary/60 text-xs">+280%</div>
                                                </div>
                                            </div>

                                            <div
                                                class="flex items-center justify-between p-2 bg-white/[0.03] border border-white/[0.08] rounded-lg">
                                                <div class="flex items-center gap-2">
                                                    <div class="text-sm">😱</div>
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

                            <!-- Content Area (30%) -->
                            <div class="p-6 text-center relative z-10 h-[30%] flex flex-col justify-center">
                                <h4 class="text-xl md:text-2xl font-bold text-white mb-2">
                                    Dashboard financier inutile
                                </h4>
                                <p class="text-white/60 text-sm leading-relaxed">
                                    Les graphiques ne servent à rien quand<br>tes revenus sont imprévisibles
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Dashboard 2: Calendar Planning -->
                    <div class="relative h-[400px] lg:h-[600px] w-full max-w-[500px] lg:max-w-[450px] xl:max-w-[500px]">
                        <div
                            class="relative bg-transparent border border-white/[0.08] rounded-3xl overflow-hidden h-full">
                            <!-- Gradient Overlay using Tailwind -->
                            <div
                                class="z-10 absolute inset-0 bg-linear-to-b from-transparent from-40% via-background/30 via-50% to-background/95 to-90% pointer-events-none" />

                            <!-- Dashboard Area (70%) -->
                            <div class="relative h-[70%]">
                                <!-- Dashboard Container -->
                                <div class="p-6 h-full">
                                    <div
                                        class="bg-gray-950/90 rounded-xl p-4 border border-white/[0.03] backdrop-blur-xl h-full">
                                        <CalendarMockup />
                                    </div>
                                </div>

                            </div>

                            <!-- Content Area (30%) -->
                            <div class="p-6 text-center relative z-10 h-[30%] flex flex-col justify-center">
                                <h4 class="text-xl md:text-2xl font-bold text-white mb-2">
                                    Planning ingérable
                                </h4>
                                <p class="text-white/60 text-sm leading-relaxed">
                                    Ton agenda te contrôle au lieu<br>que tu le contrôles
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Third Dashboard: Client Management Chaos -->
                <div class="relative h-[500px] lg:h-[700px] w-full max-w-6xl mx-auto">
                    <!-- Background card -->
                    <div class="overflow-hidden relative bg-transparent border border-white/[0.08] rounded-3xl h-full">
                        <!-- Header section - Top Left -->
                        <div class="relative z-20 p-8 text-left">
                            <div
                                class="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-4">
                                <div class="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                                <span class="text-orange-400 text-sm font-medium">Système défaillant</span>
                            </div>

                            <h4 class="text-3xl md:text-4xl font-bold text-white mb-3">
                                Suivi client chaotique
                            </h4>
                            <p class="text-white/60 text-lg max-w-xl leading-relaxed">
                                Quand tu ne sais plus où tu en es avec tes clients,<br>
                                tu perds leur confiance... et ton business
                            </p>
                        </div>

                        <div class="mt-24 lg:mt-96 scale-100 lg:scale-200">
                            <NotificationStack />
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