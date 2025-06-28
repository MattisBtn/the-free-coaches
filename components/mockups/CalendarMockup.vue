<template>
    <div class="relative w-full h-full flex items-center justify-center pt-8 overflow-visible">
        <!-- Calendar container with isometric perspective -->
        <div class="relative w-[450px] h-[380px] transform-gpu" style="transform-style: preserve-3d;">
            <div class="calendar-card absolute w-full h-full bg-background border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-500 shadow-2xl"
                style="transform: rotateX(42deg) rotateY(21deg) rotateZ(-35deg) translateZ(24px) scale(1.2)">

                <!-- Calendar Header -->
                <div class="flex items-center justify-between mb-4 p-4 pb-2">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center shadow-lg">
                            <Icon name="i-heroicons-calendar-days" class="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h3 class="text-white/90 font-semibold">Coach Planning</h3>
                            <p class="text-white/60 text-xs">Nov 2024 - Mois difficile</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-sm shadow-red-500/50" />
                        <span class="text-red-400 text-xs font-medium">HIGH STRESS</span>
                    </div>
                </div>

                <!-- Calendar Grid -->
                <div class="bg-white/[0.03] rounded-xl mx-4 p-4 border border-white/[0.08] shadow-inner">
                    <!-- Days Header -->
                    <div class="grid grid-cols-7 gap-1 mb-3">
                        <div v-for="day in ['L', 'M', 'M', 'J', 'V', 'S', 'D']" :key="day"
                            class="text-center text-white/40 text-xs font-medium p-2">
                            {{ day }}
                        </div>
                    </div>

                    <!-- Calendar Days -->
                    <div class="grid grid-cols-7 gap-1">
                        <!-- Empty days at start -->
                        <div v-for="n in 2" :key="`empty-${n}`" class="h-8" />

                        <!-- Days with different states -->
                        <div v-for="(dayData, index) in calendarDays" :key="index"
                            class="relative h-8 flex items-center justify-center text-xs font-medium rounded transition-all duration-200"
                            :class="getDayClasses(dayData)">
                            {{ dayData.day }}

                            <!-- Indicators -->
                            <div v-if="dayData.status !== 'empty'"
                                class="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 flex gap-0.5">
                                <div v-for="dot in dayData.indicators" :key="dot.type" class="w-1 h-1 rounded-full"
                                    :class="dot.color" />
                            </div>
                        </div>
                    </div>

                    <!-- Legend -->
                    <div class="mt-4 pt-4 border-t border-white/[0.05] flex flex-wrap gap-3 text-xs">
                        <div class="flex items-center gap-2">
                            <div class="w-2 h-2 bg-primary rounded-full" />
                            <span class="text-white/60">Séances réalisées</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-2 h-2 bg-red-500 rounded-full" />
                            <span class="text-white/60">Annulations</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-2 h-2 bg-yellow-500 rounded-full" />
                            <span class="text-white/60">Reports</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface CalendarDay {
    day: number
    status: 'completed' | 'cancelled' | 'mixed' | 'empty' | 'rescheduled' | 'current'
    indicators: { type: string; color: string }[]
}

