import { createI18n } from 'vue-i18n'
import ozLatin from '@/locales/oz-latin/home'
import uzCyril from '@/locales/uz-cyril/home'

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'oz',
  fallbackLocale: 'oz',
  messages: {
    oz: ozLatin,
    uz: uzCyril
  }
})