<script setup lang="ts">
import { Languages } from '@lucide/vue'
import { useLanguage } from '../../composables/useLanguage'
import { useCopy } from '../../composables/useCopy'

const { locale, toggleLocale } = useLanguage()
const copy = useCopy()

const labels: Record<'id' | 'en', string> = { id: 'ID', en: 'EN' }
</script>

<template>
  <button
    type="button"
    @click="toggleLocale"
    :aria-label="copy.header.languageToggleLabel"
    class="inline-flex items-center gap-1.5 rounded-full border border-ink/10 px-3 py-1.5 text-sm font-semibold text-ink transition-colors hover:border-brand-orange-500 hover:text-brand-orange-600"
  >
    <Languages :size="16" aria-hidden="true" />
    <span>{{ labels[locale] }}</span>
  </button>
</template>
