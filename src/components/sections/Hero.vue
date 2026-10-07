<script setup lang="ts">
import { useCopy } from '../../composables/useCopy'
import WhatsAppButton from '../shared/WhatsAppButton.vue'
import logoUrl from '../../assets/logo.png'

const copy = useCopy()
</script>

<template>
  <section class="relative overflow-hidden bg-brand-orange-500">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
    <img
      :src="logoUrl"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute top-1/2 left-[70%] hidden size-[32rem] -translate-x-1/2 -translate-y-1/2 opacity-90 lg:block"
    />
    <div class="relative mx-auto flex max-w-6xl flex-col gap-6 px-5 py-20 sm:px-8 sm:py-28">
      <span
        class="w-fit rounded-full bg-brand-navy-950 px-4 py-1.5 text-xs font-semibold tracking-wide text-white sm:text-sm"
      >
        {{ copy.hero.badge }}
      </span>

      <h1 class="max-w-3xl text-balance font-display text-4xl font-semibold text-white sm:text-6xl">
        {{ copy.hero.title }}
      </h1>

      <p class="max-w-2xl text-balance font-display text-xl text-white/90 italic sm:text-2xl">
        {{ copy.hero.subtitle }}
      </p>

      <p class="max-w-xl text-balance text-base text-white/90 sm:text-lg">{{ copy.hero.description }}</p>

      <div class="mt-2 flex flex-col gap-3 sm:flex-row">
        <WhatsAppButton :message="copy.hero.ctaPrimary">{{ copy.hero.ctaPrimary }}</WhatsAppButton>
        <WhatsAppButton :message="copy.hero.ctaSecondary" variant="outline">
          {{ copy.hero.ctaSecondary }}
        </WhatsAppButton>
      </div>

      <p class="mt-6 text-xs font-medium tracking-wide text-white/70 sm:text-sm">{{ copy.hero.deckLabel }}</p>
    </div>
  </section>
</template>
