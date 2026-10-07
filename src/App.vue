<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <div class="flex-1">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>
