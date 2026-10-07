<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCopy } from '../composables/useCopy'

const copy = useCopy()
</script>

<template>
  <main class="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 py-20 text-center sm:px-8">
    <h1 class="font-display text-3xl font-semibold text-ink sm:text-4xl">{{ copy.notFound.title }}</h1>
    <p class="max-w-md text-ink-muted">{{ copy.notFound.description }}</p>
    <RouterLink
      to="/"
      class="mt-2 inline-flex items-center justify-center rounded-full bg-brand-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-orange-600"
    >
      {{ copy.notFound.ctaLabel }}
    </RouterLink>
  </main>
</template>
