<template>
    <div class="relative w-full h-full flex items-start justify-center pt-4 overflow-visible">
        <!-- Main notification stack container - Larger and more dramatic -->
        <div class="relative w-[500px] h-[450px] transform-gpu" style="transform-style: preserve-3d;">


            <!-- Notification 3 - Important Alert -->
            <div class="notification-card absolute w-full h-22 bg-gray-900/85 border border-yellow-500/20 rounded-xl backdrop-blur-sm cursor-pointer transition-all duration-300 shadow-lg"
                style="transform: rotateX(-20deg) rotateY(20deg) translateZ(60px) translateY(-40px); z-index: 30;">
                <div class="p-4 h-full flex flex-col justify-between relative">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <div
                                class="w-2.5 h-2.5 bg-yellow-500 rounded-full flex-shrink-0 shadow-sm shadow-yellow-500/30" />
                            <span class="text-yellow-400 text-xs font-bold uppercase tracking-wide">IMPORTANT</span>
                        </div>
                        <div
                            class="w-6 h-6 bg-yellow-500/20 rounded-lg flex items-center justify-center border border-yellow-500/30">
                            <span class="text-yellow-400 text-xs">📊</span>
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col justify-center">
                        <div class="text-white/90 text-sm font-medium leading-tight">15 métriques manquantes</div>
                    </div>
                    <div class="text-yellow-400/80 text-xs font-medium">Jan 10</div>
                </div>
            </div>

            <!-- Notification 4 - Primary Success -->
            <div class="notification-card absolute w-full h-20 bg-gray-900/80 border border-primary/20 rounded-xl backdrop-blur-sm cursor-pointer transition-all duration-300 shadow-md"
                style="transform: rotateX(-20deg) rotateY(20deg) translateZ(0px) translateY(-60px); z-index: 20; opacity: 0.85;">
                <div class="p-3 h-full flex flex-col justify-between relative">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0 shadow-sm shadow-primary/30" />
                            <span class="text-primary text-xs font-bold uppercase tracking-wide">SUCCÈS</span>
                        </div>
                        <div
                            class="w-5 h-5 bg-primary/15 rounded-lg flex items-center justify-center border border-primary/25">
                            <span class="text-primary text-xs font-bold">✓</span>
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col justify-center">
                        <div class="text-white/80 text-xs font-medium leading-tight">Nouveau client inscrit</div>
                    </div>
                    <div class="text-primary/80 text-xs font-medium">Jan 8</div>
                </div>
            </div>

            <!-- Notification 5 - Background Info -->
            <div class="notification-card absolute w-full h-18 bg-gray-900/70 border border-white/10 rounded-lg backdrop-blur-sm cursor-pointer transition-all duration-300"
                style="transform: rotateX(-20deg) rotateY(20deg) translateZ(-60px) translateY(-80px); z-index: 10; opacity: 0.6;">
                <div class="p-3 h-full flex flex-col justify-between relative">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <div class="w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0" />
                            <span class="text-gray-400 text-xs font-bold uppercase tracking-wide">INFO</span>
                        </div>
                        <div class="w-4 h-4 bg-gray-500/15 rounded flex items-center justify-center">
                            <span class="text-gray-400 text-xs">i</span>
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col justify-center">
                        <div class="text-white/60 text-xs font-medium leading-tight">Rapport mensuel disponible</div>
                    </div>
                    <div class="text-gray-400/80 text-xs font-medium">Jan 6</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// Isometric notification stack component
</script>

<style scoped>
.notification-card {
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    backface-visibility: hidden;
    will-change: transform;
}

.notification-card:nth-child(1):hover {
    --hover-color: 239, 68, 68;
}

.notification-card:nth-child(2):hover {
    --hover-color: 251, 146, 60;
}

.notification-card:nth-child(3):hover {
    --hover-color: 250, 204, 21;
}

.notification-card:nth-child(4):hover {
    --hover-color: 215, 159, 15;
}

.notification-card:nth-child(5):hover {
    --hover-color: 156, 163, 175;
}

/* Enhanced depth shadows */
.notification-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.notification-card:hover::before {
    opacity: 1;
}

/* Subtle floating animation for the front card */
.notification-card:nth-child(1) {
    animation: float 6s ease-in-out infinite;
}
</style>
