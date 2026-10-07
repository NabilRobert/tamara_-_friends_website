import type { LegalLink } from '../types/nav'

export const siteName = 'Tamara and Friends'
export const parentCompany = 'Beobot'
export const siteUrl = 'https://www.tamaraandfriends.my.id'
export const beobotUrl = 'https://www.beobot.my.id'

/** Phone number in international format, no symbols — used to build wa.me links. */
export const whatsappNumber = '6281999197186'
export const whatsappContactName = 'John'
export const whatsappContactRole = 'Sales Marketing Tamara AI'
export const whatsappDisplayNumber = '081999197186'

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const legalPaths = {
  terms: '/syarat-ketentuan',
  privacy: '/kebijakan-privasi',
  dataDeletion: '/penghapusan-data',
}

export const legalLinks: Record<'id' | 'en', LegalLink[]> = {
  id: [
    { to: legalPaths.terms, label: 'Syarat & Ketentuan' },
    { to: legalPaths.privacy, label: 'Kebijakan Privasi' },
    { to: legalPaths.dataDeletion, label: 'Penghapusan Data' },
  ],
  en: [
    { to: legalPaths.terms, label: 'Terms of Service' },
    { to: legalPaths.privacy, label: 'Privacy Policy' },
    { to: legalPaths.dataDeletion, label: 'Data Deletion' },
  ],
}
