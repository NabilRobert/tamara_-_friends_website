<script setup lang="ts">
import { useCopy } from '../../composables/useCopy'
import SectionHeading from '../shared/SectionHeading.vue'
import IconBadge from '../shared/IconBadge.vue'

const copy = useCopy()
</script>

<template>
  <section id="layanan" class="bg-brand-cream-100/60 px-5 py-20 sm:px-8 sm:py-28">
    <div class="mx-auto flex max-w-6xl flex-col gap-10">
      <SectionHeading
        :eyebrow="copy.services.eyebrow"
        :title="copy.services.title"
        :description="copy.services.description"
      />

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div v-for="item in copy.services.items" :key="item.title" class="flex flex-col gap-4 rounded-2xl bg-white p-6 sm:p-7">
          <IconBadge :icon="item.icon" class="size-12" />
          <span class="text-xs font-semibold tracking-[0.15em] text-brand-orange-600 uppercase">{{
            item.label
          }}</span>
          <h3 class="font-display text-lg font-semibold text-ink">{{ item.title }}</h3>
          <p class="text-sm leading-relaxed text-ink-muted">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
