import type { IconName } from './icon'
import type { AgentId } from './agent'

export type Locale = 'id' | 'en'

export interface IconCard {
  icon: IconName
  title: string
  description: string
}

export interface StepCard extends IconCard {
  label: string
}

export interface StatTile {
  value: string
  label: string
  tone?: 'default' | 'positive' | 'negative'
}

export interface ComparisonChange {
  label: string
  before: string
  after: string
  change: string
}

export interface AgentCopy {
  id: AgentId
  name: string
  role: string
  badge: string
  tagline: string
  description: string
  bullets: string[]
  quote: string
  statBadges: { value: string; label: string }[]
}

export interface NumberedStep {
  number: number
  title: string
  description: string
}

export interface ServiceItem {
  icon: IconName
  label: string
  title: string
  description: string
}

export interface IndustryItem {
  icon: IconName
  label: string
  description: string
}

export interface ApprovalCardCopy {
  statusLabel: string
  title: string
  subtitle: string
  campaignLabel: string
  campaignValue: string
  adsetLabel: string
  adsetValue: string
  accountLabel: string
  accountValue: string
  saveLabel: string
  saveValue: string
  rejectLabel: string
  approveLabel: string
}

export type LegalBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }

export interface LegalSection {
  heading: string
  body: LegalBlock[]
}

export interface LegalPageCopy {
  eyebrow: string
  title: string
  lastUpdated: string
  intro: string
  sections: LegalSection[]
  contactHeading: string
  contactIntro: string
}

export interface NavItem {
  id: string
  label: string
}

export interface CopyShape {
  meta: {
    title: string
    description: string
  }

  header: {
    navItems: NavItem[]
    ctaLabel: string
    languageToggleLabel: string
  }

  hero: {
    badge: string
    title: string
    subtitle: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    deckLabel: string
  }

  executiveSummary: {
    eyebrow: string
    title: string
    description: string
    steps: StepCard[]
    resultLabel: string
    resultText: string
  }

  comparison: {
    eyebrow: string
    title: string
    description: string
    themLabel: string
    themItems: string[]
    usLabel: string
    usItems: string[]
  }

  agentSquad: {
    eyebrow: string
    title: string
    description: string
    agents: AgentCopy[]
  }

  proof: {
    eyebrow: string
    title: string
    subtitle: string
    stats: StatTile[]
    comparisons: ComparisonChange[]
    conclusionLabel: string
    conclusionText: string
  }

  trust: {
    eyebrow: string
    title: string
    description: string
    steps: NumberedStep[]
    exampleCard: ApprovalCardCopy
  }

  services: {
    eyebrow: string
    title: string
    description: string
    items: ServiceItem[]
  }

  goodFitFor: {
    eyebrow: string
    title: string
    description: string
    items: IndustryItem[]
    footnote: string
  }

  whyUs: {
    eyebrow: string
    title: string
    items: IconCard[]
  }

  ctaFooter: {
    eyebrow: string
    title: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    contactName: string
    aboutHeading: string
    aboutDescription: string
    servicesLabel: string
    services: { icon: IconName; label: string }[]
  }

  footer: {
    tagline: string
    navHeading: string
    legalHeading: string
    contactHeading: string
    rightsReserved: string
  }

  legal: {
    terms: LegalPageCopy
    privacy: LegalPageCopy
    dataDeletion: LegalPageCopy
  }

  notFound: {
    title: string
    description: string
    ctaLabel: string
  }
}
