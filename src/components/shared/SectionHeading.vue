<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    description?: string
    align?: 'left' | 'center'
    tone?: 'light' | 'dark'
  }>(),
  { align: 'left', tone: 'light' },
)
</script>

<template>
  <div
    :class="[
      'flex max-w-3xl flex-col gap-4',
      align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
    ]"
  >
    <span
      :class="[
        'text-xs font-semibold tracking-[0.2em] uppercase',
        tone === 'dark' ? 'text-brand-orange-400' : 'text-brand-orange-600',
      ]"
      >{{ eyebrow }}</span
    >
    <h2
      :class="[
        'text-balance font-display text-3xl font-semibold sm:text-4xl',
        tone === 'dark' ? 'text-white' : 'text-ink',
      ]"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      :class="[
        'text-balance text-base leading-relaxed sm:text-lg',
        tone === 'dark' ? 'text-ink-soft' : 'text-ink-muted',
      ]"
    >
      {{ description }}
    </p>
  </div>
</template>
