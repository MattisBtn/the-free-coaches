<template>
    <div class="min-h-screen bg-background">
        <AppHeader />

        <main class="mt-24 lg:mt-64">
            <slot />
        </main>

        <AppFooter />
    </div>
</template>

<script lang="ts" setup>
// Le layout par défaut avec header et footer
</script>