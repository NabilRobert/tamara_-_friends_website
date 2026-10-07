import { ref, watch } from 'vue'
import type { Locale } from '../types/content'

const STORAGE_KEY = 'tamara-and-friends:locale'

function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'en' ? 'en' : 'id'
  } catch {
    return 'id'
  }
}

// Module-level singleton so every component shares the same reactive locale.
const locale = ref<Locale>(readStoredLocale())

watch(
  locale,
  (value) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // ignore storage failures (private browsing, blocked storage, etc.)
    }
    document.documentElement.lang = value
  },
  { immediate: true },
)

function setLocale(next: Locale) {
  locale.value = next
}

function toggleLocale() {
  locale.value = locale.value === 'id' ? 'en' : 'id'
}

export function useLanguage() {
  return { locale, setLocale, toggleLocale }
}
