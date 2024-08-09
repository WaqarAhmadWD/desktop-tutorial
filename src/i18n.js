import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json'
import de from '@/locales/de.json'

export default createI18n({
    allowComposition: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: en,
        de: de
    }
});