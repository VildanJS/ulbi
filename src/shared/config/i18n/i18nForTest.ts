import i18nForTest from 'i18next'
import { initReactI18next } from 'react-i18next'

i18nForTest
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    resources: { en: { translations: {} } },
  })

export default i18nForTest
