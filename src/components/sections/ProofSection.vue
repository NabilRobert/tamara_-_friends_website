<script setup lang="ts">
import { useCopy } from '../../composables/useCopy'
import SectionHeading from '../shared/SectionHeading.vue'

const copy = useCopy()
</script>

<template>
  <section id="bukti" class="bg-brand-cream-100/60 px-5 py-20 sm:px-8 sm:py-28">
    <div class="mx-auto flex max-w-6xl flex-col gap-10">
      <SectionHeading :eyebrow="copy.proof.eyebrow" :title="copy.proof.title" :description="copy.proof.subtitle" />

      <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div v-for="stat in copy.proof.stats" :key="stat.label" class="rounded-2xl bg-white p-5 text-center sm:p-6">
          <p class="font-display text-2xl font-semibold text-brand-orange-600 sm:text-3xl">{{ stat.value }}</p>
          <p class="mt-2 text-xs leading-snug text-ink-muted sm:text-sm">{{ stat.label }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div v-for="comparison in copy.proof.comparisons" :key="comparison.label" class="rounded-2xl bg-white p-6">
          <p class="text-xs font-semibold tracking-[0.1em] text-ink-muted uppercase">{{ comparison.label }}</p>
          <p class="mt-2 font-display text-lg font-semibold text-ink sm:text-xl">
            {{ comparison.before }} <span class="text-ink-muted">→</span> {{ comparison.after }}
          </p>
          <p class="mt-1 text-sm font-medium text-emerald-600">{{ comparison.change }}</p>
        </div>

        <div class="rounded-2xl bg-brand-navy-950 p-6">
          <p class="text-xs font-semibold tracking-[0.1em] text-brand-orange-400 uppercase">
            {{ copy.proof.conclusionLabel }}
          </p>
          <p class="mt-2 text-balance font-display text-lg font-semibold text-white sm:text-xl">
            {{ copy.proof.conclusionText }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
