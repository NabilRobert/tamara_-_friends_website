import type { CopyShape, Locale } from '../../types/content'
import { id } from './id'
import { en } from './en'

export const copyByLocale: Record<Locale, CopyShape> = { id, en }
