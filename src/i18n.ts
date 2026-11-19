import { createI18n } from 'vue-i18n'

import uzCyril from './locales/uz-cyril/home'

export const i18n = createI18n({
  locale: 'uz-cyril',
  fallbackLocale: 'uz-cyril',
  messages: {
    'uz-cyril': uzCyril
  }
})