import { computed } from 'vue'
import { copyByLocale } from '../data/copy'
import { useLanguage } from './useLanguage'

export function useCopy() {
  const { locale } = useLanguage()
  return computed(() => copyByLocale[locale.value])
}
