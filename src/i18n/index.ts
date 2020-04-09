import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enUS from './en-us';
import ruRU from './ru-ru';

export const languages = [
  {
    title: 'English',
    value: 'enUS',
  },
  {
    title: 'Русский',
    value: 'ruRU',
  },
];

i18n
  .use(initReactI18next)
  .init({
    resources: {
      enUS,
      ruRU,
    },
    lng: 'ruRU',
    fallbackLng: 'enUS',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
