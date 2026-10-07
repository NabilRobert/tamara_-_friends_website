<script setup lang="ts">
import logoUrl from '../../assets/logo.png'

withDefaults(
  defineProps<{
    size?: number
    withWordmark?: boolean
    wordmarkClassName?: string
  }>(),
  { size: 40, withWordmark: true, wordmarkClassName: '' },
)
</script>

<template>
  <span class="inline-flex items-center gap-2.5">
    <img
      :src="logoUrl"
      alt="Tamara and Friends"
      :width="size"
      :height="size"
      class="shrink-0 rounded-full"
      :style="{ width: `${size}px`, height: `${size}px` }"
    />
    <span v-if="withWordmark" :class="['font-display font-semibold', wordmarkClassName]">
      Tamara <span class="text-brand-orange-500">&amp;</span> Friends
    </span>
  </span>
</template>