// Calendar data with realistic coach scheduling problems
const calendarDays: CalendarDay[] = [
    { day: 1, status: 'completed', indicators: [{ type: 'session', color: 'bg-primary' }] },
    { day: 2, status: 'cancelled', indicators: [{ type: 'cancel', color: 'bg-red-500' }, { type: 'cancel', color: 'bg-red-500' }] },
    { day: 3, status: 'mixed', indicators: [{ type: 'session', color: 'bg-primary' }, { type: 'cancel', color: 'bg-red-500' }] },
    { day: 4, status: 'empty', indicators: [] },
    { day: 5, status: 'cancelled', indicators: [{ type: 'cancel', color: 'bg-red-500' }] },
    { day: 6, status: 'completed', indicators: [{ type: 'session', color: 'bg-primary' }, { type: 'session', color: 'bg-primary' }] },
    { day: 7, status: 'empty', indicators: [] },

    { day: 8, status: 'empty', indicators: [] },
    { day: 9, status: 'rescheduled', indicators: [{ type: 'reschedule', color: 'bg-yellow-500' }] },
    { day: 10, status: 'completed', indicators: [{ type: 'session', color: 'bg-primary' }] },
    { day: 11, status: 'cancelled', indicators: [{ type: 'cancel', color: 'bg-red-500' }, { type: 'cancel', color: 'bg-red-500' }] },
    { day: 12, status: 'empty', indicators: [] },
    { day: 13, status: 'mixed', indicators: [{ type: 'session', color: 'bg-primary' }, { type: 'cancel', color: 'bg-red-500' }] },
    { day: 14, status: 'empty', indicators: [] },

    { day: 15, status: 'cancelled', indicators: [{ type: 'cancel', color: 'bg-red-500' }] },
    { day: 16, status: 'completed', indicators: [{ type: 'session', color: 'bg-primary' }] },
    { day: 17, status: 'rescheduled', indicators: [{ type: 'reschedule', color: 'bg-yellow-500' }, { type: 'reschedule', color: 'bg-yellow-500' }] },
    { day: 18, status: 'current', indicators: [{ type: 'session', color: 'bg-primary' }] },
    { day: 19, status: 'mixed', indicators: [{ type: 'session', color: 'bg-primary' }, { type: 'cancel', color: 'bg-red-500' }] },
    { day: 20, status: 'empty', indicators: [] },
    { day: 21, status: 'empty', indicators: [] },

    { day: 22, status: 'cancelled', indicators: [{ type: 'cancel', color: 'bg-red-500' }] },
    { day: 23, status: 'completed', indicators: [{ type: 'session', color: 'bg-primary' }, { type: 'session', color: 'bg-primary' }] },
    { day: 24, status: 'rescheduled', indicators: [{ type: 'reschedule', color: 'bg-yellow-500' }] },
    { day: 25, status: 'empty', indicators: [] },
    { day: 26, status: 'cancelled', indicators: [{ type: 'cancel', color: 'bg-red-500' }, { type: 'cancel', color: 'bg-red-500' }] },
    { day: 27, status: 'completed', indicators: [{ type: 'session', color: 'bg-primary' }] },
    { day: 28, status: 'empty', indicators: [] },

    { day: 29, status: 'mixed', indicators: [{ type: 'session', color: 'bg-primary' }, { type: 'cancel', color: 'bg-red-500' }] },
    { day: 30, status: 'cancelled', indicators: [{ type: 'cancel', color: 'bg-red-500' }] }
]

const getDayClasses = (dayData: CalendarDay) => {
    const baseClasses = 'cursor-pointer hover:bg-white/[0.08]'

    switch (dayData.status) {
        case 'current':
            return `${baseClasses} bg-primary text-black font-bold ring-2 ring-primary/30`
        case 'completed':
            return `${baseClasses} text-white/80 bg-white/[0.05]`
        case 'cancelled':
            return `${baseClasses} text-red-400 bg-red-500/10`
        case 'rescheduled':
            return `${baseClasses} text-yellow-400 bg-yellow-500/10`
        case 'mixed':
            return `${baseClasses} text-white/70 bg-white/[0.03] border border-white/[0.08]`
        case 'empty':
            return `${baseClasses} text-white/30`
        default:
            return `${baseClasses} text-white/60`
    }
}
</script>

<style scoped>
.calendar-card {
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    backface-visibility: hidden;
    will-change: transform;
}

.calendar-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
    z-index: 1;
}

.calendar-card:hover::before {
    opacity: 1;
}

/* Enhanced depth with floor shadow */
.calendar-card::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 20%;
    right: 20%;
    height: 40px;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.4) 0%, transparent 70%);
    transform: rotateX(90deg) translateZ(-20px);
    filter: blur(15px);
    opacity: 0.6;
    z-index: -1;
}

/* Grid depth enhancement */
.grid>div {
    transform-style: preserve-3d;
    transition: transform 0.2s ease;
}

.grid>div:hover {
    transform: translateZ(2px);
}
</style>