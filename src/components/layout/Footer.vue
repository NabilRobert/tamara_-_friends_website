<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCopy } from '../../composables/useCopy'
import { useLanguage } from '../../composables/useLanguage'
import { legalLinks, whatsappContactName, whatsappDisplayNumber, buildWhatsAppLink } from '../../data/site'
import Logo from '../shared/Logo.vue'

const copy = useCopy()
const { locale } = useLanguage()
</script>

<template>
  <footer class="bg-brand-navy-950 px-5 py-12 text-ink-soft sm:px-8">
    <div class="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:justify-between">
      <div class="max-w-sm">
        <RouterLink to="/">
          <Logo :size="36" wordmark-class-name="text-lg text-white" />
        </RouterLink>
        <p class="mt-3 text-sm leading-relaxed text-ink-soft/80">{{ copy.footer.tagline }}</p>
      </div>

      <div class="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
        <div>
          <h3 class="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
            {{ copy.footer.navHeading }}
          </h3>
          <ul class="mt-3 flex flex-col gap-2">
            <li v-for="item in copy.header.navItems" :key="item.id">
              <a :href="`/#${item.id}`" class="text-sm text-ink-soft/80 hover:text-white">{{ item.label }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
            {{ copy.footer.legalHeading }}
          </h3>
          <ul class="mt-3 flex flex-col gap-2">
            <li v-for="link in legalLinks[locale]" :key="link.to">
              <RouterLink :to="link.to" class="text-sm text-ink-soft/80 hover:text-white">{{
                link.label
              }}</RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
            {{ copy.footer.contactHeading }}
          </h3>
          <p class="mt-3 text-sm text-ink-soft/80">{{ whatsappContactName }}</p>
          <a
            :href="buildWhatsAppLink(copy.header.ctaLabel)"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-ink-soft/80 hover:text-white"
          >
            {{ whatsappDisplayNumber }}
          </a>
        </div>
      </div>
    </div>

    <div class="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs text-ink-soft/60">
      {{ copy.footer.rightsReserved }}
    </div>
  </footer>
</template>
