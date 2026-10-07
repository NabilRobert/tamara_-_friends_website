<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  lastUpdated: string
}>()
</script>

<template>
  <section class="bg-brand-navy-950 px-5 py-16 sm:px-8 sm:py-20">
    <div class="mx-auto flex max-w-3xl flex-col gap-3">
      <span class="text-xs font-semibold tracking-[0.2em] text-brand-orange-400 uppercase">{{ eyebrow }}</span>
      <h1 class="font-display text-3xl font-semibold text-white sm:text-4xl">{{ title }}</h1>
      <p class="text-sm text-ink-soft/70">{{ lastUpdated }}</p>
    </div>
  </section>
</template>
