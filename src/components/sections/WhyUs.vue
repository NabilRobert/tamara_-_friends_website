<script setup lang="ts">
import { useCopy } from '../../composables/useCopy'
import SectionHeading from '../shared/SectionHeading.vue'
import IconBadge from '../shared/IconBadge.vue'

const copy = useCopy()
</script>

<template>
  <section class="bg-brand-navy-950 px-5 py-20 sm:px-8 sm:py-28">
    <div class="mx-auto flex max-w-6xl flex-col gap-10">
      <SectionHeading :eyebrow="copy.whyUs.eyebrow" :title="copy.whyUs.title" tone="dark" align="center" />

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <div
          v-for="item in copy.whyUs.items"
          :key="item.title"
          class="flex flex-col items-center gap-3 rounded-2xl bg-white/5 p-6 text-center"
        >
          <IconBadge :icon="item.icon" tone="accentOnDark" class="size-12" />
          <h3 class="font-semibold text-white">{{ item.title }}</h3>
          <p class="text-sm leading-relaxed text-ink-soft/80">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
