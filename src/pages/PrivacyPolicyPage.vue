<script setup lang="ts">
import { useCopy } from '../composables/useCopy'
import LegalContent from '../components/legal/LegalContent.vue'

const copy = useCopy()
</script>

<template>
  <LegalContent :copy="copy.legal.privacy" />
</template>
