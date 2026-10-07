<script setup lang="ts">
import { Check, X } from '@lucide/vue'
import { useCopy } from '../../composables/useCopy'
import SectionHeading from '../shared/SectionHeading.vue'

const copy = useCopy()
</script>

<template>
  <section class="bg-brand-cream-100/60 px-5 py-20 sm:px-8 sm:py-28">
    <div class="mx-auto flex max-w-6xl flex-col gap-10">
      <SectionHeading
        :eyebrow="copy.comparison.eyebrow"
        :title="copy.comparison.title"
        :description="copy.comparison.description"
      />

      <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div class="rounded-2xl bg-white p-6 sm:p-8">
          <h3 class="text-sm font-semibold tracking-[0.15em] text-ink-muted uppercase">
            {{ copy.comparison.themLabel }}
          </h3>
          <ul class="mt-5 flex flex-col gap-4">
            <li v-for="text in copy.comparison.themItems" :key="text" class="flex items-start gap-3">
              <span
                class="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500"
              >
                <X :size="14" :stroke-width="3" aria-hidden="true" />
              </span>
              <span class="text-sm leading-relaxed text-ink-muted sm:text-base">{{ text }}</span>
            </li>
          </ul>
        </div>

        <div class="rounded-2xl bg-brand-navy-950 p-6 sm:p-8">
          <h3 class="text-sm font-semibold tracking-[0.15em] text-brand-orange-400 uppercase">
            {{ copy.comparison.usLabel }}
          </h3>
          <ul class="mt-5 flex flex-col gap-4">
            <li v-for="text in copy.comparison.usItems" :key="text" class="flex items-start gap-3">
              <span
                class="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-orange-500 text-white"
              >
                <Check :size="14" :stroke-width="3" aria-hidden="true" />
              </span>
              <span class="text-sm leading-relaxed text-ink-soft sm:text-base">{{ text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
