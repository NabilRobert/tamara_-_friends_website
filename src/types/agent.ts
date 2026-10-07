import type { IconName } from './icon'

export type AgentId = 'tamara' | 'jessy' | 'salma'

/** Locale-agnostic metadata for an agent — icon and accent only. Copy lives in data/copy/*.ts. */
export interface AgentMeta {
  id: AgentId
  icon: IconName
}
