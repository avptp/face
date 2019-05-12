import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import resources from './locales';

i18n
  .use(initReactI18next)
  .use(detector)
  .init({
    resources,
    fallbackLng: 'ca',
    whitelist: ['ca', 'es'],
    nonExplicitWhitelist: true,
    load: 'languageOnly',
    defaultNS: 'app',
    returnObjects: true,

    interpolation: {
      escapeValue: false
    },

    detection: {
      order: ['localStorage', 'navigator', 'querystring'],

      lookupLocalStorage: 'language',
      lookupQuerystring: 'hl',

      caches: ['localStorage'],
    },

    wait: true,
  });

i18n.options.safeWhitelist = i18n.options.whitelist.filter(item =>
  item !== 'cimode'
);

export default i18n;
