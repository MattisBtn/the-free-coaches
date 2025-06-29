<template>
    <button :class="[
        'flex items-center justify-center font-medium px-6 py-3 rounded-full transition-all duration-300 group',
        'bg-primary text-white border border-transparent',
        'hover:bg-background hover:border-white hover:text-white',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variant === 'full-width' ? 'w-full' : '',
        size === 'sm' ? 'px-4 py-2 text-xs' : size === 'lg' ? 'px-8 py-4 text-sm' : 'text-sm'
    ]" :disabled="disabled" :aria-label="ariaLabel || text" @click="handleClick">
        <span class="mr-2">{{ text }}</span>
        <Icon name="i-heroicons-arrow-right" :class="[
            'transition-all duration-300 rotate-[-45deg] group-hover:rotate-0 group-focus:rotate-0',
            size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-5 h-5'
        ]" />
    </button>
</template>

<script lang="ts" setup>
interface Props {
    text?: string
    variant?: 'default' | 'full-width'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    ariaLabel?: string
}

withDefaults(defineProps<Props>(), {
    text: 'Réserver un appel',
    variant: 'default',
    size: 'md',
    disabled: false,
    ariaLabel: 'Réserver un appel de coaching stratégique'
})

const emit = defineEmits<{
    click: [event: Event]
}>()

const appConfig = useAppConfig()

const handleClick = async (event: Event) => {
    emit('click', event)

    // Ouvrir Calendly dans un nouvel onglet
    await navigateTo(appConfig.company.booking.calendly, {
        external: true,
        open: {
            target: '_blank'
        }
    })
}
</script>