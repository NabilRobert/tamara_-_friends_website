<script setup lang="ts">
import type { AgentCopy } from '../../types/content'
import type { IconName } from '../../types/icon'
import IconBadge from '../shared/IconBadge.vue'

defineProps<{
  agent: AgentCopy
  icon: IconName
}>()
</script>

<template>
  <div class="flex flex-col gap-5 rounded-2xl border border-ink/5 bg-white p-6 shadow-sm sm:p-7">
    <div class="flex items-center gap-4">
      <IconBadge :icon="icon" class="size-14" :size="26" />
      <div>
        <h3 class="font-display text-xl font-semibold text-ink">{{ agent.name }}</h3>
        <p class="text-sm font-medium text-brand-orange-600">{{ agent.role }}</p>
      </div>
    </div>

    <span class="w-fit rounded-full bg-brand-navy-950 px-3 py-1 text-xs font-semibold tracking-wide text-white">
      {{ agent.badge }}
    </span>

    <p class="text-xs font-medium text-ink-muted">{{ agent.tagline }}</p>
    <p class="text-sm leading-relaxed text-ink-muted">{{ agent.description }}</p>

    <ul class="flex flex-col gap-2">
      <li v-for="bullet in agent.bullets" :key="bullet" class="flex items-start gap-2 text-sm text-ink">
        <span class="mt-2 size-1.5 shrink-0 rounded-full bg-brand-orange-500" aria-hidden="true" />
        {{ bullet }}
      </li>
    </ul>

    <blockquote class="rounded-xl bg-brand-cream-100 p-4 text-sm leading-relaxed text-ink-muted italic">
      &ldquo;{{ agent.quote }}&rdquo;
    </blockquote>

    <div class="flex flex-wrap gap-4 border-t border-ink/5 pt-4">
      <div v-for="stat in agent.statBadges" :key="stat.label">
        <p class="font-display text-lg font-semibold text-ink">{{ stat.value }}</p>
        <p class="text-xs text-ink-muted">{{ stat.label }}</p>
      </div>
    </div>
  </div>
</template>
