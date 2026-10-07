<script setup lang="ts">
import type { LegalPageCopy } from '../../types/content'
import LegalPageHero from './LegalPageHero.vue'
import { buildWhatsAppLink, whatsappDisplayNumber } from '../../data/site'

defineProps<{
  copy: LegalPageCopy
}>()
</script>

<template>
  <main>
    <LegalPageHero :eyebrow="copy.eyebrow" :title="copy.title" :last-updated="copy.lastUpdated" />

    <section class="px-5 py-16 sm:px-8 sm:py-20">
      <div class="mx-auto flex max-w-3xl flex-col gap-10 text-ink-muted">
        <p class="leading-relaxed">{{ copy.intro }}</p>

        <div v-for="section in copy.sections" :key="section.heading">
          <h2 class="text-lg font-semibold text-ink">{{ section.heading }}</h2>
          <div class="mt-3 flex flex-col gap-3">
            <template v-for="(block, index) in section.body" :key="index">
              <p v-if="block.type === 'paragraph'" class="leading-relaxed">{{ block.text }}</p>
              <ol v-else-if="block.ordered" class="list-decimal space-y-2 pl-5 leading-relaxed">
                <li v-for="item in block.items" :key="item">{{ item }}</li>
              </ol>
              <ul v-else class="list-disc space-y-2 pl-5 leading-relaxed">
                <li v-for="item in block.items" :key="item">{{ item }}</li>
              </ul>
            </template>
          </div>
        </div>

        <div>
          <h2 class="text-lg font-semibold text-ink">{{ copy.contactHeading }}</h2>
          <p class="mt-3 leading-relaxed">
            {{ copy.contactIntro }}
            <a
              :href="buildWhatsAppLink(copy.contactHeading)"
              target="_blank"
              rel="noopener noreferrer"
              class="font-medium text-brand-orange-600 hover:text-brand-orange-500"
              >WhatsApp {{ whatsappDisplayNumber }}</a
            >.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
