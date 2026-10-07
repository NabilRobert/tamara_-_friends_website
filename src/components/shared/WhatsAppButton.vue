<script setup lang="ts">
import { buildWhatsAppLink } from '../../data/site'

const variantClasses = {
  solid: 'bg-white text-brand-orange-600 hover:bg-brand-cream-100',
  outline: 'border border-white/70 text-white hover:bg-white/10',
  dark: 'bg-brand-navy-900 text-white hover:bg-brand-navy-800',
} as const

withDefaults(
  defineProps<{
    message: string
    variant?: keyof typeof variantClasses
  }>(),
  { variant: 'solid' },
)
</script>

<template>
  <a
    :href="buildWhatsAppLink(message)"
    target="_blank"
    rel="noopener noreferrer"
    :class="[
      'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors sm:text-base',
      variantClasses[variant],
    ]"
  >
    <slot />
  </a>
</template>
