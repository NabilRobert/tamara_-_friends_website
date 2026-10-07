<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X } from '@lucide/vue'
import { useCopy } from '../../composables/useCopy'
import LanguageToggle from './LanguageToggle.vue'
import WhatsAppButton from '../shared/WhatsAppButton.vue'
import Logo from '../shared/Logo.vue'

const copy = useCopy()
const menuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-ink/5 bg-white/90 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
      <RouterLink to="/">
        <Logo :size="40" wordmark-class-name="text-lg text-ink sm:text-xl" />
      </RouterLink>

      <nav class="hidden items-center gap-6 lg:flex">
        <a
          v-for="item in copy.header.navItems"
          :key="item.id"
          :href="`/#${item.id}`"
          class="text-sm font-medium text-ink-muted transition-colors hover:text-brand-orange-600"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-3 lg:flex">
        <LanguageToggle />
        <WhatsAppButton
          :message="copy.header.ctaLabel"
          variant="dark"
          class="bg-brand-orange-500 hover:bg-brand-orange-600"
        >
          {{ copy.header.ctaLabel }}
        </WhatsAppButton>
      </div>

      <div class="flex items-center gap-2 lg:hidden">
        <LanguageToggle />
        <button
          type="button"
          @click="menuOpen = !menuOpen"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          class="inline-flex size-10 items-center justify-center rounded-full border border-ink/10 text-ink"
        >
          <X v-if="menuOpen" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>
    </div>

    <div v-if="menuOpen" class="border-t border-ink/5 bg-white px-5 py-4 lg:hidden">
      <nav class="flex flex-col gap-3">
        <a
          v-for="item in copy.header.navItems"
          :key="item.id"
          :href="`/#${item.id}`"
          @click="menuOpen = false"
          class="text-sm font-medium text-ink-muted transition-colors hover:text-brand-orange-600"
        >
          {{ item.label }}
        </a>
      </nav>
      <WhatsAppButton
        :message="copy.header.ctaLabel"
        variant="dark"
        class="mt-4 w-full bg-brand-orange-500 hover:bg-brand-orange-600"
      >
        {{ copy.header.ctaLabel }}
      </WhatsAppButton>
    </div>
  </header>
</template>
