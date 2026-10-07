<script setup lang="ts">
import { useCopy } from '../../composables/useCopy'
import SectionHeading from '../shared/SectionHeading.vue'
import AgentCard from './AgentCard.vue'
import { agentMeta } from '../../data/agents'
import type { AgentId } from '../../types/agent'

const copy = useCopy()

function iconFor(id: AgentId) {
  return agentMeta.find((item) => item.id === id)?.icon ?? 'bot'
}
</script>

<template>
  <section id="squad" class="px-5 py-20 sm:px-8 sm:py-28">
    <div class="mx-auto flex max-w-6xl flex-col gap-10">
      <SectionHeading
        :eyebrow="copy.agentSquad.eyebrow"
        :title="copy.agentSquad.title"
        :description="copy.agentSquad.description"
        align="center"
      />

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AgentCard v-for="agent in copy.agentSquad.agents" :key="agent.id" :agent="agent" :icon="iconFor(agent.id)" />
      </div>
    </div>
  </section>
</template>
