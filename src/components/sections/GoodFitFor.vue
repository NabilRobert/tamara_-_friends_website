<script setup lang="ts">
import { useCopy } from '../../composables/useCopy'
import SectionHeading from '../shared/SectionHeading.vue'
import IconBadge from '../shared/IconBadge.vue'

const copy = useCopy()
</script>

<template>
  <section class="px-5 py-20 sm:px-8 sm:py-28">
    <div class="mx-auto flex max-w-6xl flex-col gap-10">
      <SectionHeading
        :eyebrow="copy.goodFitFor.eyebrow"
        :title="copy.goodFitFor.title"
        :description="copy.goodFitFor.description"
        align="center"
      />

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <div
          v-for="item in copy.goodFitFor.items"
          :key="item.label"
          class="flex flex-col items-center gap-3 rounded-2xl bg-brand-cream-100 p-5 text-center"
        >
          <IconBadge :icon="item.icon" class="size-12" />
          <h3 class="text-sm font-semibold text-ink sm:text-base">{{ item.label }}</h3>
          <p class="text-xs text-ink-muted sm:text-sm">{{ item.description }}</p>
        </div>
      </div>

      <p class="text-center text-sm text-ink-muted italic sm:text-base">{{ copy.goodFitFor.footnote }}</p>
    </div>
  </section>
</template>
