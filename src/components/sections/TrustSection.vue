<script setup lang="ts">
import { useCopy } from '../../composables/useCopy'
import SectionHeading from '../shared/SectionHeading.vue'

const copy = useCopy()
</script>

<template>
  <section class="px-5 py-20 sm:px-8 sm:py-28">
    <div class="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
      <div class="flex flex-col gap-8">
        <SectionHeading
          :eyebrow="copy.trust.eyebrow"
          :title="copy.trust.title"
          :description="copy.trust.description"
        />

        <ol class="flex flex-col gap-5">
          <li v-for="step in copy.trust.steps" :key="step.number" class="flex gap-4">
            <span
              class="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-orange-500 font-display text-base font-semibold text-white"
            >
              {{ step.number }}
            </span>
            <div>
              <h3 class="font-semibold text-ink">{{ step.title }}</h3>
              <p class="mt-1 text-sm leading-relaxed text-ink-muted">{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </div>

      <div class="rounded-2xl border border-ink/5 bg-brand-cream-100 p-6 shadow-sm sm:p-7">
        <span class="w-fit rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
          {{ copy.trust.exampleCard.statusLabel }}
        </span>

        <h3 class="mt-4 text-base font-semibold text-ink sm:text-lg">{{ copy.trust.exampleCard.title }}</h3>
        <p class="mt-1 text-sm text-ink-muted">{{ copy.trust.exampleCard.subtitle }}</p>

        <dl class="mt-5 flex flex-col gap-2 border-t border-ink/10 pt-4 text-sm">
          <div class="flex justify-between gap-3">
            <dt class="text-ink-muted">{{ copy.trust.exampleCard.campaignLabel }}</dt>
            <dd class="text-right font-medium text-ink">{{ copy.trust.exampleCard.campaignValue }}</dd>
          </div>
          <div class="flex justify-between gap-3">
            <dt class="text-ink-muted">{{ copy.trust.exampleCard.adsetLabel }}</dt>
            <dd class="text-right font-medium text-ink">{{ copy.trust.exampleCard.adsetValue }}</dd>
          </div>
          <div class="flex justify-between gap-3">
            <dt class="text-ink-muted">{{ copy.trust.exampleCard.accountLabel }}</dt>
            <dd class="text-right font-medium text-ink">{{ copy.trust.exampleCard.accountValue }}</dd>
          </div>
        </dl>

        <p class="mt-4 text-sm font-semibold text-emerald-600">
          ↗ {{ copy.trust.exampleCard.saveLabel }} {{ copy.trust.exampleCard.saveValue }}
        </p>

        <div class="mt-5 flex gap-3">
          <button
            type="button"
            class="flex-1 rounded-full border border-ink/15 py-2.5 text-sm font-semibold text-ink-muted"
          >
            {{ copy.trust.exampleCard.rejectLabel }}
          </button>
          <button
            type="button"
            class="flex-1 rounded-full bg-emerald-600 py-2.5 text-sm font-semibold text-white"
          >
            ✓ {{ copy.trust.exampleCard.approveLabel }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
