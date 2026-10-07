<script setup lang="ts">
import {
  Megaphone,
  TrendingUp,
  Zap,
  Database,
  Car,
  Landmark,
  Store,
  ShoppingCart,
  Building2,
  Bot,
  Shield,
  MessagesSquare,
  CheckCircle2,
  Brain,
  Mic,
  Eye,
  Settings,
  Gauge,
  MessageCircle,
} from '@lucide/vue'
import type { Component } from 'vue'
import type { IconName } from '../../types/icon'

const iconMap: Record<IconName, Component> = {
  megaphone: Megaphone,
  trendingUp: TrendingUp,
  zap: Zap,
  database: Database,
  car: Car,
  landmark: Landmark,
  store: Store,
  shoppingCart: ShoppingCart,
  building2: Building2,
  bot: Bot,
  shield: Shield,
  messagesSquare: MessagesSquare,
  checkCircle: CheckCircle2,
  brain: Brain,
  mic: Mic,
  eye: Eye,
  settings: Settings,
  gauge: Gauge,
  whatsapp: MessageCircle,
}

const toneClasses = {
  light: 'bg-brand-cream-100 text-brand-orange-500',
  dark: 'bg-white/10 text-white',
  accentOnDark: 'bg-white/10 text-brand-orange-400',
} as const

withDefaults(
  defineProps<{
    icon: IconName
    tone?: keyof typeof toneClasses
    size?: number
  }>(),
  { tone: 'light', size: 22 },
)
</script>

<template>
  <span :class="['inline-flex items-center justify-center rounded-full', toneClasses[tone]]">
    <component :is="iconMap[icon]" :size="size" :stroke-width="2" aria-hidden="true" />
  </span>
</template>
