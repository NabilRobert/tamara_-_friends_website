<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import { useCopy } from '../../composables/useCopy'
import SectionHeading from '../shared/SectionHeading.vue'
import IconBadge from '../shared/IconBadge.vue'

const copy = useCopy()
</script>

<template>
  <section id="ringkasan" class="px-5 py-20 sm:px-8 sm:py-28">
    <div class="mx-auto flex max-w-6xl flex-col gap-10">
      <SectionHeading
        :eyebrow="copy.executiveSummary.eyebrow"
        :title="copy.executiveSummary.title"
        :description="copy.executiveSummary.description"
      />

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(step, index) in copy.executiveSummary.steps"
          :key="step.label"
          class="relative flex flex-col gap-4 rounded-2xl bg-brand-cream-100 p-6"
        >
          <IconBadge :icon="step.icon" class="size-12" />
          <div>
            <span class="text-xs font-semibold tracking-[0.15em] text-brand-orange-600 uppercase">{{
              step.label
            }}</span>
            <h3 class="mt-1 font-display text-lg font-semibold text-ink">{{ step.title }}</h3>
          </div>
          <p class="text-sm leading-relaxed text-ink-muted">{{ step.description }}</p>

          <ArrowRight
            v-if="index < copy.executiveSummary.steps.length - 1"
            :size="20"
            class="absolute top-1/2 -right-3 hidden -translate-y-1/2 text-brand-orange-400 sm:block lg:block"
            aria-hidden="true"
          />
        </div>
      </div>

      <div class="flex flex-col items-center gap-2 rounded-2xl bg-brand-navy-950 px-6 py-8 text-center">
        <span class="text-xs font-semibold tracking-[0.2em] text-brand-orange-400 uppercase">{{
          copy.executiveSummary.resultLabel
        }}</span>
        <p class="text-balance font-display text-lg font-semibold text-white sm:text-2xl">
          {{ copy.executiveSummary.resultText }}
        </p>
      </div>
    </div>
  </section>
</template>
