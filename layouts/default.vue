<template>
    <div class="min-h-screen bg-background">
        <AppHeader />

        <main class="mt-24 lg:mt-64">
            <slot />
        </main>

        <AppFooter />

        <!-- Scroll to top FAB -->
        <ScrollToTopFab />
    </div>
</template>