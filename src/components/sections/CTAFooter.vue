<script setup lang="ts">
import { useCopy } from '../../composables/useCopy'
import WhatsAppButton from '../shared/WhatsAppButton.vue'
import IconBadge from '../shared/IconBadge.vue'
import { whatsappDisplayNumber } from '../../data/site'

const copy = useCopy()
</script>

<template>
  <section id="kontak" class="bg-brand-orange-500 px-5 py-20 sm:px-8 sm:py-28">
    <div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
      <div class="flex flex-col gap-5">
        <span class="text-xs font-semibold tracking-[0.2em] text-brand-navy-950/70 uppercase">{{
          copy.ctaFooter.eyebrow
        }}</span>
        <h2 class="text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
          {{ copy.ctaFooter.title }}
        </h2>
        <p class="max-w-md text-balance text-base text-white/90 sm:text-lg">{{ copy.ctaFooter.description }}</p>

        <div class="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton :message="copy.ctaFooter.ctaPrimary">{{ copy.ctaFooter.ctaPrimary }}</WhatsAppButton>
          <WhatsAppButton :message="copy.ctaFooter.ctaSecondary" variant="outline">
            {{ copy.ctaFooter.ctaSecondary }}
          </WhatsAppButton>
        </div>

        <div class="mt-2 flex items-center gap-3 rounded-2xl bg-white p-4">
          <IconBadge icon="whatsapp" class="size-10 shrink-0" :size="20" />
          <div>
            <p class="text-sm font-semibold text-ink">{{ copy.ctaFooter.contactName }}</p>
            <p class="text-sm text-ink-muted">{{ whatsappDisplayNumber }}</p>
          </div>
        </div>
      </div>

      <div class="rounded-2xl bg-brand-navy-950 p-6 sm:p-8">
        <span class="text-xs font-semibold tracking-[0.2em] text-brand-orange-400 uppercase">{{
          copy.ctaFooter.aboutHeading
        }}</span>
        <p class="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">{{ copy.ctaFooter.aboutDescription }}</p>

        <span class="mt-6 block text-xs font-semibold tracking-[0.2em] text-brand-orange-400 uppercase">{{
          copy.ctaFooter.servicesLabel
        }}</span>
        <div class="mt-4 grid grid-cols-3 gap-4">
          <div
            v-for="service in copy.ctaFooter.services"
            :key="service.label"
            class="flex flex-col items-center gap-2 text-center"
          >
            <IconBadge :icon="service.icon" tone="dark" class="size-12" />
            <p class="text-xs text-ink-soft sm:text-sm">{{ service.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
