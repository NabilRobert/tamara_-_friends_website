<script setup lang="ts">
import { ref } from 'vue'
import { X } from '@lucide/vue'
import { useCopy } from '../../composables/useCopy'
import { whatsappDisplayNumber } from '../../data/site'
import WhatsAppButton from './WhatsAppButton.vue'
import Logo from './Logo.vue'

const copy = useCopy()
const open = ref(false)

function toggleOpen() {
  open.value = !open.value
}
</script>

<template>
  <div class="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3 sm:right-8 sm:bottom-8">
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="w-72 overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-xl sm:w-80"
      >
        <div class="flex items-start justify-between gap-2 bg-[#25D366] px-4 py-3">
          <div class="flex items-center gap-2.5">
            <Logo :size="32" :with-wordmark="false" />
            <p class="text-sm font-semibold text-white">{{ copy.whatsappWidget.title }}</p>
          </div>
          <button
            type="button"
            @click="open = false"
            aria-label="Close"
            class="text-white/80 hover:text-white"
          >
            <X :size="18" />
          </button>
        </div>

        <div class="flex flex-col gap-3 p-4">
          <p class="text-sm leading-relaxed text-ink-muted">{{ copy.whatsappWidget.description }}</p>
          <p class="text-xs text-ink-muted">{{ whatsappDisplayNumber }}</p>
          <WhatsAppButton :message="copy.whatsappWidget.message" variant="whatsapp" class="w-full">
            {{ copy.whatsappWidget.chatLabel }}
          </WhatsAppButton>
        </div>
      </div>
    </Transition>

    <button
      type="button"
      @click="toggleOpen"
      :aria-label="copy.whatsappWidget.ariaLabel"
      class="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <X v-if="open" :size="26" />
      <svg v-else viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
        />
        <path
          d="M12.004 2.003c-5.523 0-10 4.477-10 10 0 1.766.46 3.49 1.333 5.012l-1.37 5.002 5.126-1.345a9.953 9.953 0 0 0 4.911 1.33h.004c5.522 0 10-4.477 10-10s-4.478-9.999-10.004-9.999zm.001 18.166h-.003a8.14 8.14 0 0 1-4.15-1.137l-.298-.177-3.043.799.812-2.966-.194-.304a8.13 8.13 0 0 1-1.246-4.34c0-4.501 3.665-8.166 8.169-8.166 2.182 0 4.233.851 5.776 2.396a8.11 8.11 0 0 1 2.39 5.776c-.002 4.502-3.667 8.119-8.213 8.119z"
        />
      </svg>
    </button>
  </div>
</template>
